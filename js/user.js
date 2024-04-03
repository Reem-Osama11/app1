let link=document.getElementById("link")
let user_info=document.querySelector("#user_info")
let user=document.querySelector("#user")
if (localStorage.getItem("username")){
    links.remove()
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


