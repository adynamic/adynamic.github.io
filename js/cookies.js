const makecookie=(name,value,p,age=60*60)=>{
    if(name&&value&&p==='#9yll'){
    document.cookie=`${name}=${value};max-age=${age}`;
    console.log(document.cookie);
    }else{
        console.log(`Please enter the correct value of name and value ,dont forget the special key`);
    }
}
const removecookie=(name)=>{
    let cookiessaved=document.cookie;
    if(cookiessaved.length>=1){
    document.cookie=`${name}=remove;max-age=1`;
    console.log("Cookie removed Successful");
    console.log(document.cookie);
    }else{
        console.log(`No cookies exist.`);
    }
}
function getcookiesvalue(que){
    var cookies=document.cookie.split(';').map(cookie=>cookie.split('=')).reduce((accumulator,[key,value])=>({ ...accumulator,[ key.trim()]:decodeURIComponent(value)}),{});
    if (cookies[que]){return cookies[que];}else{console.log(`${que} : not exist ?`)}
    }
    var cookies=document.cookie.split(';').map(cookie=>cookie.split('=')).reduce((accumulator,[key,value])=>({ ...accumulator,[ key.trim()]:decodeURIComponent(value)}),{}); 