window.addEventListener('load', function(){
    const form = document.querySelector('#login');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');

    form.addEventListener('submit', e => {
        e.preventDefault();

        const setError = (element, message) => {
            const inputControl = element.parentElement;
            const errorDisplay = inputControl.querySelector('.error');
        
            errorDisplay.innerText = message;
            inputControl.classList.add('error');
            inputControl.classList.remove('success')
        }

        const setSuccess = element => {
            const inputControl = element.parentElement;
            const errorDisplay = inputControl.querySelector('.error');
        
            errorDisplay.innerText = '';
            inputControl.classList.add('success');
            inputControl.classList.remove('error');
        };


        const validateInputs = () => {

            const emailValue = email.value.trim();
            const passwordValue = password.value.trim();

            if( emailValue === '') {
                console.log("esta vacío")
                setError(emailValue, 'Email is required');
            } else {
                setSuccess(emailValue);
            }
            if( passwordValue === '') {
                setError(passwordValue, 'Password is required');
            } else {
                setSuccess(passwordValue);
            }
        };

        validateInputs();
        
    })

})