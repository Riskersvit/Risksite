
// PASSWORD PROTECTION SCRIPT

function TheLogin() {

var password = 'prenigga';
var password1 = 'beginnigga';
var password2 = 'middlenigga';
var password3 = 'arrayslevel1nigga';
var password4 = 'arrayslevel2nigga';
var password5 = 'stringslevel1nigga';

if (this.document.login.pass.value == password) {
  top.location.href="svespre.html";
}
if (this.document.login.pass.value == password1)
 {
  top.location.href="svesbegin1.html";
}

if (this.document.login.pass.value == password2) {
  top.location.href="svesmiddle1.html";
}

if (this.document.login.pass.value == password3) {
  top.location.href="arrayslevel1.html";
}
if (this.document.login.pass.value == password4) {
  top.location.href="arrayslevel2.html";
}
if (this.document.login.pass.value == password5) {
  top.location.href="stringlevel1.html";
}


else if(this.document.login.pass.value != password && this.document.login.pass.value != password2 && this.document.login.pass.value != password3 && this.document.login.pass.value != password4 && this.document.login.pass.value != password5) {
  window.alert("Incorrect password, please try again.");
  }
} 


