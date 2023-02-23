//Đối tượng Validator
function Validator(options) {
  
  var selectorRules = {};

  //Hàm thực hiện validate
  function validate(inputElement, rule) {
    var erroElement = inputElement.parentElement.querySelector(".form-message");
    var errorMessage;

    //Lấy ra các rules của selector
    var rules = selectorRules[rule.selector];
    
    //Lặp qua từng rule và kiểm tra
    //Nếu có lỗi thì dừng việc kiểm tra
    for(var i = 0; i < rules.length; ++i) {
      errorMessage = rules[i](inputElement.value);
      if(errorMessage) break;
    }

    if (errorMessage) {
      erroElement.innerText = errorMessage;
      inputElement.parentElement.classList.add("invalid");
    } else {
      erroElement.innerText = "";
      inputElement.parentElement.classList.remove("invalid");
    }

    return !errorMessage;
  }

  var formElement = document.querySelector(options.form);
  if (formElement) {
    //khi submit form
    formElement.onsubmit = function (e) {
      e.preventDefault();

      var isFormValid = true;
      
      //Lặp qua từng rules và validate
      options.rules.forEach(function (rule) {
        var inputElement = formElement.querySelector(rule.selector);
        var isValid = validate(inputElement, rule);
        if(!isValid) {
          isFormValid = false;
        }
      });

      if(isFormValid) {
        //Trường hợp submit với javaScript
        if (typeof options.onSubmit === 'function') {

          var enableInputs = formElement.querySelectorAll('[name]');

          var formValues = Array.from(enableInputs).reduce(function (value, input) {
            return (value[input.name] = input.value) && value;
          }, {});

          options.onSubmit(formValues);
        }
        //Trường hợp submit với hành vi mặc định
        else {
          formElement.submit();
        }
      }
    }
    //Lặp qua mỗi rule và xử lý (lắng nghe sự kiện blur, input, ...)
    options.rules.forEach(function (rule) {

      //Lưu lại các rules cho mỗi input

      if(Array.isArray(selectorRules[rule.selector])) {
        selectorRules[rule.selector].push(rule.test);
      }else {
        selectorRules[rule.selector] = [rule.test];
      }

      // selectorRules[rule.selector] = rule.test;

      var inputElement = formElement.querySelector(rule.selector);
      if (inputElement) {
        //Xử lí trường hợp blur khỏi input
        inputElement.onblur = function () {
          validate(inputElement, rule);
        };

        //Xử lí mỗi khi người dùng nhập vào input
        inputElement.oninput = function () {
          var erroElement =
            inputElement.parentElement.querySelector(options.errorSelector);

          erroElement.innerText = "";
          inputElement.parentElement.classList.remove("invalid");
        };
      }
    });
  }
}

//Định nghĩa các Rules
//Nguyên tắc của các rueles:
//1. Khi có lỗi => trả ra message lỗi
//2. Khi hợp lệ => undefined
Validator.isRequire = function (selector, message) {
  return {
    selector: selector,
    test: function (value) {
      return value.trim() ? undefined : message || "Vui lòng nhập trường này";
    },
  };
};

Validator.isEmail = function (selector, message) {
  return {
    selector: selector,
    test: function (value) {
      var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(value) ? undefined : message || "Trường này phải là email";
    },
  };
};

Validator.minLength = function (selector, min, message) {
  return {
    selector: selector,
    test: function (value) {
      return value.length >= min ? undefined : message || "Nhập tối thiểu 6 ký tự";
    },
  };
};

Validator.isConfirmed = function (selector, getConfirmValue, message) {
  return {
    selector: selector,
    test: function(value) {
      return value === getConfirmValue() ? undefined : message || "Giá trị nhập vào không chính xác"
    }
  }
}