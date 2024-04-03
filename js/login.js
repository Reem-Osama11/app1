let username=document.getElementById("username")
let password=document.getElementById("password")
let registerbtn=document.getElementById("sign-in")
let getusername=localStorage.getItem("username")
let getpassword=localStorage.getItem("password")

registerbtn.addEventListener("click", function(e){
    e.preventDefault()
    if(username.value===""||password.value===""){
        alert("enter fill data")
    }
    else{
        if( username.value.trim()===getusername&&getusername.trim()&&password.value.trim()===getpassword&&getpassword.trim()){
            setTimeout(()=>{
                window.location="index.html"
            })
            
        }

    }
})