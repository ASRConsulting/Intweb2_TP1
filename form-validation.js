document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-container__form');
    const lastNameInput = document.getElementById('lastName');
    const firstNameInput = document.getElementById('firstName');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    form.addEventListener('submit', (event) => {
        let valid = true;

        if (!validateInput(lastNameInput)) valid = false;
        if (!validateInput(firstNameInput)) valid = false;
        if (!validateInput(emailInput)) valid = false;
        if (!validateInput(messageInput)) valid = false;

        if (!valid) {
            event.preventDefault();
        }
    });

    function validateInput(input) {
        const errorMessage = input.nextElementSibling;
        if (!input.validity.valid) {
            errorMessage.textContent = getErrorMessage(input);
            input.classList.remove('contact-container__input-group-input--success');
            input.classList.add('contact-container__input-group-input--error');
            return false;
        } else {
            errorMessage.textContent = '';
            input.classList.remove('contact-container__input-group-input--error');
            input.classList.add('contact-container__input-group-input--success');
            return true;
        }
    }

    function getErrorMessage(input) {
        if (input.validity.valueMissing) {
            return 'Ce champ est requis';
        }
        if (input.type === 'email' && input.validity.typeMismatch) {
            return 'Veuillez entrer une adresse email valide';
        }
        return 'Valeur invalide';
    }
});
