// @@@@@@@@@@@ ELEMENTS @@@@@@@@@@@@ //

// Get Elements in Cards-container

// front card
let cardName = document.querySelector(".name");
let cardNumber = document.querySelector(".zeros");
let cardDateMonth = document.querySelector(".date-month");
let cardDateYear = document.querySelector(".date-year");
// back card
let cvc = document.querySelector(".cvc");

// ===========================================//
// Get Elements in form-container

let formSection = document.querySelector(".form-container");
let thanks = document.querySelector(".thanks");
let errorMsg = document.querySelectorAll(".error");

// ===========================================================================================//
//@@@@@@@@@@@@@@@@@@ FUNCTIONS @@@@@@@@@@@@@@@@@@@@ //


// TODO 2 => Receive error messages when the form is submitted if:
//            - Any input field is empty
//            - The card number, expiry date, or CVC fields are in the wrong format




// the hard way 

window.onload = function () {
  errorMsg.forEach((error) => (error.style.display = "none"));
};

// ========== handle name ============
let cardNameInput = document.getElementById("nameInput");
let errorMsgBlankName = document.getElementById("name-blank");
let errorMsgWrongFormatName = document.getElementById("name-wrong-format");
let regexName = /^[a-z\s?]+$/gi;

cardNameInput.addEventListener("keyup", () => {
  if (cardNameInput.value.match(regexName)) {
    errorMsgBlankName.style.display = "none";
    errorMsgWrongFormatName.style.display = "none";
  } else if (cardNameInput.value == "") {
    errorMsgBlankName.style.display = "block";
    errorMsgWrongFormatName.style.display = "none";
  } else {
    errorMsgBlankName.style.display = "none";
    errorMsgWrongFormatName.style.display = "block";
  }
});

// ============== handle card number =======================
let cardNumberInput = document.getElementById("cardnumber");
let errorMsgBlankNumber = document.getElementById("number-blank");
let errorMsgWrongFormatNumber = document.getElementById("number-wrong-format");
let regexNumber = /^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$/;

cardNumberInput.addEventListener("keyup", () => {
  if (cardNumberInput.value.match(regexNumber)) {
    errorMsgBlankNumber.style.display = "none";
    errorMsgWrongFormatNumber.style.display = "none";
    return;
  } else if (cardNumberInput.value == "") {
    errorMsgBlankNumber.style.display = "block";
    errorMsgWrongFormatNumber.style.display = "none";
    return;
  } else {
    errorMsgBlankNumber.style.display = "none";
    errorMsgWrongFormatNumber.style.display = "block";
    return;
  }
});

// ============== handle expiration date  =======================
// ==== Month ====
let cardDateMonthInput = document.getElementById("expirationdateMonth");
let errorMsgBlankexpiration = document.getElementById("expirationdate-blank");
let errorMsgWrongFormatexpiration = document.getElementById(
  "expirationdate-wrong-format"
);
let regexexpirationMonth = /^([1-9]|1[012])$/;

cardDateMonthInput.addEventListener("keyup", () => {
  if (cardDateMonthInput.value.match(regexexpirationMonth)) {
    errorMsgBlankexpiration.style.display = "none";
    errorMsgWrongFormatexpiration.style.display = "none";
    return;
  } else if (cardDateMonthInput.value == "") {
    errorMsgBlankexpiration.style.display = "block";
    errorMsgWrongFormatexpiration.style.display = "none";
    return;
  } else {
    errorMsgBlankexpiration.style.display = "none";
    errorMsgWrongFormatexpiration.style.display = "block";
    return;
  }
});

// ==== Year =====
let cardDateYearInput = document.getElementById("expirationdateYear");
let regexexpiration = /^\d{1,2}$/g;
cardDateYearInput.addEventListener("keyup", () => {
  if (cardDateYearInput.value.match(regexexpiration)) {
    errorMsgBlankexpiration.style.display = "none";
    errorMsgWrongFormatexpiration.style.display = "none";
    return;
  } else if (cardDateYearInput.value == "") {
    errorMsgBlankexpiration.style.display = "block";
    errorMsgWrongFormatexpiration.style.display = "none";
    return;
  } else {
    errorMsgBlankexpiration.style.display = "none";
    errorMsgWrongFormatexpiration.style.display = "block";
    return;
  }
});

// ============= handle cvc ================
let cvcInput = document.getElementById("securitycode");
let errorMsgBlankcvc = document.getElementById("securitycode-blank");
let errorMsgWrongFormatcvc = document.getElementById(
  "securitycode-wrong-format"
);
let regexcvc = /\d/g;

cvcInput.addEventListener("keyup", () => {
  if (cvcInput.value.match(regexcvc)) {
    errorMsgBlankcvc.style.display = "none";
    errorMsgWrongFormatcvc.style.display = "none";
  } else if (cvcInput.value == "") {
    errorMsgBlankcvc.style.display = "block";
    errorMsgWrongFormatcvc.style.display = "none";
  } else {
    errorMsgBlankcvc.style.display = "none";
    errorMsgWrongFormatcvc.style.display = "block";
  }
});

// ============= handle confirm Button ================
let confirmButton = document.getElementById("confirm");

confirmButton.addEventListener("click", (event) => {
  event.preventDefault();
  submit()
});

function submit() {
  // name
  if (cardNameInput.value.match(regexName)) {
    formSection.style.display = "none";
    thanks.style.display = "flex";
    errorMsgBlankName.style.display = "none";
    errorMsgWrongFormatName.style.display = "none";
  } else if (cardNameInput.value == "") {
    errorMsgBlankName.style.display = "block";
    errorMsgWrongFormatName.style.display = "none";
  } else {
    errorMsgBlankName.style.display = "none";
    errorMsgWrongFormatName.style.display = "block";
  }

  // card number
  if (cardNumberInput.value.match(regexNumber)) {
    formSection.style.display = "none";
    thanks.style.display = "flex";
    errorMsgBlankNumber.style.display = "none";
    errorMsgWrongFormatNumber.style.display = "none";
  } else if (cardNumberInput.value == "") {
    errorMsgBlankNumber.style.display = "block";
    errorMsgWrongFormatNumber.style.display = "none";
  } else {
    errorMsgBlankNumber.style.display = "none";
    errorMsgWrongFormatNumber.style.display = "block";
  }

  // expiration date month
  if (cardDateMonthInput.value.match(regexexpiration)) {
    formSection.style.display = "none";
    thanks.style.display = "flex";
    errorMsgBlankexpiration.style.display = "none";
    errorMsgWrongFormatexpiration.style.display = "none";
  } else if (cardDateMonthInput.value == "") {
    errorMsgBlankexpiration.style.display = "block";
    errorMsgWrongFormatexpiration.style.display = "none";
  } else {
    errorMsgBlankexpiration.style.display = "none";
    errorMsgWrongFormatexpiration.style.display = "block";
  }

  // expiration date year
  if (cardDateYearInput.value.match(regexexpiration)) {
    formSection.style.display = "none";
    thanks.style.display = "flex";
    errorMsgBlankexpiration.style.display = "none";
    errorMsgWrongFormatexpiration.style.display = "none";
  } else if (cardDateYearInput.value == "") {
    errorMsgBlankexpiration.style.display = "block";
    errorMsgWrongFormatexpiration.style.display = "none";
  } else {
    errorMsgBlankexpiration.style.display = "none";
    errorMsgWrongFormatexpiration.style.display = "block";
  }

  // cvc
  if (cvcInput.value.match(regexcvc)) {
    formSection.style.display = "none";
    thanks.style.display = "flex";
    errorMsgBlankcvc.style.display = "none";
    errorMsgWrongFormatcvc.style.display = "none";
  } else if (cvcInput.value == "") {
    errorMsgBlankcvc.style.display = "block";
    errorMsgWrongFormatcvc.style.display = "none";
  } else {
    errorMsgBlankcvc.style.display = "none";
    errorMsgWrongFormatcvc.style.display = "block";
  }
}

// TODO 1 => Fill in the form and see the card details update in real-time
cardNameInput.oninput = () => {
  cardName.innerHTML = cardNameInput.value;
};

cardNumberInput.oninput = () => {
  cardNumber.innerHTML = cardNumberInput.value;
};

cardDateMonthInput.oninput = () => {
  cardDateMonth.innerHTML = cardDateMonthInput.value;
};

cardDateYearInput.oninput = () => {
  cardDateYear.innerHTML = cardDateYearInput.value;
};

cvcInput.oninput = () => {
  cvc.innerHTML = cvcInput.value;
};

// function to put space in card number after every 4 numbers
function cardSpace() {
  let cardDigit = cardNumberInput.value;
  if (
    cardDigit.length == 4 ||
    cardDigit.length == 9 ||
    cardDigit.length == 14
  ) {
    cardNumberInput.value = cardDigit + " ";
    cardNumberInput.max = 1;
  }
}

cardNumberInput.addEventListener("keypress", () => {
  return cardSpace();
});
// ========================================//

// short code

// const checkInfo = () => {
//   const inputs = document.querySelectorAll("input");

//   const results = [
//       /^[a-z\s?]+$/ig.test(cardNameInput.value),
//       /\d{16}/.test(cardNumberInput.value),
//       /^\d{1,2}$/g.test(cardDateMonthInput.value),
//       /^\d{1,2}$/g.test(cardDateYearInput.value),
//       /\d{3}/g.test(cvcInput.value)
//   ];

//   results.forEach((val, i) => {
//       const warning = inputs[i].parentNode.querySelector("span");
//       const inputType = inputs[i].dataset.type;
//       if (val !== true) {
//           inputs[i].style.border = "1px solid #ff5252";
//           warning.textContent = `${inputs[i].value === "" ? "Can't be blank" : `Wrong format, ${inputType} only`}`;
//       } else {
//           inputs[i].style.border = "1px solid #8e8593";
//           inputs[i].parentNode.querySelector("span").textContent = "";
//       }
//   });
//   if (results.every(val => val === true)) {
//       form.classList.add('hide')
//       finish.classList.remove('hide')
//   }
// };
// confirmButton.addEventListener("click", checkInfo);

// ===================================================================================================================
