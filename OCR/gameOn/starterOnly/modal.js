// VARIABLES

// On récupère le noeud avec l'ID myTopnav
const menu_deroulant = document.querySelector("#menu_deroulant");

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalBtnClose = document.querySelectorAll(".close");
const btnCloseEnd = document.querySelectorAll(".btn-close");

// Const pour récupérer les valeurs dans les inputs
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const birthdate = document.querySelector("#birthdate");
const quantity = document.querySelector("#quantity");
//const locationTournoi = document.getElementsByName("location");
const localisationInput = document.querySelector("input[name='location']:checked");
const myButton = document.querySelector('#checkbox1');

let control = document.querySelectorAll(".text-control");
let erreur = document.querySelectorAll("#erreur");
let input = document.querySelectorAll("input");
// création de la variable qui récupère les données de l'input
let inputValue = '';
// creation de la variable qui permet de sélectionner une date d'anniversaire <= à la date du jour
let today = new Date().toISOString().split("T")[0];

let btnSubmitValidationForm = document.querySelector("#button");
let inputFirst = document.querySelector("#first");
let inputLast = document.querySelector("#last");
let inputEmail = document.querySelector("#email");
let inputBirthdate = document.querySelector("#birthdate");
let inputQuantity = document.querySelector("#quantity");
let radioTournoiList = document.getElementsByName("location");
let checkboxValide = document.querySelector("#checkbox1");



// FUNCTIONS
/**
 * Manage the navigation page
 */
function openClosePageNavigation() {
  var nodeNavigation = document.getElementById("pageNavigation");

  if (nodeNavigation.classList.contains("isNavigationOpen")) {
      nodeNavigation.classList.remove("isNavigationOpen");
  } else {
      nodeNavigation.classList.add("isNavigationOpen");
  }
}

/**
 * launch modal form
 */
function launchModal() {
  modalbg.style.display = "block";

  const myBody = document.querySelector('body');
  myBody.classList.add('isModalOpen');
}

/**
 * closing modal form
 */
function closeModal() {
  modalbg.style.display = "none";

  const openForm = document.querySelector('#openForm');
  openForm.classList.remove('hidden');

  const closeForm = document.querySelector('#closeForm');
  closeForm.classList.remove('active');

  const myBody = document.querySelector('body');
  myBody.classList.remove('isModalOpen');
}

/**
 * function to validate lastname and firstname
 * @param {object} inputName 
 * @param {string} inputId 
 * @returns {boolean} isInputValid retourne si l'input est rempli
 */
function checkInputsValidationName (inputName, inputId) {
  const error = document.querySelector('#' + inputId );
  let inputFirst = firstName.value;
  let inputLast = lastName.value;
  let isInputValid = false;

  if (inputName.value === '' || inputName.value.trim().length < 2) {
    error.innerHTML = 'Merci de remplir ce champ.';
    isInputValid = false;
  } else {
    error.innerHTML = '';
    isInputValid = true;
  }

  //console.log('le champ est : ' + isInputValid)
  //return isInputValid;
  //console.log(inputName.value);
  return {
    'isInputValid': isInputValid,
    'inputLast': inputLast,
    'inputFirst': inputFirst
  }
} 

/**
 * function to validate email
 * @returns {boolean} isInputValid retourne si l'input est rempli
 */
function checkInputValidationEmail () {
  const error = document.querySelector('#emailError');

  //console.log('on insert');
  //console.log(event.target);
  //console.log(event.target.value);
  let regex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i;
  let inputEmail = email.value;
  let isInputValid = false;

  if (regex.test(inputEmail)) {
    error.innerHTML = '';
    isInputValid = true;
  } else {
    error.innerHTML = 'Merci de remplir correctement ce champ.';
    isInputValid = false;
  }
  //console.log(email.value);
  //return isInputValid;
  return {
    'isInputValid': isInputValid,
    'inputEmail': inputEmail
  }
}

/**
 * function to validate birthdate
 * @returns {boolean} isInputValid retourne si l'input est rempli
 */
function checkInputValidationBirthdate () {
  const error = document.querySelector('#birthdateError');
  //let date = new Date();
  let birthday = birthdate.value;
  let isInputValid = false;

  //console.log(date);
  if(birthday === '') {
    error.innerHTML = 'Merci de remplir ce champ.';
    isInputValid = false;
  } else {
    error.innerHTML = '';
    isInputValid = true;
  }
  //console.log(birthdate.value);
  //return isInputValid;
  return {
    'isInputValid': isInputValid,
    'birthday': birthday
  }
}

/**
 * function to validate tournament quantity
 * @returns {boolean} isInputValid retourne si l'input est rempli
 */
function checkInputValidationQuantity () {
  const error = document.querySelector('#quantityError');
  //let quantityValue = quantity.value;
  let inputQuantity = quantity.value;
  let isInputValid = false;

  if (quantity.value === '' || isNaN(quantity.value) || quantity.value >= 100) {
    error.innerHTML = 'Merci de remplir ce champ.';
    isInputValid = false;
  } else {
    error.innerHTML = '';
    isInputValid = true;
  }
  //console.log(quantity.value);
  //return isInputValid
  return {
    'isInputValid': isInputValid,
    //'quantityValue': quantityValue
    'inputQuantity': inputQuantity
  }
}

/**
 * function to check is ckeckbox is checked
 * @returns {boolean} isBoxChecked retourne si la checkbox est cochée
 */
function checkCheckboxIsTick () {
  //console.log(myButton.checked);
  const error = document.querySelector('#myButtonError');
  //document.getElementById('checkbox1').checked = true;
  //console.log('#checkbox1');
  //let localisation = localisationInput.value;
  let isBoxChecked = false;
  
  if(document.getElementById('checkbox1').checked) {
    error.innerHTML = '';
    isBoxChecked = true;
  } else {
    error.innerHTML = 'Merci d\'accepter les conditions d\'utilisation.';
    isBoxChecked = false;
  }

  //return isBoxChecked
  return {
    //'localisation': localisation,
    'isBoxChecked': isBoxChecked
  }
}


/**
 * function to check if a city is tick
 * @returns {boolean} isRadioChecked retourne si un bouton radio est coché
 */
function checkRadioIsTick () {
  const localisationInput = document.querySelector('input[name="location"]:checked');
  const error = document.querySelector('#locationTournoiError');
  let isRadioChecked = false;
  let localisationValue = null;

  //console.log(localisationInput);

  if(localisationInput === null) {
    error.innerHTML = 'Merci de sélectionner une ville.';
  } else {
    isRadioChecked = true;
    localisationValue = localisationInput.value;
    error.innerHTML = ' ';
  }

  //return if radio button is checked and his value.  isRadioChecked 
  return {
    'isRadioChecked' : isRadioChecked,
    'localisationValue': localisationValue
  }
}


/**
 * function to reset form
 */
function resetMyForm () {
  inputFirst.value = '';
  inputLast.value = '';
  inputEmail.value = '';
  inputBirthdate.value = '';
  inputQuantity.value = '';
  /**
   * Reset les valeurs des radios
   */
  radioTournoiList.forEach((radioTournoi) => {
    radioTournoi.checked = false;
})
}


// EVENTS
// creation of the button variable
btnSubmitValidationForm.addEventListener('click', (event) => {
  event.preventDefault();

  const error = document.querySelector('#btnError');
  //console.log('le formulaire est bon.');

  const isFirstNameIsValid = checkInputsValidationName(firstName, 'firstNameError');
  console.log(isFirstNameIsValid);
  const isLastNameIsValid = checkInputsValidationName(lastName, 'lastNameError');
  console.log(isLastNameIsValid);
  const isEmailIsValid = checkInputValidationEmail();
  console.log(isEmailIsValid);
  const isBirthdateIsValid = checkInputValidationBirthdate();
  console.log(isBirthdateIsValid);
  const isQuantityIsValid = checkInputValidationQuantity();
  console.log(isQuantityIsValid);
  const isRadioIsValid = checkRadioIsTick();
  console.log(isRadioIsValid);
  const isMyButtonIsValid = checkCheckboxIsTick();
  console.log(isMyButtonIsValid);






  if(isFirstNameIsValid.isInputValid &&
    isLastNameIsValid.isInputValid &&
    isEmailIsValid.isInputValid &&
    isBirthdateIsValid.isInputValid &&
    isQuantityIsValid.isInputValid &&
    isRadioIsValid.isRadioChecked &&
    isMyButtonIsValid) {
    
    const openForm = document.querySelector('#openForm');
    openForm.classList.add('hidden');

    const closeForm = document.querySelector("#closeForm");
    closeForm.classList.add('active');

    resetMyForm();
    
    console.log('Le formulaire est bon');
    error.innerHTML = '';
  } else {
    error.innerHTML = 'Merci de remplir correctement le formulaire.'
    console.log('le formulaire n\'est pas bon');
  }
})


// creation of the firstname variable
inputFirst.addEventListener('input', (event) => {
  event.preventDefault();

  //checkInputFirstName();
  checkInputsValidationName(firstName, 'firstNameError');
})

// creation of the lastname variable
inputLast.addEventListener('input', (event) => {
  event.preventDefault();

  //checkInputLastName();
  checkInputsValidationName(lastName, 'lastNameError');
})

// creation of the email variable
inputEmail.addEventListener('input', (event) => {
  event.preventDefault();

  checkInputValidationEmail();  
})

// creation of the birthdate variable
inputBirthdate.addEventListener('input', (event) => {
  event.preventDefault();

  checkInputValidationBirthdate();
})

// creation of the quantity variable
inputQuantity.addEventListener('input', (event) => {
  event.preventDefault();

  checkInputValidationQuantity();
})

checkboxValide.addEventListener('input', (event) => {
  event.preventDefault();

  checkCheckboxIsTick();
})


radioTournoiList.forEach((radioTournoi) => {
  radioTournoi.addEventListener('input', (event) => {
    event.preventDefault();

    //console.log('coucou');
    checkRadioIsTick();
  })
})



menu_deroulant.addEventListener("click", openClosePageNavigation);
document.getElementsByName('birthdate')[0].setAttribute('max', today);

// TO OPEN OR CLOSE THE FORM
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// closing modal event
modalBtnClose.forEach((btn) => btn.addEventListener("click", closeModal));
btnCloseEnd.forEach((btn) => btn.addEventListener("click", closeModal));
