//Show Number Of Cart Products
if (localStorage.getItem("cartProducts")) {
    let products = JSON.parse(localStorage.getItem("cartProducts"));
    CartItem.innerHTML = products.length;
}
let errorsArray = [];
let notEroorArray = [];
subBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const errorsP = document.getElementsByClassName("error");
    let errorIndex = 0;
    let notErrorIndex = 0;
    function errfun(num) {
        errorsArray[errorIndex] = num;
        errorIndex++;
    }
    function noerrfun(num) {
        notEroorArray[notErrorIndex] = num;
        notErrorIndex++;
    }
    (!/^[a-z]{3,}\d*@(yahoo|gmail)(.com)$/.test(emailInput.value)) ? errfun(0) : noerrfun(0);
    (!/^\w{8,}$/.test(passwordInput.value)) ? errfun(1) : noerrfun(1);
    for (let i = 0; i < errorsArray.length; i++) {
        errorsP[errorsArray[i]].style.display = "block";
    }
    for (let i = 0; i < notEroorArray.length; i++) {
        errorsP[notEroorArray[i]].style.display = "none";
    }
    if (errorsArray.length == 0) {
        if (localStorage.getItem("userContacts")) {
            let userContacts = JSON.parse(localStorage.getItem("userContacts"));
            let uName = "";
            let YourEmailIsFound = false;
            for (let i = 0; i < userContacts.length; i++) {
                if (userContacts[i].userEmail == emailInput.value && userContacts[i].userPassword == passwordInput.value) {
                    YourEmailIsFound = true;
                    uName = userContacts[i].userName;
                }
            }
            if (YourEmailIsFound) {
                localStorage.setItem("isSignIn", "true");
                localStorage.setItem("userInfo", `${uName}`);
                window.location = "index.html"
            } else {
                registerError.style.display = "block";
            }

        } else {
            registerError.style.display = "block";
        }
    }
    errorsArray = [];
    notEroorArray = [];

})
RegBtn.addEventListener("click", function (e) {
    e.preventDefault();
    window.location = "register.html"
})