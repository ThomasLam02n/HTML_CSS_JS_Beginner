//Đối tượng Validator
function Validator(options) {
  function validate(inputElement, rule) {
    var erroElement = inputElement.parentElement.querySelector(".form-message");
    var errorMessage = rule.test(inputElement.value);

    if (errorMessage) {
      erroElement.innerText = errorMessage;
      inputElement.parentElement.classList.add("invalid");
    } else {
      erroElement.innerText = "";
      inputElement.parentElement.classList.remove("invalid");
    }
  }

  var formElement = document.querySelector(options.form);
  if (formElement) {
    options.rules.forEach(function (rule) {

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
Validator.isRequire = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      return value.trim() ? undefined : "Vui lòng nhập trường này";
    },
  };
};

Validator.isEmail = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(value) ? undefined : "Trường này phải là email";
    },
  };
};

Validator.minLength = function (selector, min) {
    return {
      selector: selector,
      test: function (value) {
        return value.length >= min ? undefined : "Nhập tối thiểu 6 ký tự";
      },
    };
  };