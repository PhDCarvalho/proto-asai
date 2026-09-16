import * as ck from './cookies.js';

const DIV_CONTENT = document.getElementsByClassName('content')[0]

const BTN_MENUS = document.getElementsByClassName('menu_select')
var activeMenu = 2

for (let i = 0; i < BTN_MENUS.length; i++) {
    BTN_MENUS[i].addEventListener('click', () => {
        BTN_MENUS[activeMenu].setAttribute('class', 'menu_select')
        BTN_MENUS[i].setAttribute('class', 'menu_select active')
        activeMenu = i
    });
}


// Fetch data
// if (ck.readCookie('username') != null) username = Number(ck.readCookie('username')) 
// if (ck.readCookie('password') != null) password = Number(ck.readCookie('password'))

if (
    ck.readCookie('username') == null &&
    ck.readCookie('password') == null &&
    activeMenu != 4
) {
    DIV_CONTENT.innerHTML = `
            <a class="access" style="justify-content: space-around;">
                <div style="width: 70%;">
                    <span style="color: var(--col01);">Fazer login</span>
                </div>
                <div>
                    <span style="color: var(--bgcol); font-size: xx-large; line-height: 50%;">></span>
                </div>
            </a>
            <div class="container">
                <p class="title">Sem dados disponíveis!</p>
                <p>
                    Faça login para poder utilizar o app.
                    <span style="color: var(--col012)">(Conexão com a rede é necessária)</span>
                </p>
            </div>
    `
}