import { getUserData } from './user.js'
getUserData()
// const DIV_CONTENT = document.getElementsByClassName('content')[0]
const IFRAME = document.getElementById('iframecontent')
const IFRAMEDOCWINDOW = IFRAME.contentWindow
const BTN_MENUS = document.getElementsByClassName('menu_select')
const BTN_OPTIONS = document.getElementsByClassName('sidebar_icon')[0]
var activeMenu = 4


const PAGE_LINKS = [
    'add',
    'my',
    'home',
    'sales',
    'profile'
]


for (let i = 0; i < BTN_MENUS.length; i++) {
    BTN_MENUS[i].addEventListener('click', () => {
        if (loggedIn) {             
            if (!(i == 0 && userData.userType == 2)) {
            if (!(i < 3 && userData.userType == 3)) {

                BTN_MENUS[activeMenu].setAttribute('class', 'menu_select')
                BTN_MENUS[i].setAttribute('class', 'menu_select active')
                activeMenu = i
                IFRAME.setAttribute('src', `loading.html?to=${PAGE_LINKS[i]}`);
                // console.log(i);
            }
            }
    
        }
    });
    if (loggedIn) {        
        if (userData.userType == 2) {
            BTN_MENUS[0].setAttribute('class', 'menu_select inactive')
        } else if (userData.userType == 3) {
            BTN_MENUS[0].setAttribute('class', 'menu_select inactive')
            BTN_MENUS[1].setAttribute('class', 'menu_select inactive')
            BTN_MENUS[2].setAttribute('class', 'menu_select inactive')
        } 
    } else {
        BTN_MENUS[i].setAttribute('class', 'menu_select inactive')

    }
}
BTN_MENUS[activeMenu].setAttribute('class', 'menu_select active')


BTN_OPTIONS.addEventListener('click', () => {
    IFRAME.setAttribute('src', 'login.html');
})



function changeTitle(title, hasSubtitle, notifs) {
    if (title != undefined) {
        hasSubtitle = hasSubtitle || true
        notifs = notifs || 0
        
        document.title = (notifs > 0 ? `(${notifs})` : '') + title + (hasSubtitle ? " - AgroSense AI" : '')
    } else {
        document.title = '404 - Não Encontrado'
    }
}

IFRAME.addEventListener('load', () => {
    var iframeUrl = new URL(IFRAMEDOCWINDOW.location.href)
    if (iframeUrl.searchParams.get('reload') != null) {
        window.location.reload()
    } 
    changeTitle(IFRAMEDOCWINDOW.document.title)

})

// BTN_MENUS[0].click()

