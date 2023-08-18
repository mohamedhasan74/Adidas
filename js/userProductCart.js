//Show Number Of Cart Products
if (localStorage.getItem("cartProducts")) {
    productCartContainer.style.display = "block";
    noFoundContainer.style.display = "none";
    let products = JSON.parse(localStorage.getItem("cartProducts"));
    CartItem.innerHTML = products.length;
    let allItems = "";
    let totalPrice = 0;
    for (let i = 0; i < products.length; i++) {
        let { id, name, current_price, category, carousel_images, quantity } = products[i];
        totalPrice += (current_price * quantity);
        allItems += `<div class="col-lg-3 col-md-4 col-sm-6  mb-3">
        <div class="bg-light pb-2 Item h-100">
            <div class="Item-img-content rounded-2 position-relative overflow-hidden">
                <img class="img-fluid" src="${carousel_images[0]}" alt="member img" />
            </div>
            <h6 class="fs-4 my-2 fw-bold Item-Name">${name.split(" ").slice(0, 2).join(" ")}</h6>
            <p class="fs-6 text-muted Item-Category">${category}</p>
            <p class="fs-12 Item-Price" style="color:#10cab7;">${current_price}&dollar;</p>
            <p class="fs-12 Item-Price">Item Quantity <i class="fa-brands fa-shopify"></i> <strong>${quantity}</strong></p>
        </div>
    </div>`;
    }
    TotalPrice.innerHTML = `Total Price: ${totalPrice}$`;
    SectionProductRow.innerHTML = allItems;
} else {
    productCartContainer.style.display = "none";
    noFoundContainer.style.display = "block";
}

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