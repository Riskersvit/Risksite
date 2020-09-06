
// PASSWORD PROTECTION SCRIPT

function TheLogin() {

var password = 'niggap';
var password1 = 'niggav';

if (this.document.login.pass.value == password) {
  top.location.href="http://risksite.cf/more.html";
}
if (this.document.login.pass.value == password1) {
  top.location.href="http://risksite.cf/vedios.html";
}
else if (this.document.login.pass.value != password && this.document.login.pass.value != password1){
  window.alert("Incorrect password, please try again.");
  }
}

