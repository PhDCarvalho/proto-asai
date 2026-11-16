function makePopup(text, duration, opacity) {
    if (duration == undefined) duration = 3
    if (duration == 0) duration = 500
    let DIV_POPUP = document.createElement('div')
    DIV_POPUP.setAttribute('class', 'notif')
    DIV_POPUP.innerHTML = `
        ⓘ
        <span id="notifcontent">
            ${text}
        </span>
    `;

    DIV_POPUP.style.setProperty('opacity', `${opacity}`)
    DIV_POPUP.style.setProperty('animation', `popup .75s cubic-bezier(.82,-0.37,.83,.67) ${duration}s 1 forwards`)
    
    setTimeout(() => {
        DIV_POPUP.style.setProperty('transform', `scale(1)`)
    }, 50);
    if (text != undefined && text != undefined) document.body.appendChild(DIV_POPUP)
}
const POP_MESSAGES = {
    'login_success':    'Login realizado com sucesso!<br>Bem vindo(a)!',
    'login_fail':       'Erro no login.<br>Tente novamente mais tarde.',
    'not_found':        'Página não encontrada.<br>Redirecionando...',
    'hello':            'Oi',
    '':                 '',
}

var url = new URL(window.location.href)
let tempMessage = url.searchParams.get('message');
if (tempMessage != null) {
    if (POP_MESSAGES[tempMessage] != null && POP_MESSAGES[tempMessage] != undefined) 
        makePopup(POP_MESSAGES[tempMessage])
}



// makePopup('Login realizado. Bem vindo(a)!')
// makePopup('Popups enabled', 0.1, 50 /100)
export { makePopup };