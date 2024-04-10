const usd = document.querySelector(".usd-dp");
const usd2 = document.querySelector(".usd-dp-2");
let btn = document.getElementById("top-nav-right-btn");
let btn2 = document.getElementById("top-nav-right-btn2");

document.addEventListener("DOMContentLoaded",runtoEvents);

function runtoEvents (){
 btn.addEventListener('click',showDropDown); 
 btn2.addEventListener('click',showDropDown2); 
 usd.addEventListener('click',stopAutoClose);  
 
};

function showDropDown(e) {
    if(e.target){
        usd.classList.toggle('show');
    };
    
}
function showDropDown2(e) {
    if(e.target){
        usd2.classList.toggle('show');
    } ;
    
}


function stopAutoClose(e){
    e.stopPropagation();
}

