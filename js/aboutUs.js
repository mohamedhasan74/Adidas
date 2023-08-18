//Show Number Of Cart Products
if (localStorage.getItem("cartProducts")) {
    CartItem.innerHTML = JSON.parse(localStorage.getItem("cartProducts")).length;
}
if (localStorage.getItem("isSignIn") == "true") {
    console.log(localStorage.getItem("userInfo"));
    signInUserName.innerHTML = localStorage.getItem("userInfo");
    SignOut.style.display = "block";
}
SignOut.addEventListener("click", function () {
    localStorage.setItem("isSignIn", false);
})