
var pizza_prices = 0;
function pizza_price(){
    unchekdAll();
   if (document.getElementById("pizza1").checked) {
        pizza_prices = parseInt(document.getElementById("pizza1").value);
        disabledPizza1();
   }else if (document.getElementById("pizza2").checked) {
        pizza_prices = parseInt(document.getElementById("pizza2").value);
        disabledPizza2();
   }else if(document.getElementById("pizza3").checked){
        pizza_prices = parseInt(document.getElementById("pizza3").value);
        disabledPizza3();
   }

   document.getElementById("pizza_price").innerHTML = pizza_prices;
}
// console.log(pizza_price());

function sizePz(){
    var size_pizza = 0;
    var price = parseInt(pizza_prices);
    if (document.getElementById("small").checked) {
        size_pizza = price - 1;
        document.getElementById("small").checked = true;
    }else if (document.getElementById("medium").checked) {
        size_pizza = price;
        document.getElementById("medium").checked = true;
    }else if(document.getElementById("large").checked){
        size_pizza = price + 2;
        document.getElementById("large").checked = true;

    }
    document.getElementById("pizza_price").innerHTML = size_pizza;
    return size_pizza;
}
function topppingPz(){

    var size_pizza = parseInt(sizePz());
    var topping_pizza = 0;
    if (document.getElementById("avocado").checked) {
        topping_pizza += 1;
    }
     if (document.getElementById("broccoli").checked) {
        topping_pizza += 1;
    }
     if(document.getElementById("onions").checked){
        topping_pizza += 1;
    }
     if(document.getElementById("zucchini").checked){
        topping_pizza += 1;
    }
     if(document.getElementById("lobster").checked){
        topping_pizza += 2;
    }
     if(document.getElementById("oyster").checked){
        topping_pizza += 2;
    }
     if(document.getElementById("salmon").checked){
        topping_pizza += 2;
    }
     if(document.getElementById("tuna").checked){
        topping_pizza += 2;
    }
     if(document.getElementById("bacon").checked){
        topping_pizza += 3;
    }
     if(document.getElementById("duck").checked){
        topping_pizza += 3;
    }
     if(document.getElementById("ham").checked){
        topping_pizza += 3;
    }
     if(document.getElementById("sausage").checked){
        topping_pizza += 3;
    }
    var total_price = size_pizza + topping_pizza;
    document.getElementById("pizza_price").innerHTML = total_price;
    // return total_price;    
}

function disabledPizza1(){
    document.getElementById("avocado").disabled = false;
    document.getElementById("broccoli").disabled = false;
    document.getElementById("onions").disabled = false;
    document.getElementById("zucchini").disabled = false;

    document.getElementById("lobster").disabled = true;
    document.getElementById("oyster").disabled = true;
    document.getElementById("salmon").disabled = true;
    document.getElementById("tuna").disabled = false;

    document.getElementById("bacon").disabled = true;
    document.getElementById("duck").disabled = true;
    document.getElementById("ham").disabled = false;
    document.getElementById("sausage").disabled = true;
}
function disabledPizza2(){
    document.getElementById("avocado").disabled = true;
    document.getElementById("broccoli").disabled = false;
    document.getElementById("onions").disabled = false;
    document.getElementById("zucchini").disabled = false;

    document.getElementById("lobster").disabled = false;
    document.getElementById("oyster").disabled = false;
    document.getElementById("salmon").disabled = false;
    document.getElementById("tuna").disabled = true;

    document.getElementById("bacon").disabled = false;
    document.getElementById("duck").disabled = true;
    document.getElementById("ham").disabled = false;
    document.getElementById("sausage").disabled = true;
}
function disabledPizza3(){
    document.getElementById("avocado").disabled = true;
    document.getElementById("broccoli").disabled = false;
    document.getElementById("onions").disabled = false;
    document.getElementById("zucchini").disabled = false;

    document.getElementById("lobster").disabled = true;
    document.getElementById("oyster").disabled = true;
    document.getElementById("salmon").disabled = true;
    document.getElementById("tuna").disabled = false;

    document.getElementById("bacon").disabled = false;
    document.getElementById("duck").disabled = false;
    document.getElementById("ham").disabled = false;
    document.getElementById("sausage").disabled = false;

}
function unchekdAll() {
    if (document.getElementById("avocado").checked) {
        document.getElementById("avocado").checked = false;
    }
     if (document.getElementById("broccoli").checked) {
        document.getElementById("broccoli").checked = false;
    }
     if(document.getElementById("onions").checked){
        document.getElementById("onions").checked = false;
    }
     if(document.getElementById("zucchini").checked){
        document.getElementById("zucchini").checked = false;
    }
     if(document.getElementById("lobster").checked){
        document.getElementById("lobster").checked = false;
    }
     if(document.getElementById("oyster").checked){
        document.getElementById("oyster").checked = false;
    }
     if(document.getElementById("salmon").checked){
        document.getElementById("salmon").checked = false;
    }
     if(document.getElementById("tuna").checked){
        document.getElementById("tuna").checked = false;
    }
     if(document.getElementById("bacon").checked){
        document.getElementById("bacon").checked = false;
    }
     if(document.getElementById("duck").checked){
        document.getElementById("duck").checked = false;
    }
     if(document.getElementById("ham").checked){
        document.getElementById("ham").checked = false;
    }
     if(document.getElementById("sausage").checked){
        document.getElementById("sausage").checked = false;
    }
}
