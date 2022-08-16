const emailInput = document.querySelector('.email+input');
const emailLetters = document.querySelectorAll('.email span');
const PasswordInput = document.querySelector('.password+input');
const passwordLetters = document.querySelectorAll('.password span');

const changePositionEmail = () =>
{
    if(emailInput.value.trim() === '')
    {
        emailLetters.forEach(letter => letter.classList.toggle('change'));
        emailInput.classList.toggle('input_border');
    }
}
const changePositionPassword = () =>
{
    if(PasswordInput.value.trim() === '')
    {
        passwordLetters.forEach(letter => letter.classList.toggle('change'));
        PasswordInput.classList.toggle('input_border');
    }
}
emailInput.addEventListener('focus',changePositionEmail);
emailInput.addEventListener('blur',changePositionEmail);
PasswordInput.addEventListener('focus',changePositionPassword);
PasswordInput.addEventListener('blur',changePositionPassword);