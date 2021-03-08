let role = 'moderator';
switch (role){
    case 'guest':
        console.log('Guest User');
        break;

    case 'moderator':
        console.log('Moderator user');
        break;

    default:
        console.log('Unknown User');
        break;
}

// if(role==='guest') console.log('guest');
// else if(role==='moderator') console.log('modeartor');
// else(role==='unknown user') console.log('unknow user');