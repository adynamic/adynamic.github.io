
        var cookies=document.cookie.split(';').map(cookie=>cookie.split('=')).reduce((accumulator,[key,value])=>({ ...accumulator,[ key.trim()]:decodeURIComponent(value)}),{}); 
        if(cookies.username){}else{let un=window.prompt('What is your name !');let pass=Math.floor(Math.random()*1232);const upass=window.prompt(`Enter the password for ID ${pass}`);if(`${pass}19235888`===upass){document.cookie="username="+un+";max-age="+7*24*60*60}else{window.alert('You entered a wrong password !!!');}}
        if(cookies.username){}else{window.location = 'not-a-member.html';};
//copy the code in the script tag in html to validate the website