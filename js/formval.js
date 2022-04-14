const form = document.getElementById('form');
const Uname = document.getElementById('Uname');
const email = document.getElementById('email');
const textmsg = document.getElementById('textmsg');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});


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


const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const UnameValue = Uname.value.trim();
    const emailValue = email.value.trim();
    const textmsgValue = textmsg.value.trim();

    if (UnameValue === '') {
        setError(Uname, 'Por favor, escribe un nombre');
    } else {
        setSuccess(Uname);
    }

    if (emailValue === '') {
        setError(email, 'Por favor, escribe tu dirección de correo');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Direccion de correo no válida');
    } else {
        setSuccess(email);
    }


    if (textmsgValue === '') {
        setError(textmsg, '¿No hay nada que nos quieras decir?');
    } else if (textmsgValue.length < 20) {
        setError(textmsg, 'Entendemos que tiene dudas, por favor, detalla mas tu mensaje')
    } else {
        setSuccess(textmsg);
    }

};