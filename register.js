const form = document.querySelector('form');
const fName = form.elements['fName'];
const fLastName = form.elements['fLastName'];
const fEmail = form.elements['fEmail'];
const fNumber = form.elements['fNumber'];
const fTeamName = form.elements['fTeamName'];

function isValidPhoneNumber(phoneNumber) {
    const phoneNumberRegex = /^\+?216?[2-9]\d{7}$/;
    return phoneNumberRegex.test(phoneNumber);
  }
  

form.addEventListener('submit', function(event) {
  let errors = [];

  if (fName.value.trim() === '') {
    errors.push('First name is required');
  }

  if (fLastName.value.trim() === '') {
    errors.push('Last name is required');
  }

  if (fEmail.value.trim() === '') {
    errors.push('Email is required');
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(fEmail.value.trim())) {
      errors.push('Email is not valid');
    }
  }

  if (fNumber.value.trim() === '') {
    errors.push('Phone number is required');
  } else if (!isValidPhoneNumber(fNumber.value.trim())) {
    errors.push('Phone number is not valid (must be 8 digits and start with 2-9)');
  }

  if (fTeamName.value.trim() === '') {
    errors.push('Team name is required');
  }

  if (errors.length > 0) {
    event.preventDefault();
    const errorMessage = errors.join('\n');
    alert(errorMessage);
  }
});
