 let productsincart=localStorage.getItem("productsincart")
 let allProducts =document.querySelector(".products")
 if(productsincart){
    let item=JSON.parse(productsincart)
    drawcartsproducts(item)
 }

 function  drawcartsproducts (products){
        let y = products.map(item => {
            return `
            <div class="product_item">
            <img class="product_item_img" src="${item.imageUrl}" alt="">
            <div class="product_item_desc">
                <h2>${item.title}</h2>
                <p>the new mobile from oppo company 6-2022</p>
                <span>${item.color}</span>
            </div>
            <div class="product_item_action">
            <button class="add_to_cart" onClick="removeFromCart(${item.id})">Remove From Cart</button>
            </div>
        </div>
                `
    })
    allProducts.innerHTML = y;
}



 
///////////////////////////////////////////////
let products = [
    {
        id:1,
        title: "oppo reno 7",
        color: "black",
        imageUrl : "images/pexels-photo-440320.webp"
    },
    {
        id:2,
        title: "i phone 13",
        color: "red",
        imageUrl : "images/pexels-photo-440320.webp"
    },
    {
        id:3,
        title: "watch32",
        color: "blue",
        imageUrl : "images/pexels-photo-440320.webp"
    },
    {
        id:4,
        title: "car19",
        color: "grey",
        imageUrl : "images/pexels-photo-440320.webp"
    },
]
let cartProductDiv=document.querySelector(".carts_products div")
let badge=document.querySelector(".badge")
let removeditem = localStorage.getItem("productsincart") ? JSON.parse(localStorage.getItem("productsincart")) : [];
if(removeditem) {
    removeditem.map(item => {
        cartProductDiv.innerHTML += `<p>${item.title}</p>`;
    })
    badge.style.display = "block";
    badge.innerHTML = removeditem.length;
}


function removeFromCart(id) {
    let choosenitemIndex = removeditem.findIndex(item => item.id === id);
    if (choosenitemIndex !== -1) {
        removeditem.splice(choosenitemIndex, 1); 
        localStorage.setItem("productsincart", JSON.stringify(removeditem)); 
        cartProductDiv.innerHTML = ""; 
        removeditem.forEach(item => {
            cartProductDiv.innerHTML += `<p>${item.title}</p>`; 
        });
        badge.innerHTML = removeditem.length; 
        if (removeditem.length === 0) {
            badge.style.display = "none"; 
        }
    }
}
let shopping_cart=document.querySelector(".shopping_cart")
let carts_products=document.querySelector(".carts_products")
shopping_cart.addEventListener("click",opencart)
function opencart(){
    if(carts_products.innerHTML!=""){
      if( carts_products.style.display=="block") {
        carts_products.style.display="none"
      }
    
    else{
        carts_products.style.display="block"
    }
}
}
 