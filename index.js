const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');
form.noValidate = true;

 
 

 

function handleSubmit(e) {
  e.preventDefault();

  const emailValue = emailInput.value;
  if (!emailValue) {
    emailError.innerHTML = '<strong>Please enter an email adderss</strong>';
  } else if (emailInput.validity.typeMismatch) {
    emailError.innerHTML = '<strong>Valid email required</strong>';
  } else{
    localStorage.setItem('userEmail', emailValue);
    window.location.href = 'success.html';
    this.submit();
  }
  
}

form.addEventListener('submit', handleSubmit);
emailInput.addEventListener('input', validateEmail);

function validateEmail(e) {
  const isValid = e.target.validity.typeMismatch;
  if (isValid) {
    emailError.innerHTML = '<strong>Valid email required</strong>';
  } else {
    emailError.innerHTML = '';
  }
}
