function saveCookie(id, value, expirationDays) {
    let date = new Date();
    date.setTime(date.getTime() + expirationDays * 24 * 60 * 60 * 1000)
    let expirationDate = "expires=" + date.toUTCString();
    document.cookie = `${id}=${value}; ${expirationDate}; path=/`
}
function readCookie(id) {
    let decode = decodeURIComponent(document.cookie)
    let decArray = decode.split('; ')
    let res = null
    
    decArray.forEach(e => {
        if (e.indexOf(id) == 0) res = e.substring(id.length + 1)
    })
    return res
}

function clearCookie(id) {
    saveCookie(id, null, null)
}
export {saveCookie, readCookie, clearCookie};