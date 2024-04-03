 let link=document.getElementById("link")
 let user_info=document.querySelector("#user_info")
 let user=document.querySelector("#user")
 if (localStorage.getItem("username")){
    link.remove()
    user_info.style.display ="flex"
    user.innerHTML = localStorage.getItem("username")
}

let logoutbut=document.querySelector("#logout")
logoutbut.addEventListener("click",function(){
    localStorage.clear();
    setTimeout(()=>{
        window.location="login.html"
    },1500)
})

////////////////////////////////////////////////////////////////////////////////
let allProducts = document.querySelector(".products")
let products = [
    {
        id:1,
        title: "iphone",
        color: "black",
        imageUrl : "images/pexels-photo-3934704.jpeg"
    },
    {
        id:2,
        title: "airpods",
        color: "red",
        imageUrl : "images/pexels-photo-3825517.jpeg"
    },
    {
        id:3,
        title: "headphones",
        color: "blue",
        imageUrl : "images/pexels-photo-3394665.jpeg"
    },
    {
        id:4,
        title: "watch",
        color: "grey",
        imageUrl : "images/pexels-photo-440320.webp"
    },
]
function drawItems (){
    let y = products.map((item) => {
        return` 
        <div class="product_item">
        <img class="product_item_img" src="${item.imageUrl}" alt="">
        <div class="product_item_desc">
            <h2>${item.title}</h2>
            <p>the new mobile from oppo company 6-2022</p>
            <span>${item.color}</span>
        </div>
        <div class="product_item_action">
         <button class="add_to_cart" onClick="addtocart(${item.id})">Add To Cart</button>
         <i class="far fa-heart fav"></i>
        </div>
    </div>
        `
    })
    allProducts.innerHTML = y;
}
drawItems ()
// addeditem=[];
let cartProductDiv=document.querySelector(".carts_products div")
let badge=document.querySelector(".badge")
let addeditem = localStorage.getItem("productsincart") ? JSON.parse(localStorage.getItem("productsincart")) : [];
if(addeditem) {
    addeditem.map(item => {
        cartProductDiv.innerHTML += `<p>${item.title}</p>`;
    })
    badge.style.display = "block";
    badge.innerHTML = addeditem.length;
}




    if(localStorage.getItem("username")){
        function addtocart(id){
            let choosenitem=products.find((item)=> item.id===id)
            cartProductDiv.innerHTML+=`<p>${choosenitem.title}</p>`

            addeditem=[...addeditem,choosenitem]
            localStorage.setItem("productsincart",JSON.stringify(addeditem))
            let cartproductlength=document.querySelectorAll(".carts_products div p")
              badge.style.display="block"
            //   console.log(cartproductlength.length)
              badge.innerHTML = cartproductlength.length

       }
    }
    else{
        window.location="login.html"
    }
//////////////////////////////////////////
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

