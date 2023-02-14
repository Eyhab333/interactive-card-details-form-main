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

let cardNumberInput = document.getElementById("cardnumber");
let cardDateMonthInput = document.getElementById("expirationdateMonth");
let cardDateYearInput = document.getElementById("expirationdateYear");
let cvcInput = document.getElementById("securitycode");
let confirmButton = document.getElementById("confirm");

let formSection = document.querySelector(".form-container");
let thanks = document.querySelector(".thanks");


// name
let cardNameInput = document.getElementById("nameInput");
let errorMsgBlankName = document.getElementById("name-blank");
let errorMsgRongFormatName = document.getElementById("name-rong-format");
let regexName = /^[a-z\s?]+$/ig;


confirmButton.addEventListener("click", (event) => {
  event.preventDefault();
  
  if (cardNameInput.value === "") {
    formSection.style.display = ""
    thanks.style.display = "none"
  } else {
    formSection.style.display = "none"
    thanks.style.display = "flex"
  }
});


cardNameInput.addEventListener("keyup" , () => {
  if (cardNameInput.value.match(regexName)) {
    errorMsgBlankName.style.display = "none"
    errorMsgRongFormatName.style.display = "none"
  } else if (cardNameInput.value == "") {
    errorMsgBlankName.style.display = "block"
    errorMsgRongFormatName.style.display = "none"
  } else {
    errorMsgBlankName.style.display = "none"
    errorMsgRongFormatName.style.display = "block"
  }
})








// ===========================================================================================//
//@@@@@@@@@@@@@@@@@@ FUNCTIONS @@@@@@@@@@@@@@@@@@@@ //

// TODO 2 => Receive error messages when the form is submitted if:
//            - Any input field is empty
//            - The card number, expiry date, or CVC fields are in the wrong format

// ===================================================================================================================
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
// confirmBtn.addEventListener("click", checkInfo);

// ===================================================================================================================

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
