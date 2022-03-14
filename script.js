window.onload = () => {
    const email = document.querySelector('.email');
    const form = document.querySelector('.form');
    const errorEmail = document.querySelector('.error-msg');

    form.addEventListener('submit', e => {
        if(email.value){
            const regexMatch = /\S+@\S+\.\S+/.test(email.value);
            if (regexMatch) {
                errorEmail.textContent = '';
            } else {
                e.preventDefault();
                errorEmail.textContent = 'Please provide a valid email address';
                errorIcon.style.display = 'block';
            }
        } else {
            e.preventDefault();
            errorEmail.textContent = "Please provide a valid email address";
        }
    });
}