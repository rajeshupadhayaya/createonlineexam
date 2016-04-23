function validate(inputvalue,span)
{
    var loginData = $("#"+ inputvalue).val();
    $("#"+span).html("");

    if (loginData == ''){
        $("#" + span).attr("class", "show");
//        $("#" + inputvalue).attr("class", "has-warning");

        switch (inputvalue) {
            case 'logInEmail' :
                $("#" + span).html("Please provide email id");
                break;
            case 'logInPassword' :
                $("#" + span).html("Please provide password");
                break;
            case 'registerName' :
                $("#" + span).html("Name can not be blank");
                break;
            case 'registerEmail' :
                $("#" + span).html("Email can not be blank");
                break;
            case 'registerPassword' :
                $("#" + span).html("Please provide any password");
                break;
            case 'registerPassword1' :
                $("#" + span).html("Please type the password again");
                break;
            /*case 'registerPhoneNo' :
                $("#" + span).html("Phone number can not be blank");
                break;*/
        }

    }
    if (inputvalue =='registerPassword1' && loginData !== $("#registerPassword").val()){
     //   alert('password match');
        $("#" + span).html("Password doesn't match");
        $("#" + span).attr("class", "show");


    }

};

function loginValidate(login)
{
    $("#error1").html("");
    var email = login.logInEmail.value;
    var pwd = login.logInPassword.value;

    if (email == '' || pwd == '' ) {

        $("#error1").html("Please provide all the inputs");
        $("#error1").attr("class", "show text-center");
        return false;

}


};

function registerValidate(login)
{
    $("#error2").html("");
    var name = login.registerName.value;
    var email = login.registerEmail.value;
    var pwd = login.registerPassword.value;
    var pwd1 = login.registerPassword1.value;
    //var phoneNo = login.registerPhoneNo.value;
    var typeOfReg = login.typeOfRegister.value;
    var tnc = login.tnCcheckbox.value;



    if (name == '' || email == '' || pwd == '' || pwd1 == '' || phoneNo == '' || typeOfReg == '' || tnc == '') {

        $("#error2").html("Please provide all the inputs");
        $("#error2").attr("class", "show text-center");
        return false;

    }


};

function inputCheck(search){
    var input = search.examName.value;
    if (input == ''){
        return false;
    }
}