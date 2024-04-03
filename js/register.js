 let username=document.getElementById("username")
 let password=document.querySelector("#password")
 let email=document.querySelector("#email")
 let registerbtn=document.querySelector("#sign-up")

 registerbtn.addEventListener("click", function(e)
 {
    e.preventDefault()
    if(username.value===""|| password.value===""|| email===""){
        alert("enter fill data")
    }
    else{
        localStorage.setItem("username",username.value)
        localStorage.setItem("password",password.value)
        localStorage.setItem("email",email.value)

        setTimeout( ()=>{
            window.location="login.html"
        },1200)
       

    }
 })