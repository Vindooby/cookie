document.addEventListener ("DOMContentLoaded",function (){

var sugar = document.querySelector("#button1");
var chocolate = document.querySelector("#button2");
var lemon = document.querySelector("#button3");
var clear = document.querySelector("#button4");
var title = document.getElementById("h1");

var sugarValue = 0;
var chocolateValue = 0;
var lemonValue = 0;

lemon.addEventListener("click",function(){
  lemonValue++;
  Cookies.set("Lemon",lemonValue);
  lemon.innerHTML = lemonValue;
});
sugar.addEventListener("click",function(){
  sugarValue++;
  Cookies.set("Sugar",sugarValue);
  sugar.innerHTML = sugarValue;
});
chocolate.addEventListener("click",function(){
  chocolateValue++;
  Cookies.set("Chocolate",chocolateValue);
  chocolate.innerHTML = chocolateValue;
});
clear.addEventListener("click", function(){
  event.preventDefault();
    sugar.innerHTML = sugarValue = 0;
    chocolate.innerHTML = chocolateValue = 0;
    lemon.innerHTML = lemonValue = 0;
    title.innerHTML = 0;
})

function lemonSave (){
  lemon.innerHTML = Cookies.get("Lemon");
};
function sugarSave (){
  sugar.innerHTML = Cookies.get("Sugar");
};
function chocolateSave (){
  chocolate.innerHTML = Cookies.get("Chocolate");
};
window.onload = lemonSave();
window.onload = sugarSave();
window.onload = chocolateSave();

});
