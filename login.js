function formValidation() {
  var passid = document.registration.passid;
  var uname = document.registration.username;
  var uemail = document.registration.email;
  var inputtxt =document.registration.phone;
  if (passid_validation(passid, 8, 12)) {
    {
      if (allLetter(uname)) {
        if (ValidateEmail(uemail)) {
          if (phonenumber(inputtxt)){

          }
        }
      }
    }
  }
  return false;
}
function passid_validation(passid, mx, my) {
  var passid_len = passid.value.length;
  if (passid_len == 0 || passid_len >= my || passid_len < mx) {
    alert(
      "Password should not be empty / length be between " + mx + " to " + my
    );
    passid.focus();
    return false;
  }
  return true;
}
function allLetter(uname) {
  var letters = /^[A-Za-z]+$/;
  if (uname.value.match(letters)) {
    return true;
  } else {
    alert("Username must have alphabet characters only");
    uname.focus();
    return false;
  }
}
function ValidateEmail(uemail) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (uemail.value.match(mailformat)) {
    return true;
  } else {
    alert("You have entered an invalid email address!");
    uemail.focus();
    return false;
  }

}

  function phonenumber(inputtxt)
  {
    var phone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if((inputtxt.value.match(phone)))
          {
        return true;
          }
        else
          {
          alert("message");
          return false;
          }
  }








  