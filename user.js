import { makePopup } from './popup.js';
import * as ck from './cookies.js';


function clearAllCookies() {
    ck.clearCookie('full_system')
    ck.clearCookie('all_users')
    ck.clearCookie('undefined')
    ck.clearCookie('loggedIn')
    ck.clearCookie('false')
    ck.clearCookie()
    console.warn('No more cookies.');
}


function fetchUserInfo(targetId) {
    let tempUserlist = JSON.parse(decodeURIComponent(ck.readCookie('all_users')))

// for (const [username, password] in tempUserlist) {
//     if (!Object.hasOwn(tempUserlist, username)) continue;
//     if (userData.username == username &&
//         userData.password == password
//     ) {

    for (let i = 0; i < tempUserlist.length; i++) {
        if (tempUserlist[i].id == targetId) {
            return tempUserlist[i]
        }
    }
    
}
function getUserData() {
    var userData = undefined
    var loggedIn = false
    if (ck.readCookie('UID') != undefined &&
        ck.readCookie('UID') != null &&
        ck.readCookie('UID') != 'undefined' &&
        ck.readCookie('UID') != 'null') {
        userData = fetchUserInfo(ck.readCookie('UID'))
        loggedIn = true
    }
    globalThis.userData = userData
    globalThis.loggedIn = loggedIn
    globalThis.mySystem = JSON.parse(decodeURIComponent(ck.readCookie('full_system')))
}



// CHEATSHEET ------------------------v
//
// JSON.stringify(userData)
//
// const jsonString = decodeURIComponent(cookieValue);
// return JSON.parse(jsonString);






var loggedIn = false

class User {
    constructor(id, username, fullname, password, userType, dateJoin) {
        this.id         =   id      
        this.username   =   username
        this.fullname   =   fullname
        this.password   =   password
        this.userType   =   userType || 1 // 1-3: 1 Prod, 2 Employ, 3 Supply
        this.dateJoin   =   dateJoin
        // this.notifs     =   []
    }
}
class Culture {
    constructor(id, plant, title, local, dimensions, area) {
        this.id                       =   id      || undefined
        this.plant                    =   plant   || undefined
        this.title                    =   title   || `Nova Cultura (${this.plant})`
        this.local                    =   local   || 'Não especificado'
        this.dimensions               =   dimensions  || undefined
        this.area                     =   area        || (this.dimensions[0] * this.dimensions[1])
        this.dateLastHarv             =   undefined      
        this.dateNextHarv             =   undefined      
        this.historySupplyApplication = {
            supply: undefined,
            date: undefined,
            amount: undefined,
        }      
    }
}
class Activity {
    constructor(id, cultureId, title, description, employees, deadline, concluded) {
        this.id             =   id          || undefined
        this.cultureId      =   cultureId   || undefined
        this.title          =   title       || 'Nova Atividade de Campo'
        this.description    =   description || 'Sem descrição'
        this.employees      =   employees   || [undefined]
        this.deadline       =   deadline    || undefined
        this.concluded      =   concluded   || false
    }
}
class Supply {
    constructor(id, name, amount, measure, idSupplier, dateAcq) {
        this.id             =   id          || undefined
        this.name           =   name        || 'Insumo (Sem nome)'
        this.amount         =   amount      || 1
        this.measure        =   measure     || 'kg'
        this.idSupplier     =   idSupplier  || undefined
        this.dateAcq        =   dateAcq     || undefined
    }
}
class Lot {
    constructor(id, local, culturesId) {
        this.id                       =   id      || undefined
        this.plant                    =   plant   || undefined
        this.title                    =   title   || `Nova Cultura (${this.plant})`
        this.local                    =   local   || 'Não especificado'
        this.dimensions               =   dimensions  || undefined
        this.area                     =   area        || (this.dimensions[0] * this.dimensions[1])
        this.dateLastHarv             =   undefined      
        this.dateNextHarv             =   undefined      
        this.historySupplyApplication = {
            supply: undefined,
            date: undefined,
            amount: undefined,
        }      
    }
}

var userList = [
    new User(1, 'pedro12',  'Pedro Torres Tiagro da Silva', 'p1230', 1, '17-03-2021'),
    new User(2, 'joao',     'João Rivaldo',                 'j1974', 2, '23-05-2022'),
    new User(3, 'Kmoreira', 'Kauã Moreira',                 'k1230', 2, '01-12-2025'),
    new User(4, 'Joselina', 'Joselina Bernardes',           'l1234', 1, '25-07-2022'),
    new User(5, 'roderi12', 'Roderilson Macedo',            '01043', 2, '02-01-2023'),
    new User(6, 'silvio',   'Severino Silvio Silveira',     'sss23', 3, '31-11-2024'), // Supplier
]

var mySystem = {   
    name: 'Torres Produções',
    cultures: [
        new Culture(1, 'Milho', 'Campo de Milho', 'Bairro Mill Aral', [400, 200], 80000),
        new Culture(2, 'Arroz', 'Campo de Arroz', 'Bairro Mill Aral', [300, 100], 30000),
        new Culture(3, 'Café',  undefined, 'Bairro Cafel Ruina', [300, 200], 60000)
    ],
    
    supply:  
    [
        new Supply(1, 'Esterco', 200, undefined, 3, '07-10-2026'),
        new Supply(2, 'Água', 2000, 'L', undefined, undefined),
        new Supply(3, 'Fertilizantes S.K.F.', 130, undefined, 3, '21-11-2026'),
    ],
    activities: [
        new Activity(1, 2, 'Colher arroz', )
    ]            
}

var userData = userList[0]



// Fetch data
// if (ck.readCookie('UID') != null) {
//     userData = userList[
//         JSON.parse(decodeURIComponent(ck.readCookie('UID')))[0]
//     ]
// }



let JSONUserData = JSON.stringify(userData)
let JSONSystem = JSON.stringify(mySystem)
let JSONUserList = JSON.stringify(userList)




// Update local loggedIn var
// let loggedCookie = ck.readCookie('loggedIn')
// if (loggedCookie == 'true') {
//     ck.saveCookie('loggedIn', true, 7)
//     loggedIn = true
// } else {
//     ck.saveCookie('loggedIn', false, 7)
//     loggedIn = false
// }

const SYSTEM_CLASSES = [ User, Culture, Lot, Supply, Activity ]

// Ship
export { fetchUserInfo, getUserData, SYSTEM_CLASSES }



// Initialize
// ck.saveCookie('userData', JSONUserData, 7)
ck.saveCookie('all_users', JSONUserList, 7)
ck.saveCookie('full_system', JSONSystem, 7)

// clearAllCookies()

