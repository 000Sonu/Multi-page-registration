


// function clickTheSaveButton() {
//     validateFormPage1();

// }
function goToPage1() {
    window.location.href = "Home page1.html";
}
function goToPage2() {
    window.location.href = "page2.html";
}
function goToPage3() {
    window.location.href = "page3.html";
}
function submitted() {
    alert("Sucessfully Submitted!!!")
}

function homePhoneNumber(inputtxt) {
    var phoneno = /^\d{10}$/;
    if ((inputtxt.value.match(phoneno))) {
        return true;
    }
    else {
        alert("Please provide a valid 10 degit Home-Mobile number !");
        document.getElementById("T-Mobile").focus();
        return false;
    }
}

function mobilePhoneNumber(inputtxt) {
    var phoneno = /^\d{10}$/;
    if ((inputtxt.value.match(phoneno))) {
        return true;
    }
    else {
        alert("Please provide a valid 10 degit Persobnal-Mobile number !");
        document.getElementById("T-Mobile").focus();
        return false;
    }
}

function validateFormPage1() {

    if (document.getElementById("First").value == "") {
        alert("Please provide your First name!");
        document.getElementById("First").focus();
        return false;
    }

    if (document.getElementById("Last").value == "") {
        alert("Please provide your last name!");
        document.getElementById("Last").focus();
        return false;
    }

    if (document.getElementById("datefield").value == "") {
        alert("Please provide your Date Of Birth!");
        document.getElementById("datefield").focus();
        return false;
    }

    if (document.getElementById("email").value == "") {
        alert("Please provide your E-mail address!");
        document.getElementById("email").focus();
        return false;
    }
    if (document.getElementById("FFirst").value == "") {
        alert("Please provide your Fathers's First name !");
        document.getElementById("FFirst").focus();
        return false;
    }
    if (document.getElementById("FLast").value == "") {
        alert("Please provide your Fathers's Last name !");
        document.getElementById("FLast").focus();
        return false;
    }
    if (document.getElementById("MFirst").value == "") {
        alert("Please provide your Mother's First name !");
        document.getElementById("MFirst").focus();
        return false;
    }
    if (document.getElementById("MLast").value == "") {
        alert("Please provide your Mother's Last name !");
        document.getElementById("MLast").focus();
        return false;
    }
    if (document.getElementById("Gender").value == "") {
        alert("Please provide your Gender !");
        document.getElementById("Gender").focus();
        return false;
    }
    if (document.getElementById("Nationality").value == "") {
        alert("Please provide your Nationality !");
        document.getElementById("Nationality").focus();
        return false;
    }
    if (document.getElementById("HAddress").value == "") {
        alert("Please provide your Home Address !");
        document.getElementById("HAddress").focus();
        return false;
    }
    if (document.getElementById("City").value == "") {
        alert("Please provide your City !");
        document.getElementById("City").focus();
        return false;
    }
    if (document.getElementById("State").value == "") {
        alert("Please provide your State !");
        document.getElementById("State").focus();
        return false;
    }
    if (document.getElementById("Country").value == "") {
        alert("Please provide your Country !");
        document.getElementById("Country").focus();
        return false;
    }
    if (document.getElementById("T-Home").value == "") {
        alert("Please provide your Home telephone number of 10 degit !");
        document.getElementById("T-Home").focus();
        return false;
    }

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.email.value)) {
        return true;
    }
    alert("You have enterned an invalaid email address !")
    return false;
}

function ValidatePercentage(inputtxt) {
    var percentage = /^\d{2}$/;
    if ((inputtxt.value.match(percentage))) {
        return true;
    }
    else {
        alert("percentage is varies in between 0-100.");
        return false;
    }
}

function validateFormPage2() {
    if (document.getElementById("HIname").value == "") {
        alert("Please provide your HSC Institute name!");
        document.getElementById("HIname").focus();
        return false;
    }
    if (document.getElementById("HSCBoard").value == "") {
        alert("Please Select your HSC Board!");
        document.getElementById("HSCBoard").focus();
        return false;
    }
    if (document.getElementById("HSCScore").value == "") {
        alert("Please Enter your Score in HSC in percentage !");
        document.getElementById("HSCScore").focus();
        return false;
    }
    if (document.getElementById("SIname").value == "") {
        alert("Please provide your SSC Institute name!");
        document.getElementById("SIname").focus();
        return false;
    }
    if (document.getElementById("SSCBoard").value == "") {
        alert("Please Select your SSC Board!");
        document.getElementById("SSCBoard").focus();
        return false;
    }
    if (document.getElementById("SSCScore").value == "") {
        alert("Please Enter your Score in SSC in percentage !");
        document.getElementById("SSCScore").focus();
        return false;
    }
    if (document.getElementById("CurrentlyPursuing").value == "") {
        alert("Please provide your Currently Pursuing Institute name!");
        document.getElementById("CurrentlyPursuing").focus();
        return false;
    }
    if (document.getElementById("CIName").value == "") {
        alert("Please Select your Current educational institute name !");
        document.getElementById("CIName").focus();
        return false;
    }
    if (document.getElementById("OverallPercentage").value == "") {
        alert("Please Enter your Overall Percentage !");
        document.getElementById("OverallPercentage").focus();
        return false;
    }
    if (document.getElementById("CurrentBacklogs").value == "") {
        alert("Please Enter your Current Backlogs if any !");
        document.getElementById("CurrentBacklogs").focus();
        return false;
    }
}

function sizeValidationOf4Mb(xyz) {
    var input = xyz;
    var file = input.files;
    if (file.length == 0) {
        alert("No File Chosen!");
        return false;
    }
    var fileSize = Math.round((file[0].size / 1024));
    if (fileSize <= 4 * 1024) {
        alert("Uploaded");
    } else {
        alert("Error! File too large.. \nThe file size will be maximum 4Mb!! ");
    }
}
function sizeValidationOf10Mb(xyz) {
    var input = xyz;
    var file = input.files;
    if (file.length == 0) {
        alert("No File Chosen!");
        return false;
    }
    var fileSize = Math.round((file[0].size / 1024));
    if (fileSize <= 10 * 1024) {
        alert("Uploaded");
    } else {
        alert("Error! File too large.. \nThe file size will be maximum 4Mb!! ");
    }
}
