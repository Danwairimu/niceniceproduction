document.addEventListener("DOMContentLoaded",function(){
    const btn=document.getElementById("button");
    
    btn.addEventListener('click',function(){

        event.preventDefault(); //prevents the  submission of the default 

        window.location.href="../html/home.html"
    })
});