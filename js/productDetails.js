//Show Number Of Cart Products
if (localStorage.getItem("cartProducts")) {
    CartItem.innerHTML = JSON.parse(localStorage.getItem("cartProducts")).length;
}
//get Item From Local Storage And Do Destruct
let { id, name, old_price, current_price, category, available_colors, carousel_images } = JSON.parse(localStorage.getItem("viewItem"))[0];
let index = 0;
ProducName.innerHTML = name;
(old_price) ? ProductOldPrice.innerHTML += ` <del>${old_price}$</del>` : ProductOldPrice.style.display = "none";
ProductNewPrice.innerHTML += ` ${current_price}$`;
ProductCategory.innerHTML += ` ${category}`;
let colorItems = "<h4>Colors:</h4>";
for (let i = 0; i < available_colors.length; i++) {
    colorItems += `<div class="rounded-circle" style="width:50px; height:50px; background-color:#${available_colors[i]}"></div>`;
}
ProductColorContainer.innerHTML = colorItems;
ProductImggSlider.src = carousel_images[index];
setInterval(function () {
    if (index < carousel_images.length - 1) {
        ProductImggSlider.src = carousel_images[++index];
    } else {
        index = 0;
        ProductImggSlider.src = carousel_images[++index];
    }
}, 2000)
ProductBtnNext.addEventListener("click", function () {
    if (index < carousel_images.length - 1) {
        ProductImggSlider.src = carousel_images[++index];
    } else {
        index = 0;
        ProductImggSlider.src = carousel_images[++index];
    }
})
ProductBtnPrev.addEventListener("click", function () {
    if (index == 0) {
        index = carousel_images.length - 1;
        ProductImggSlider.src = carousel_images[index];
    } else {
        ProductImggSlider.src = carousel_images[--index];
    }
})

if (localStorage.getItem("isSignIn") == "true") {
    signInUserName.innerHTML = localStorage.getItem("isUserName");
    SignOut.style.display = "block";
}
SignOut.addEventListener("click", function () {
    localStorage.setItem("isSignIn", false);
})

if (localStorage.getItem("isSignIn") == "true") {
    console.log(localStorage.getItem("userInfo"));
    signInUserName.innerHTML = localStorage.getItem("userInfo");
    SignOut.style.display = "block";
}
SignOut.addEventListener("click", function () {
    localStorage.setItem("isSignIn", false);
})