var div1 = document.createElement('div');
div1.id='div1';
document.body.appendChild(div1);
div1.textContent='email_id- ';
var email=document.createElement('input');
email.type="text";
div1.appendChild(email);
var div2=document.createElement('div');
div2.id='div2';
document.body.appendChild(div2);
div2.textContent='Password- ';
var pwd=document.createElement('input');
pwd.type="text";
div2.appendChild(pwd);
var button = document.createElement('button');
document.body.appendChild(button);
button.innerHTML = 'Submit';
button.onclick = function(){
if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)))
{
alert("Invalid email address");
}
if(pwd.value.length<8)
{
alert("Password length must be greater than 8");
}
};