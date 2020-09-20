"use strict";
var profile = {};
var button = document.getElementById("submit");


function removeSelectDefault() {
    var emptyBoxes = document.getElementsByTagName("select");
    for (var i = 0; i < emptyBoxes.length; i++) {
        emptyBoxes[i].selectedIndex = -1;
        emptyBoxes[i].style.boxShadow = "none"
    }
}
//validate form 
function validateForm() {
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var address = document.getElementById("address");
    var city = document.getElementById("city");
    var province = document.getElementById("province");
    var postalcode = document.getElementById("pcode")
    var age = document.getElementById("age");
    var pass = document.getElementById("pass");
    var cfirm = document.getElementById("cfirm");
    var email = document.getElementById("email");

    if (fname.valueMissing ||
        lname.valueMissing ||
        address.valueMissing ||
        city.valueMissing ||
        province.valueMissing ||
        pcode.valueMissing||
        age.valueMissing ||
        pass.valueMissing ||
       cfirm.valueMissing ||
        email.valueMissing)
    {
       setCustomValidity("Please fill out this field. ");
    }
    profile.fname = fname.value;
    document.getElementById("profileFname").innerHTML = profile.fname;
    document.getElementById("profile").style.display = "block";
    document.getElementById("fnameSection").style.display = "block";

    profile.lname = lname.value;
    document.getElementById("profileLname").innerHTML = profile.lname;
    document.getElementById("lnameSection").style.display = "block";

    profile.address = address.value;
    document.getElementById("profileAddress").innerHTML = profile.address;
    document.getElementById("addressSection").style.display = "block";

    profile.city = city.value;
    document.getElementById("profileCity").innerHTML = profile.city;
    document.getElementById("citySection").style.display = "block";

    profile.province = province.value;
    document.getElementById("profileProvince").innerHTML = profile.province;
    document.getElementById("ProvinceSection").style.display = "block";

}
function validatePostalcode() {
    var pcode = document.getElementById("pcode");
    var regex = /^([A-Za-z]\d[A-Za-z][-]?\d[A-Za-z]\d)/;
    var error = document.getElementById("pcodeError");

    try {
        if (!regex.test(pcode.value)) {
            throw ("Error: Postal Code contains invalid characters!");

            return false;
        }
        profile.pcode = pcode.value;
        document.getElementById("profilePcode").innerHTML = profile.pcode;
        document.getElementById("pcodeSection").style.display = "block";
        return true;
    }
    catch (msg) {
        error.style.display = "block";
        error.innerHTML = msg;
        pcode.style.background = "rgb(255,233,233)";
    }
    }

function validateAge() {
    var age = document.getElementById("age");
    var error = document.getElementById("ageError");
    try {
        if (age.value < 18) {
            throw ("Error: The age input at least 18")
        }
        profile.age = age.value;
        document.getElementById("profileAge").innerHTML = profile.age;
        document.getElementById("AgeSection").style.display = "block";
    }
    catch (msg) {
    error.style.display = "block";
    error.innerHTML = msg;
    age.style.background = "rgb(255,233,233)";
    }

}
function validateEmail() {
    var emailInput = document.getElementById("email");
    var error = document.getElementById("emailError");
    try {
        if (emailInput.value.search("@") === -1 || emailInput.value.search(".") === -1) {

            throw ("Please provide a valid email address");
        }
        emailInput.style.background = "";
        error.style.display = "none";
        error.innerHTML = "";

        emailInput.value = emailInput.value.toLowerCase();
        profile.email = emailInput.value;

        document.getElementById("profileEmail").innerHTML = profile.email;
        document.getElementById("profile").style.display = "block";
        document.getElementById("emailSection").style.display = "block";
    }
    catch (msg) {
        error.style.display = "block";
        error.innerHTML = msg;
        emailInput.style.background = "rgb(255,233,233)";
    }

}

function validatePassword() {
    var pw1Input = document.getElementById("pass");
    var pw2Input = document.getElementById("cfirm");
    var error = document.getElementById("pwdError");
    try {
        if (/.{6,}/.test(pw1Input.value) === false) { throw "Password must be at least 6 characters"; }
        else if (pw1Input.value.localeCompare(pw2Input.value) !== 0) {
            throw "Password must match";
        }
        else if (/[A-Z]/.test(pw1Input.value) === false) {
            throw "Password must contain at least one uppercase letter";
        }
        else if (/\d/.test(pw1Input.value) === false) {
            throw "Password must contain at least one number";
        }
        else if (/[!@#\$%\^&\*]/.test(pw1Input.value) === false) {
            throw "Password must contain at least one special character"
        }
        pw1Input.style.background = "";
        pw2Input.style.background = "";
        error.style.display = "none";
        error.innerHTML = "";
        profile.password = pw1Input.value;
    }
    catch (msg) {
        error.style.display = "block";
        error.innerHTML = msg;
        pw1Input.style.background = "rgb(255, 233, 233)";
        pw2Input.style.background = "rgb(255, 233, 233)";
    }

}



function setUpPage() {
    validateForm();
    validatePostalcode();
    removeSelectDefault();
    validateAge();
    validatePassword();
    validateEmail();
   
}
function createEventListeners() {
    if (button.addEventListener) {
        window.addEventListener("change", setUpPage, false);
    }
    else if (button.attachEvent) {
        window.attachEvent("onchange", setUpPage)
    };
}




if (window.addEventListener) {
    window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", createEventListeners);
}



