import * as ck from './cookies.js';
import { makePopup } from './popup.js';
import { getUserData } from './user.js'
const DIV_INFO = document.getElementById('userinfo')
const SPAN_WC = document.getElementById('welcome')
const types = ['Produtor', 'Funcionário', 'Fornecedor']
const BTN_LOGOUT = document.getElementById('logout')
getUserData()


if (loggedIn) {
    SPAN_WC.innerHTML = `Olá, ${userData.fullname}`
    let spanName = document.createElement('span')
    spanName.innerHTML = `
        <span style="color: var(--col012)">Nome de usuário:</span>    ${userData.username}<br>
        <span style="color: var(--col012)">Cargo:</span>              ${types[userData.userType - 1]}<br>
        <span style="color: var(--col012)">Nome da empresa:</span>    ${mySystem.name}<br>
        <span style="color: var(--col012)">Data de início:</span>     ${userData.dateJoin}<br>
    `

    DIV_INFO.appendChild(spanName)

    BTN_LOGOUT.addEventListener('click', () => {
        ck.saveCookie('UID', undefined, 7)
        window.location.href = 'login.html?reload'
    })
} else {
    document.body.innerHTML = ''
    makePopup('Você não realizou login!', 0)
    setTimeout(() => {
        window.location.href = 'loading.html?to=login'
    }, 2000);
}