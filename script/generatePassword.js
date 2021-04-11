//Generate Password 

const inputPassword = document.querySelector('.password-box input');
const generatePasswordBtn = document.querySelector('.password-box-btn');

const generatePassword = (length = 16) => {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnoprsqtuvwxyz1234567890!@#$%^&*()_';
    let password = '';

    for (let i = 0; i < length; i++) {
        let at = Math.floor(Math.random() * (charset.length + 1));
        password += charset.charAt(at);
    }
    return password 
} 

generatePasswordBtn.addEventListener('click', () => {
    inputPassword.value = generatePassword(16);
})