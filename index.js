var hamburger = document.getElementById("hamburger")
var cancel = document.getElementById("cancel")
var mobile = document.getElementById("mobile-navigation")

hamburger.addEventListener("click",function(){
    mobile.style.display="block"
    cancel.style.display="block"
    hamburger.style.display="none"
})

cancel.addEventListener("click",function(){
    mobile.style.display="none"
    cancel.style.display="none"
    hamburger.style.display="block"
})