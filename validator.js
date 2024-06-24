
//Đối tượng `Validator`
function Validator(options) {

    var selectorRules = {};
    //Hàm thực hiện validate
    function validate (inputElement,rule) {
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
        var errorMasseage;
        
        //Lấy ra các rules của selector
        var rules = selectorRules[rule.selector];
        //Lặp qua từng rules và check
        //Nếu có lỗi thì dừng check
        for (var i = 0; i< rules.length ; i++) {
            errorMasseage = rules[i](inputElement.value);
            if(errorMasseage) break;
        }



        if(errorMasseage) {
                        
            errorElement.innerText = errorMasseage;
            inputElement.parentElement.classList.add('invalid');
        }else {
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid');
        }
        return !errorMasseage;
    }


    //Lấy Element của form cần validate
    var formElement = document.querySelector(options.form)
    // console.log(formElement)
     
    if(formElement) {
        //Khi submit form
        formElement.onsubmit = function(e) {
            e.preventDefault();

            var isFormValid = true;


            //Lặp qua từng rule và validate
            options.rules.forEach(function (rule) {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement,rule);
                if(!isValid) {
                    isFormValid = false;
                   }
            });


            if(isFormValid) {
                if(typeof options.onSubmit === 'function') {
                    var enableInputs = formElement.querySelectorAll('[name]');

                    var formValues = Array.from(enableInputs).reduce(function (values,input) {
                        return (values[input.name] = input.value) && values;
                    },{});

                    options.onSubmit(formValues);
                }
               }
        }

        //Lặp qua mỗi rule và xử lý (lắng nghe sự kiện blur,input,...)
        options.rules.forEach(function (rule) {

            //Lưu lại các Rules cho mỗi input

            if(Array.isArray(selectorRules[rule.selector])){
                selectorRules[rule.selector].push(rule.test);
            }else {
                selectorRules[rule.selector] = [rule.test];
            }

            var inputElement = formElement.querySelector(rule.selector);
            
            if(inputElement) {
                //Xử lý tường hợp blur khỏi input
                inputElement.onblur = function () {
                
                   var isValid = validate(inputElement,rule);
                   
                   
                }
                //Xử lý mỗi khi người dùng nhập vào input
                inputElement.oninput = function () {
                    var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
                    errorElement.innerText = '';
                    inputElement.parentElement.classList.remove('invalid');
                }
            }
        });
        
    }   

}

 //từ input lấy ra thẻ cha => từ thẻ chả lấy ra thẻ con
//làm cách này sẽ biết mình đang làm cho thẻ con nào trong
 //khi có rất nhiều thẻ con trùng tên nhau

//Định nghĩa rules
//Nguyên tắc của các rules:
//1. Khi có lỗi => Trả ra message lỗi
//2. Khi hợp lệ => không trả ra cái gì cả (undefined)
Validator.isRequired = function(selector,message) {
    return {
        selector: selector,
        test: function (value) { //kiem tra xem ho co nhap khong
            return value.trim() ? undefined : message || 'Vui lòng nhập trường này'
        } 
    };
}

Validator.isEmail = function(selector,message) {
    return {
        selector: selector,
        test: function (value) { //kiểm tra người dung cho nhập email không
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
           return regex.test(value) ? undefined : message || 'Trường này phải là email';
         } 
    };
}

Validator.minLength = function(selector,min,message) {
    return {
        selector: selector,
        test: function (value) { //kiểm tra người dung cho nhập email không
            return value.length >= min ? undefined : message || `Vui lòng nhập tối thiểu ${min} kí tự`
         } 
    };
}

Validator.isConfirmed = function (selector,getConfirmValue,message) {
    return {
        selector: selector,
        test: function (value) {
            return value === getConfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác'
        }
    }
}