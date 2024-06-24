
//Đối tượng `Validator`
function Validator(options) {
    //Hàm thực hiện validate
    function validate (inputElement,rule) {
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
        var errorMasseage = rule.test(inputElement.value);

        if(errorMasseage) {
                        
            errorElement.innerText = errorMasseage;
            inputElement.parentElement.classList.add('invalid');
        }else {
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid');
        }
            
    }


    //Lấy Element của form cần validate
    var formElement = document.querySelector(options.form)
    // console.log(formElement)
     
    if(formElement) {

        options.rules.forEach(function (rule) {
           
            var inputElement = formElement.querySelector(rule.selector);
            
            if(inputElement) {
                //Xử lý tường hợp blur khỏi input
                inputElement.onblur = function () {
                
                    validate(inputElement,rule);
                }
                //Xử lý mỗi khi người dùng nhập vào input
                inputElement.oninput = function () {
                    var errorElement = inputElement.parentElement.querySelector('.form-message');
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