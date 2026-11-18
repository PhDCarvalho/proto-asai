import * as ck from './cookies.js';
import { makePopup } from './popup.js';
import { getUserData } from './user.js'
const DIV_INFO = document.getElementById('userinfo')
const SPAN_WC = document.getElementById('welcome')
const types = ['Produtor', 'Funcionário', 'Fornecedor']
const BTN_LOGOUT = document.getElementById('logout')
getUserData()




if (loggedIn) {
    
    
    if (userData.userType == 3) {
        var inp =  `
            <select name="sys" id="sys" required>
                <option value="1">${mySystem.name}</option>
                <option value="2">Ferraz & Co.</option>
            </select>
        `
    }

    SPAN_WC.innerHTML = `Olá, ${userData.fullname}`
    let spanName = document.createElement('span')
    if (userData.userType == 3) {
        spanName.innerHTML = `
            <span style="color: var(--col012)">Nome de usuário:</span>    ${userData.username}<br>
            <span style="color: var(--col012)">Cargo:</span>              ${types[userData.userType - 1]}<br>
            <span style="color: var(--col012)">Nome da empresa:</span>    ${inp}<br>
            <span style="color: var(--col012)">Data de início:</span>     <span id='dat'>${userData.dateJoin}</span><br>
        `

        setTimeout(() => {

            var datspan = document.getElementById('dat')
            var inputFull = document.getElementById('sys')
            inputFull.addEventListener('change', () => {
                if (inputFull.value == '2') {
                    datspan.innerHTML = '15-08-2026'
                } else {
                    datspan.innerHTML = userData.dateJoin
                }
            })
        }, 200)

    } else {
        spanName.innerHTML = `
            <span style="color: var(--col012)">Nome de usuário:</span>    ${userData.username}<br>
            <span style="color: var(--col012)">Cargo:</span>              ${types[userData.userType - 1]}<br>
            <span style="color: var(--col012)">Nome da empresa:</span>    ${mySystem.name}<br>
            <span style="color: var(--col012)">Data de início:</span>     ${userData.dateJoin}<br>
        `

    }

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


