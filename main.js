// cart
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");
// Open Cart
cartIcon.onclick = () =>{
    cart.classList.add("active");
};
// Close Cart
closeCart.onclick = () =>{
    cart.classList.remove("active");
};
// Cart Working
if (document.readyState == 'loading'){
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

// Making Function
function ready(){
    // Remove Items From Cart 
    var removeCartButtons = document.getElementsByClassName('cart-remove');
    console.log(removeCartButtons)
    for (var i = 0; i < removeCartButtons.lenght; i++){
        var button = removeCartButtons[i]
        button.addEventListener('click', removeCartItems);
    }
}

// Remove Items From Cart 
function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();   
}