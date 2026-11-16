import { getUserData }  from './user.js'
getUserData()
var url = window.location.href

if (!loggedIn) {
    window.location.href = 'login.html';
} else {
    switch (userData.userType) {
        case 2:
            if (url.includes('add')) {
                setTimeout(() => {
                    window.location.href = 'profile.html?message=no_access';
                }, 500);
            }
            break;

        case 3:
            if ((!url.includes('sales') && !url.includes('profile') && !url.includes('login'))) {
                setTimeout(() => {
                    window.location.href = 'profile.html?message=no_access';
                }, 500);
            }
            break;
    
        default:
            break;
    }
}

