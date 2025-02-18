function regform() {
    var studentname = document.getElementById("stdname").value;
    var studentemail = document.getElementById("stdemail").value;
    var studentdate = document.getElementById("stddate").value;
    var studentcource = document.getElementById("stdcource").value;


    var errordisplay = document.getElementById('error');

    var emailregex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|hotmail\.com)$/;

    var email_result = emailregex.test(studentemail);

    if (email_result == true) {
        var newstd = {
            studentname: studentname,
            Studentemail: studentemail,
            DateOfaddmission: studentdate,
            cource: studentcource,

        }
      
          var response =
            fetch(
                `https://67b01c46dffcd88a67885b66.mockapi.io/Registrationname`,{
                method :'post',
                headers : {"content-type": 'application/json'},
                body : JSON.stringify(newstd)
            })

            
    }
    else {
        errordisplay.innerHTML = "email is not valid please correct email sentex";
    }

}