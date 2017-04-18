
var sugar = document.querySelector("#button1");
var chocolate = document.querySelector("#button2");
var lemon = document.querySelector("#button3");
var clear = document.querySelector("#button4");
var title = document.getElementById("h1");

var sugarValue = 0;
var chocolateValue = 0;
var lemonValue = 0;

Cookies.set("Sugar", sugarValue);
Cookies.set("Chocolate", chocolateValue);
Cookies.set("Lemon", lemonValue);

sugar.addEventListener("click", function(){
  event.preventDefault();
    sugarValue += 1;
    Cookies.set("Sugar", sugarValue);
    sugar.innerHTML = sugarValue;
    title.innerHTML = sugarValue + chocolateValue + lemonValue;
});

chocolate.addEventListener("click", function(){
  event.preventDefault();
    chocolateValue += 1;
    Cookies.set("Chocolate", chocolateValue);
    chocolate.innerHTML = chocolateValue;
    title.innerHTML = sugarValue + chocolateValue + lemonValue;
});

lemon.addEventListener("click", function(){
  event.preventDefault();
    lemonValue += 1;
    Cookies.set("Lemon", lemonValue);
    lemon.innerHTML = lemonValue;
    title.innerHTML = sugarValue + chocolateValue + lemonValue;
});

clear.addEventListener("click", function(){
  event.preventDefault();
    sugar.innerHTML = sugarValue = 0;
    chocolate.innerHTML = chocolateValue = 0;
    lemon.innerHTML = lemonValue = 0;
    title.innerHTML = 0;
})
