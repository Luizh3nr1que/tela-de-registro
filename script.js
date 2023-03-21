const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordConfirmation = document.getElementById('password-confirmation')
const cadastroBtn = document.getElementById('cadastro')


// form.addEventListener('submit', (event) => {
//     event.preventDefault();

//     alert('cadastrado com sucesso!');

//     location.reload();
// })

form.addEventListener("submit", (event) => {
    if (password.value !== passwordConfirmation.value) {
        alert('As Senhas não são Iguais! Verifique Por Favor.')
    } else {
        alert('cadastro com sucesso!')

    }
    location.reload();
})