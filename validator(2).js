function Validator(formSelector){
    var _this = this;
    var formRules = {};
    
    function getParent (element,selector) {
        while (element.parentElement) {
            if(element.parentElement.matches(selector)){
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }

    /**
     * Quy ước tạo rule: 
     * -Nếu có lỗi thì return ra `error message`
     * -Nếu không có lỗi return ra undefined
     */
    var validatorRules = {
        required: function (value) {
            return value ? undefined : 'Vui lòng nhập trường này';
        },
        email: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Vui lòng nhập trường này';
        },
        min: function (min) {
            return function (value) {
                return value.length >= min ? undefined : `Vui lòng nhập ít nhất ${min} kí tự`;
            }
        },
        max: function (max) {
            return function (value) {
                return value.length <= max ? undefined : `Vui lòng nhập tối đa ${max} kí tự`;
            }
        },
    }


    //Lấy ra form element trong DOM theo `formSelector`
    var formElement = document.querySelector(formSelector);
    //Chỉ xử lý khi có element trong DOM
    if(formElement) {

        var inputs = formElement.querySelectorAll('[name][rules]');
       
        for(var input of inputs) {
            var rules = input.getAttribute('rules').split('|');
            for (var rule of rules) {
                var ruleInfo;
                var isRuleHasValue = rule.includes(':');

                if(isRuleHasValue) {
                    ruleInfo = rule.split(':');
                    rule = ruleInfo[0];
                    // validatorRules[rule](ruleInfo[1])
                }

                var ruleFunc = validatorRules[rule];
                if (isRuleHasValue) {
                    ruleFunc = ruleFunc(ruleInfo[1])
                }

                if(Array.isArray(formRules[input.name])) {
                    formRules[input.name].push(ruleFunc);
                } else {
                    formRules[input.name] = [ruleFunc];
                }
            }
            

            //Lắng nghe sự kiện để validate(blur,change,...)
            input.onblur = handleVadildate;
            input.oninput = handleClearError;
        }
        //hamf thuc hien validate
        function handleVadildate(event) {
            var rules = formRules[event.target.name];
            var errorMessage;

            for(var rule of rules) {

                errorMessage = rule(event.target.value)
                if(errorMessage) {
                    break;
                }
            }

            //neu co loi thi hien thi message loi ra UI
            if(errorMessage) {
                var formGroup = getParent(event.target,'.form-group')
                if(formGroup) {
                    formGroup.classList.add('invalid');
                    var formMessage = formGroup.querySelector('.form-message');
                    if(formMessage) {
                        formMessage.innerText = errorMessage;
                    }   
                }
            }
            
            return !errorMessage;
        }
        

        //function clear messageError
        function handleClearError(event) {
            var formGroup = getParent(event.target,".form-group");
            if(formGroup.classList.contains('invalid')) {
                formGroup.classList.remove('invalid');

                var formMessage = formGroup.querySelector('.form-message');
                if(formMessage) {
                    formMessage.innerText = '';
                }  
            }
        }
        
    }

    //xu ly hanh vi submit form
    formElement.onsubmit = function(event) {
        event.preventDefault();
        console.log(_this);
        //this keyword   

        var inputs = formElement.querySelectorAll('[name][rules]');
       
        var isValid = true;

        for(var input of inputs) { 
            if(!handleVadildate({target: input}) ) {
                isValid = false;
            }
        }   


        
        //khi khong co loi thi submit form

        if(isValid) {
            formElement.submit();

            if(typeof _this.onSubmit === 'function') {

                var enableInputs = formElement.querySelectorAll('[name]');

                   var formValues = Array.from(enableInputs).reduce(function (values,input) {
                        
                    switch(input.type) {
                        case 'radio':
                            values[input.name] = formElement.querySelector('input[name ="' + input.name + '"]:checked').value
                             break;
                        case 'checkbox':
                            if(!input.matches(':checked')){
                                values[input.name] = '';
                                return values;
                            }
                            if(!Array.isArray(values[input.name])) {
                                values[input.name] = [];
                            }
                            values[input.name].push(input.value);
                            break;
                        case 'file':
                            values[input.name] = input.files;
                            break;
                        default:
                            values[input.name] = input.value;
                    }

                    return values;
                    },{});


                _this.onSubmit(formValues);
            }else {
                formElement.submit();
            }
        }
    }
}