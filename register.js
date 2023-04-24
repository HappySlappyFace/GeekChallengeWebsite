const form = document.querySelector('form');
const fName = form.elements['fName'];
const fLastName = form.elements['fLastName'];
const fEmail = form.elements['fEmail'];
const fNumber = form.elements['fNumber'];
const fTeamName = form.elements['fTeamName'];
const fUniName = form.elements['fUniName'];
const fLevelOfStudy = form.elements['fLevelOfStudy'];
const fBirthday = form.elements['fBirthday'];
// import * as Bowser from "bowser";
const browser = (bowser.getParser(window.navigator.userAgent).parsedResult.browser.name).toLowerCase();
console.log(browser);
function isValidPhoneNumber(phoneNumber) {
  const phoneNumberRegex = /^(\+216)?[2-9]\d{7}$/;
  return phoneNumberRegex.test(phoneNumber);
}


function isNotNull(input, inputName) {
  if (input.value.trim() === '') {
    return `${inputName} is required`;
  }
  return null;
}

function isOlderThan15Years(dateString) {
  const birthDate = new Date(dateString);
  const ageInMilliseconds = Date.now() - birthDate.getTime();
  const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365);
  return ageInYears > 15;
}

form.addEventListener('submit', function(event) {
  let errors = [];

  errors.push(isNotNull(fName, 'First name'));
  errors.push(isNotNull(fLastName, 'Last name'));
  errors.push(isNotNull(fEmail, 'Email'));
  errors.push(isNotNull(fNumber, 'Phone number'));
  if (!isValidPhoneNumber(fNumber.value.trim())) {
    errors.push('Phone number is not valid (must be 8 digits and start with 2-9, optionally preceded by "+216")');
  }
  errors.push(isNotNull(fTeamName, 'Team name'));
  errors.push(isNotNull(fUniName, 'University name'));
  errors.push(isNotNull(fLevelOfStudy, 'Level of study'));
  if(browser!="safari"){
    if (!isOlderThan15Years(fBirthday.value.trim())) {
      errors.push('You must be at least 15 years old to participate');
    }
  }

  // Remove null values from errors array
  errors = errors.filter(error => error !== null);

  if (errors.length > 0) {
    event.preventDefault();
    const errorMessage = errors.join('\n');
    alert(errorMessage);
  }
});
