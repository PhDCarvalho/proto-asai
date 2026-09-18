import * as ck from './cookies.js';

const DIV_CONTENT = document.getElementsByClassName('content')[0]

const BTN_MENUS = document.getElementsByClassName('menu_select')
var activeMenu = 2

const CONTENT_PREV = [
    `
        <a class="access">
        <div>
            <span>
                Adicionar Campo
            </span>
        </div>
        <div>
            <span style="color: var(--bgcol); font-size: xx-large; line-height: 50%;">></span>
        </div>
        </a>
        <a class="access">
        <div>
            <span>
                Adicionar Cultura
            </span>
        </div>
        <div>
            <span style="color: var(--bgcol); font-size: xx-large; line-height: 50%;">></span>
        </div>
        </a>
    `,
    `
    <a class="access"><span>Meus Campos</span></a>
    <div class="container">
        <img src="img/assets/v9_29.png" alt="Exemplo">                
        <p>
            Precipitação: <span style="color: var(--col012);">80%</span><br>
            Última chuva: <span style="color: var(--col012);">Ontem</span>
        </p>
        <p>
            Próxima colheita: <span style="color: var(--col012);">4/5/2026</span>
        </p>
        <span style="color: var(--col012);">-> Mais detalhes...</span>
    </div>
    
    `,
    `
        <a class="access">
            <div>
                <span>
                    Meus Campos - Condição
                </span>
                <span style="color: var(--col01);">recomendada</span>
            </div>
            <div>
                <span style="color: var(--bgcol); font-size: xx-large; line-height: 50%;">></span>
            </div>
        </a>


        <div class="container">
            <img src="img/assets/v9_29.png" alt="Exemplo">                
            <p>
                Precipitação: <span style="color: var(--col012);">80%</span><br>
                Última chuva: <span style="color: var(--col012);">Ontem</span>
            </p>
            <p>
                Próxima colheita: <span style="color: var(--col012);">4/5/2026</span>
            </p>
        </div>
        
        <div class="container">
            <span class="title">
                Notícias Recentes
            </span>
            <div class="carousel">
                <div class="car_item">
                    <img src="img/icon.png" alt="Ex">
                    <span class="car_title">G1 - Agro</span><br>
                    <span class="car_sub">123456</span>
                </div>
                <div class="car_item">
                    <img src="img/icon.png" alt="Ex">
                    <span class="car_title">Agrotech</span><br>
                    <span class="car_sub">23456</span>
                </div>
                <div class="car_item">
                    <img src="img/icon.png" alt="Ex">
                    <span class="car_title">G1 - Agro</span><br>
                    <span class="car_sub">3456</span>
                </div>
                <div class="car_item">
                    <img src="img/icon.png" alt="Ex">
                    <span class="car_title">Globo Reporter</span><br>
                    <span class="car_sub">456</span>
                </div>
                <div class="car_item">
                    <img src="img/icon.png" alt="Ex">
                    <span class="car_title">EnTreV.</span><br>
                    <span class="car_sub">456</span>
                </div>
            </div>
        </div>
    `,
    ``,
    ``,
    `
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
]


for (let i = 0; i < BTN_MENUS.length; i++) {
    BTN_MENUS[i].addEventListener('click', () => {
        BTN_MENUS[activeMenu].setAttribute('class', 'menu_select')
        BTN_MENUS[i].setAttribute('class', 'menu_select active')
        activeMenu = i
        DIV_CONTENT.innerHTML = CONTENT_PREV[i];
        console.log(i);
    });
    
}


// Fetch data
// if (ck.readCookie('username') != null) username = Number(ck.readCookie('username')) 
// if (ck.readCookie('password') != null) password = Number(ck.readCookie('password'))

// if (
//     ck.readCookie('username') == null &&
//     ck.readCookie('password') == null &&
//     activeMenu != 4
// ) {
//     DIV_CONTENT.innerHTML = `
//             <a class="access" style="justify-content: space-around;">
//                 <div style="width: 70%;">
//                     <span style="color: var(--col01);">Fazer login</span>
//                 </div>
//                 <div>
//                     <span style="color: var(--bgcol); font-size: xx-large; line-height: 50%;">></span>
//                 </div>
//             </a>
//             <div class="container">
//                 <p class="title">Sem dados disponíveis!</p>
//                 <p>
//                     Faça login para poder utilizar o app.
//                     <span style="color: var(--col012)">(Conexão com a rede é necessária)</span>
//                 </p>
//             </div>
//     `
// }