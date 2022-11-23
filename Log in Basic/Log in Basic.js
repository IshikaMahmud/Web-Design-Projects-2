$("#loginBtn").click(function () {
  var pw1 = $("#pw1").val();
  var pw2 = $("#pw2").val();

  if (pw1 != "" && pw2 != "") {
    if (pw1 == pw2) {
      alert("Log In Successfull!");
    } else {
      alert("Incorrect Password. Please Try Again!");
    }
  } else {
    alert("Please enter your password!");
  }
});
