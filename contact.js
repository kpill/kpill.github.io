var fields={};

document.addEventListener("DOMContentLoaded", function() {
 fields.firstName = document.getElementById('firstName');
 fields.lastName = document.getElementById('lastName');
 fields.email = document.getElementById('email');
 fields.question = document.getElementById('message');
})

function isNotEmpty(value) {
 if (value == null || typeof value == 'undefined' ) return false;
 return (value.length > 0);
}

function ValidateEmail(email) 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

function fieldValidation(field, validationFunction) {
 if (field == null) return false;

 let isFieldValid = validationFunction(field.value)
 if (!isFieldValid) {
 field.className = 'placeholderRed';
 } else {
 field.className = '';
 }

 return isFieldValid;
}

function isValid() {
 var valid = true;
 
 valid &= fieldValidation(fields.firstName, isNotEmpty);
 valid &= fieldValidation(fields.lastName, isNotEmpty);
 valid &= fieldValidation(fields.email, ValidateEmail);
 valid &= fieldValidation(fields.message, isNotEmpty);
 valid &= arePasswordsEqual();

 return valid;
}

class User {
 constructor(firstName, lastName, email, message) {
 this.firstName = firstName;
 this.lastName = lastName;
 this.email = email;
 this.message = message;
 }
}

function sendContact() {
 if (isValid()) {
  let usr = new User(firstName.value, lastName.value, email.value, message.value);
  alert(`Thanks for your message, ${usr.firstName}.`)
 } else {
  alert("Looks like there was an error.")
 }
}
  
