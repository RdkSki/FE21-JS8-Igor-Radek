var cart = [];

function addtoCart(obj){
    if(cart.length == 0){
        cart.push(obj);
    }else if(cart.find((val) => val.name == obj.name)){
        obj.qtty ++;
    }else{
        cart.push(obj);
    }
    createRow();
    total();    
    console.table(cart);
}


function createRow(){
    
}
var buttons = document.getElementbyClassName("product-button");
console.log(buttons);

for (let i=0; i<buttons.length, i++){
    buttons[i].addEventListener("click", function)
    document.getElementsByClassName("buttons").innerHTML=
}

