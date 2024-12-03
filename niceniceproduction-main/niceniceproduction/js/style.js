document.addEventListener("DOMContentLoaded",function(){
    const btn=document.getElementById("button");
    
    btn.addEventListener('click',function(){

        event.preventDefault(); //prevents the  submission of the default 

        window.location.href="../html/home.html"
    })
});
document.addEventListener("DOMContentLoaded",function(){
    const btn=document.getElementById("signup");
    
    btn.addEventListener('click',function(){

        event.preventDefault(); //prevents the  submission of the default 

        window.location.href="../html/signup.html"
    })
});
document.addEventListener("DOMContentLoaded",function(){
    const btn=document.getElementById("login");
    
    btn.addEventListener('click',function(){

        event.preventDefault(); //prevents the  submission of the default 

        window.location.href="../index.html"
    })
});


//sign up confirming of a password
function checker(){
    let pass=document.getElementById('pass');
    let confirm=document.getElementById('confirm');
    if(pass==confirm){
        window.alert('correct');    
    }
    else{
        window.alert('passwords not similar');
    }

}
