// Get Data For Specific Product
function getProductById(id) {
    fetch("shoes.json")
        .then((response) => response.text())
        .then((json) => (products = JSON.parse(json)))
        .then((products) => { localStorage.setItem("viewItem", JSON.stringify((products.filter(product => product.id == id)))) })
        .catch((error) => { console.log(error) })
}

function addProductToCart(id) {
    fetch("shoes.json")
        .then((response) => response.text())
        .then((json) => (products = JSON.parse(json)))
        .then((products) => {
            let specificProduct = products.filter(ele => ele.id == id);
            let cartProducts = [];
            if (localStorage.getItem("cartProducts")) {
                cartProducts = JSON.parse(localStorage.getItem("cartProducts"));
                let productIsFound = false;
                cartProducts.map(product => {
                    if (product.id == id) {
                        productIsFound = true;
                        return;
                    }
                });
                console.log("productIsFound ", productIsFound);
                if (productIsFound) {
                    cartProducts = cartProducts.map(product => {
                        if (product.id == id) {
                            product.quantity += 1;
                            return product;
                        } else {
                            return product
                        }
                    })
                } else {
                    specificProduct[0].quantity = 1;
                    cartProducts = [...cartProducts, ...specificProduct];
                }
                localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
                CartItem.innerHTML = cartProducts.length;
            } else {
                specificProduct[0].quantity = 1;
                localStorage.setItem("cartProducts", JSON.stringify(specificProduct));
                CartItem.innerHTML = 1;
            }
        })
        .catch((error) => { console.log(error) })
}
// Get Data For All Products
function getAllProduct(typeOrGender, typeOrGenderValue) {
    fetch("shoes.json")
        .then((response) => response.text())
        .then((json) => (products = JSON.parse(json)))
        .then((products) => { displayProducts(products, typeOrGender, typeOrGenderValue) })
        .catch((error) => { console.log(error) })
}
// Display The Products Based On Your Category Or Type
function displayProducts(allProducts, typeOrGender, typeOrGenderValue) {
    let products;
    if (typeOrGender !== undefined) {
        products = allProducts.filter((product) => product[typeOrGender] == typeOrGenderValue)
    } else {
        products = allProducts
    }
    let allItems = "";
    for (let i = 0; i < products.length; i++) {
        let { id, name, current_price, category, carousel_images } = products[i];
        allItems += `<div class="col-lg-3 col-md-4 col-sm-6  mb-3">
        <div class="bg-light pb-2 Item h-100">
            <div class="Item-img-content rounded-2 position-relative overflow-hidden">
                <img class="img-fluid" src="${carousel_images[0]}" alt="member img" />
            </div>
            <h6 class="fs-4 my-2 fw-bold Item-Name">${name.split(" ").slice(0, 2).join(" ")}</h6>
            <p class="fs-6 text-muted Item-Category">${category}</p>
            <p class="fs-12 Item-Price" style="color:#10cab7;">${current_price}&dollar;</p>
            <div class="d-flex justify-content-evenly align-items-center py-2">
                <button class="btn text-white btnView" data-id="${id}">View</button>
                <button class="btn text-white btnAdd" data-id="${id}"><i class="fas fa-cart-shopping me-2"></i>Add</button>
            </div>
        </div>
    </div>`;
    }
    SectionProductRow.innerHTML = allItems;
    let btnView = document.querySelectorAll(".btnView");
    let btnAdd = document.querySelectorAll(".btnAdd");
    btnView.forEach(element => {
        element.addEventListener("click", function () {
            getProductById(element.dataset.id)
            window.location = "productDetails.html";
        })
    });
    btnAdd.forEach(element => {
        element.addEventListener("click", function () {
            addProductToCart(element.dataset.id)

        })
    });
}
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
// In First Time Window Load Will Display All Products
getAllProduct();
//Show All Products
showAllProduct.addEventListener("click", function () {
    getAllProduct();
})
//Show Men Products
showMaleProduct.addEventListener("click", function () {
    getAllProduct("gender", "Men");
})
//Show Women Products
showFemaleProduct.addEventListener("click", function () {
    getAllProduct("gender", "Women");
})
//Show Shoes Products
showShoesProduct.addEventListener("click", function () {
    getAllProduct("type", "Shoes");
})
//Show Apparel Products
showApparelProduct.addEventListener("click", function () {
    getAllProduct("type", "Apparel");
})
