var gender=document.querySelector('#gender');
var name1=document.querySelector('#name');
var mail=document.querySelector('#mail');
var phone=document.querySelector('#phone');
var profile=document.querySelector('#profile');
async function randomuser() {
    const rand =await fetch('https://randomuser.me/api/');
    console.log(rand);
    const data=await rand.json();
    console.log(data);
    const result=data.results[0];
    console.log(result);
    gender.innerHTML=result.gender;
    name1.innerHTML=`${result.name.title} ${result.name.first} ${result.name.last} `
    mail.innerHTML=result.email;
    phone.innerHTML=result.phone;
    profile.src=result.picture.large;
}
randomuser();