const BTN_MENUS = document.getElementsByClassName('menu_select')
var activeMenu = 2

for (let i = 0; i < BTN_MENUS.length; i++) {
    BTN_MENUS[i].addEventListener('click', () => {
        BTN_MENUS[activeMenu].setAttribute('class', 'menu_select')
        BTN_MENUS[i].setAttribute('class', 'menu_select active')
        activeMenu = i
    });
}