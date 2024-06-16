const form = document.getElementById('newsletter-form');
const error = document.getElementById('error');
const email = document.querySelector('.email');

function handleForm(e) {
    e.preventDefault();
    const data = e.target.email.value;
    if(!data) {
        if(data.indexOf('@') !== -1) {
            error.innerText = 'Input email field';
            email.classList.add('error');
            
        }
        else{
            error.innerText = '';
            email.classList.remove('error');
        }
    }
}

form.addEventListener('submit', handleForm);