// Select List element in Html
let navList = document.querySelector(".products-nav-list");

document.querySelector("body").addEventListener("click",function(e){
   e.stopPropagation();
})


// Mobile menu navbar
let menu_icon=document.querySelector(".menu-btn-mobile");
let navbar_list=document.querySelector(".header-navbar");

   menu_icon.addEventListener("click",()=>{
      navbar_list.classList.toggle("active");
   })
