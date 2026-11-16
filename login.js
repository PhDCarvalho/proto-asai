import * as ck          from './cookies.js';
import { getUserData }  from './user.js'
import { makePopup }    from './popup.js';
const BTN_LOGIN = document.getElementById('log')
const INP_NAME = document.getElementById('username')
const INP_PASS = document.getElementById('password')
getUserData()


if (loggedIn) {
    window.location.href = 'home.html?message=login_success';
}

let valid = false
BTN_LOGIN.addEventListener('click', () => {
    if ((INP_NAME.value != '' && INP_NAME.value != null)
    && (INP_PASS.value != '' && INP_PASS.value != null)) {
        switch (INP_NAME.value.toLowerCase()) {
            case 'pedro12':
                valid = true
                ck.saveCookie('UID', 1, 7)
                break;

            case 'joao':
                valid = true
                ck.saveCookie('UID', 2, 7)
                break;

            case 'silvio':
                valid = true
                ck.saveCookie('UID', 6, 7)
                break;
                
            default:
                makePopup('Credenciais inválidas!', 2)   
                break;
        }

        if (valid) {
            loggedIn = true
            window.location.href = 'home.html?message=login_success&reload';
        }


    } else {
        makePopup('Preencha todos os campos', 2)        
    }
    console.log(INP_NAME.value);
})

