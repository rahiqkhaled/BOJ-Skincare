let ProductsInCart = localStorage.getItem("ProductsInCart")
let allProducts = document.querySelector(".products")

if(ProductsInCart){
    let item = JSON.parse(ProductsInCart) ;
    drawCartProducts(item);
}

/////// badge
let cartProductDiv = document.querySelector(".carts_products div")
let badge = document.querySelector(".badge")
 // incrementing badge

let addedItem = localStorage.getItem("ProductsInCart") ? JSON.parse(localStorage.getItem("ProductsInCart")) : [];

if(addedItem) {
    addedItem.map(item => {
        cartProductDiv.innerHTML += `<p>${item.title}</p>`;
    })
    badge.style.display = "block";
    badge.innerHTML = addedItem.length;
}


////layout of products in cart page


function drawCartProducts(products){
    let y = products.map((item) => {
        return `
        <div class="product_item">
        <img class="product_item_img" src="${item.imageUrl}" alt="">
        <div class="product_item_desc">
            <h2>${item.title}</h2>
            <p>the new Beauty product from Beauty of Joseon Korean Brand</p>
            <span>${item.price}</span>
        </div>
        <div class="product_item_action">
         <button class="add_to_cart" onClick="removeFromCart(${item.id})">Remove From Cart</button>
        </div>
    </div>
        `
    })
    allProducts.innerHTML = y;
}drawCartProducts();


/// removing frome cart


function removeFromCart(productId) {
    let ProductsInCart = localStorage.getItem("ProductsInCart");
    
    if (ProductsInCart) {
        let cartProducts = JSON.parse(ProductsInCart);
        
        const index = cartProducts.findIndex(product => product.id === productId);
        
        if (index !== -1) {
            cartProducts.splice(index, 1);
            
            localStorage.setItem("ProductsInCart", JSON.stringify(cartProducts));
            
            drawCartProducts(cartProducts);
            updateBadgeCount(cartProducts.length);
        } else {
            console.log("Product not found in cart.");
        }
    } else {
        alert("Cart is empty.");
    }
}

// Function to update the badge count
function updateBadgeCount(count) {
    let badge = document.querySelector(".badge");
    if (count > 0) {
        badge.style.display = "block";
        badge.innerHTML = count;
    } else {
        badge.style.display = "none";
    }
}
