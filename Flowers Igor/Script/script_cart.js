var products = [{
    name: "Pink Rose",
    image: "Images/pink2.jpg",
    price: 6.5,
    qtty: 1
}, {
    name: "Red Rose",
    image: "Images/red2.jpg",
    price: 8,
    qtty: 1
}, {
    name: "White Rose",
    image: "Images/white2.jpg",
    price: 5.5,
    qtty: 1
}];

for (let x of products) {
    document.getElementsByClassName("products")[0].innerHTML += `<div class="product col-12 col-md-6 col-lg-4 text-center fw-bold">
    <p class ="product-title h3 m-3">${x.name}</p>
    <img class ="product-image" src="${x.image}" width="100%" height="500">
    <div class="product-details" >
        <p class="product-price h4 m-3">${x.price} €</p>
        <button class="btn btn-primary product-button"  type="button">ADD  TO CART</button>
    </div>
    </div>
    `
}


var cart = [];



function addToCart(product) {

    var item = cart.find((val) => val.name == product.name);
    console.log(item)

    if (item) {
        item.qtty++;

    } else {
        cart.push(product)

    }

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Item is added',
        showConfirmButton: false,
        timer: 1500
    })

    console.table(cart);

    createRows();

    Total();
}



let buttons = document.getElementsByClassName("product-button");

for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", function() {
        addToCart(products[i]);
    })
}


function createRows() {
    var result = "";

    for (let x of cart) {
        result += `
    <div class="cart-row row d-flex">
        <div class="cart-item col-6 my-3 ">
            <img class="cart-item-image" src="${x.image}">
            <span class="cart-item-title h5 ">${x.name}</span>
        </div>
        
        <span class="cart-price col-3 h4 my-4">${x.price} €</span>
       
        <div class="cart-qtty-action col-3 d-flex">            
            <i class="minus fa fa-minus-circle my-auto" ></i>            
            <div class="cart-quantity p-4 h4">${x.qtty}</div>            
            <i class="plus fa fa-plus-circle my-auto"></i>         
            <button class="del btn btn-danger rounded-circle  my-auto ms-3 fw-bold" type="button"> X </button>            
        </div>
    </div>
    `;
    }

    document.getElementById("cart-items").innerHTML = result;


    let plus = document.getElementsByClassName("plus");
    let minus = document.getElementsByClassName("minus");
    let del = document.getElementsByClassName("del");

    for (let i = 0; i < plus.length; i++) {
        plus[i].addEventListener("click", function() {
            plusQtty(i);
            Total();
        });
        minus[i].addEventListener("click", function() {
            minusQtty(i);
            Total();
        });
        del[i].addEventListener("click", function() {
            deleteItem(i);
            Total();
        });
    }

}

function Total() {

    let itemsA = 0;
    let total = 0;

    for (let x of cart) {
        total = total + (x.price * x.qtty);
        itemsA = itemsA + x.qtty
    }

    if (total < 100) {
        document.getElementById("price").innerHTML = total.toFixed(2) + " € (discount 0)";

    } else {

        document.getElementById("price").innerHTML = `${(total * 0.9).toFixed(2)} € (discount <i>10%</i>)`;
    }

    document.getElementById('itemsamount').innerHTML = itemsA
}





function plusQtty(i) {

    cart[i].qtty++;
    document.getElementsByClassName("cart-quantity")[i].innerHTML = cart[i].qtty;
}


function minusQtty(i) {

    if (cart[i].qtty == 1) {
        cart.splice(i, 1);
        createRows();
    } else {
        cart[i].qtty -= 1;
        document.getElementsByClassName("cart-quantity")[i].innerHTML = cart[i].qtty;
    }
}


function deleteItem(i) {

    cart[i].qtty = 1;
    cart.splice(i, 1);
    createRows();
}


// document.getElementById('btn-purchase').addEventListener('click', checkOut)

// function checkOut() {


// }