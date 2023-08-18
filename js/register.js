//Show Number Of Cart Products
if (localStorage.getItem("cartProducts")) {
    let products = JSON.parse(localStorage.getItem("cartProducts"));
    CartItem.innerHTML = products.length;
}



let errorsArray = [];
let notEroorArray = [];
subBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const gender = document.getElementsByName("gender");
    const errorsP = document.getElementsByClassName("error");
    let errorIndex = 0;
    let notErrorIndex = 0;
    let sportsInc = 0;
    function errfun(num, array, index) {
        errorsArray[errorIndex] = num;
        errorIndex++;
    }
    function noerrfun(num) {
        notEroorArray[notErrorIndex] = num;
        notErrorIndex++;
    }
    (!/^[a-zA-xZ\s]{8,}$/g.test(nameInput.value)) ? errfun(0) : noerrfun(0);
    (!/^[a-z]{3,}\d*@(yahoo|gmail)(.com)$/.test(emailInput.value)) ? errfun(1) : noerrfun(1);
    (!/^\w{8,}$/.test(passwordInput.value)) ? errfun(2) : noerrfun(2);
    (!gender[0].checked || gender[1].checked) ? errfun(3) : noerrfun(3);
    for (let i = 0; i < errorsArray.length; i++) {
        errorsP[errorsArray[i]].style.display = "block";
    }
    for (let i = 0; i < notEroorArray.length; i++) {
        errorsP[notEroorArray[i]].style.display = "none";
    }
    if (errorsArray.length == 0) {
        if (localStorage.getItem("userContacts")) {
            let userContacts = JSON.parse(localStorage.getItem("userContacts"));
            let YourEmailIsFound = false;
            for (let i = 0; i < userContacts.length; i++) {
                if (userContacts[i].userEmail == emailInput.value) {
                    YourEmailIsFound = true
                    break;
                }
            }
            if (YourEmailIsFound) {
                RegisterError.style.display = "block";
            } else {
                RegisterError.style.display = "none";
                let userData = { "userName": nameInput.value, "userEmail": emailInput.value, "userPassword": passwordInput.value };
                localStorage.setItem("userContacts", JSON.stringify([...userContacts, userData]))
                window.location = "signin.html";
            }
        } else {
            let userData = { "userName": nameInput.value, "userEmail": emailInput.value, "userPassword": passwordInput.value };
            localStorage.setItem("userContacts", JSON.stringify([userData]));
            window.location = "signin.html";
        }
    }
    errorsArray = [];
    notEroorArray = [];

})