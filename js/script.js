let userInfo = document.querySelector ("#user_info")
let userD = document.querySelector ("#user")
let links = document.querySelector ("#links")

if (localStorage.getItem("username")){
    links.remove()
    userInfo.style.display ="flex"
    userD.innerHTML = localStorage.getItem("username")
}else{
    window.location = "login.html";
}
let logOutBtn = document.querySelector("#logout")
logOutBtn.addEventListener("click", function (){
    setTimeout(() => {
        window.location = "login.html";
    } , 1500)
})
 


let allProducts = document.querySelector(".products")
let products = [
    {
        id:1,
        title: "Body Wash",
        price: "25$",
        imageUrl : "images/1.webp"
    },
    {
        id:2,
        title: "Moisturizing Cream",
        price: "30$",
        imageUrl : "images/2.webp"
    },
    {
        id:3,
        title: "Ginseng Cleansing Oil",
        price: "20$",
        imageUrl : "images/3.webp"
    },
    {
        id:4,
        title: "Ginseng Essence Water",
        price: "20$",
        imageUrl : "images/4.webp"
    },
    {
        id:5,
        title: "Special Perfume",
        price: "49$",
        imageUrl : "images/5.webp"
    },
    {
        id:6,
        title: "Serums kit",
        price: "70$",
        imageUrl : "images/6.webp"
    },
    {
        id:7,
        title: "RedBean WaterGel",
        price: "18$",
        imageUrl : "images/7.webp"
    },
    {
        id:8,
        title: "Apricot Peeling Gel",
        price: "13$",
        imageUrl : "images/8.avif"
    },
    {
        id:9,
        title: "RedBean Pore Mask",
        price: "24$",
        imageUrl : "images/9.webp"
    },
    {
        id:10,
        title: "AHA-BHA Refreshing Toner ",
        price: "18$",
        imageUrl : "images/10.webp"
    },
    {
        id:11,
        title: "Relief Sun : Rice + Probiotics Set (2pack)",
        price: "30$",
        imageUrl : "images/11.webp"
    },
    {
        id:12,
        title: "Matte Sun Stick : Mugwort+Camelia (SPF 50+ PA++++)",
        price: "18$",
        imageUrl : "images/12.webp"
    },
    {
        id:13,
        title: "Ginseng Moist Sun Serum (SPF 50+ PA++++)",
        price: "21$",
        imageUrl : "images/13.webp"
    },
    {
        id:14,
        title: "Perfect Hanbang Sun Trio [Relief Sun + Matte Sun Stick + Sun Serum]",
        price: "48$",
        imageUrl : "images/14.webp"
    },
    {
        id:15,
        title: "Green Plum Refreshing Cleanser",
        price: "13$",
        imageUrl : "images/15.webp"
    },
    {
        id:16,
        title: "Radiance Cleansing Balm",
        price: "19$",
        imageUrl : "images/16.webp"
    },
]

// Products layout

function drawItems (){
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
            <button class="add_to_cart" onClick="addToCart(${item.id})">Add To Cart</button>
        </div>
    </div>
        `
    })
    allProducts.innerHTML = y;
}drawItems ()


// adding products to cart
let cartProductDiv = document.querySelector(".carts_products div")
let badge = document.querySelector(".badge")


let addedItem = localStorage.getItem("ProductsInCart") ? JSON.parse(localStorage.getItem("ProductsInCart")) : [];

if(addedItem) {
    addedItem.map(item => {
        cartProductDiv.innerHTML += `<p>${item.title}</p>`;
    })
    badge.style.display = "block";
    badge.innerHTML = addedItem.length;
}

if(localStorage.getItem=("username")){
        function addToCart(id){
            let choosenItem = products.find((item) => item.id === id );
            cartProductDiv.innerHTML += `<p>${choosenItem.title}</p>`;
            

            addedItem = [...addedItem , choosenItem]
            localStorage.setItem("ProductsInCart" , JSON.stringify(addedItem) )
            let cartProductsLength = document.querySelectorAll(".carts_products div p")
            badge.style.display ="block";
            badge.innerHTML = cartProductsLength.length;
        }
    }else {
        window.location ="login.html"
}
/////view carts content preview

let shoppingCartIcon = document.querySelector(".shopping_cart")
let cartsProducts = document.querySelector(".carts_products")
shoppingCartIcon.addEventListener("click", opencart)

function opencart(){
     if(cartProductDiv.innerHTML !=""){
         if(cartsProducts.style.display=="block"){
            cartsProducts.style.display="none"
         }else {
            cartsProducts.style.display="block";
         }
     } 
}




function search(term){
   console.log(term);
   var cartona =``;


   for (var i = 0; i < products.length; i++) {
    //console.log(products[i].title.includes(term));
    if(products[i].title.toLowerCase().includes(term.toLowerCase())){
        cartona +=`
        <div class="product_item">
        <img class="product_item_img" src="${products[i].imageUrl}" alt="">
        <div class="product_item_desc">
            <h2>${products[i].title}</h2>
            <p>the new Beauty product from Beauty of Joseon Korean Brand</p>
            <span>${products[i].price}</span>
        </div>
        <div class="product_item_action">
            <button class="add_to_cart" onClick="addToCart(${products[i].id})">Add To Cart</button>       
        </div>
    </div>`
    }
   }

   allProducts.innerHTML = cartona;
}




