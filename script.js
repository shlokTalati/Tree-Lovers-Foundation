var hamburgerBtn = document.getElementById('hamburger-btn');
var navMobile = document.getElementById('nav-mobile');

function toggleNav()
 {

    // if (navMobile.style.display != "flex") 
    // {
    //     navMobile.style.display = "flex";
    //     console.log("The navMobile is now Block")
    // }
    
    // else
    // {
    //     navMobile.style.display = "none";
    //     console.log("The navMobile is now None")
    // } 


    if(navMobile.style.height != "260px"){
        navMobile.style.height = "260px";
        console.log("Height is now Max Content");
    }
    else{
        navMobile.style.height = "0px";
        console.log("Height is now 0px");
}
}

$(document).ready(function(){
    $("#hamburger").click(function(){
      $(this).toggleClass("is-active");
    });
  });

