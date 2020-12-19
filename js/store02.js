
function openNav() {
  document.getElementById("mySideBar").style.width = "250px";
}


function closeNav() {
  document.getElementById("mySideBar").style.width = "0"; 
} 



if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartProductButtons = document.getElementsByClassName('btn-remove')
    for (var i = 0; i < removeCartProductButtons.length; i++) {
        var button = removeCartProductButtons[i]
       
        button.addEventListener('click',removeCartProduct)
    }
    
    var amountInputs = document.getElementsByClassName('cart-amount-input')
    for (var i = 0; i < amountInputs.length; i++) {
        var input = amountInputs[i]
        input.addEventListener('change', amountChanged)
    }

   
    var addToCartButtons = document.getElementsByClassName('store-product-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)


function addToCartClicked(event) {
    var button = event.target 
    
    var storeProduct = button.parentElement.parentElement
   
    var title = storeProduct.getElementsByClassName('store-product-title')[0].innerText
    
    var price = storeProduct.getElementsByClassName('store-product-price')[0].innerText
    
    var imageSrc = storeProduct.getElementsByClassName('store-product-image')[0].src
       
    addProductToCart(title, price, imageSrc)
    
    updateCartTotal()
}


function purchaseClicked() {
    var cartProducts = document.getElementsByClassName('cart-products')[0]
    if(cartProducts.hasChildNodes()){
        alert('Thank you for your purchase,\n We will contact with you shortly for further details!');
    }else{
        alert('Seems that you have not added anything!');
        return;
    }
    
    while (cartProducts.hasChildNodes()) {
        cartProducts.removeChild(cartProducts.firstChild)
    }
    updateCartTotal()
}


function addProductToCart(title, price, imageSrc) {
    
    var cartRow = document.createElement('div')
   
    cartRow.classList.add('cart-row')
    var cartProducts = document.getElementsByClassName('cart-products')[0]
    var cartProductNames = cartProducts.getElementsByClassName('cart-product-title')
    
    for (var i = 0; i < cartProductNames.length; i++) {
        if (cartProductNames[i].innerText == title) {
            alert('Seems this Painting is already in you Cart!')
            
            return
        }
    }
    
    var cartRowContents = `
        <div class="cart-product cart-column">
            <img class="cart-product-image" src="${imageSrc}" width="100" height="100"> 
            <span class="cart-product-title">${title}</span>
        </div>
        <div class="cart-amount cart-column">
            <input class="cart-amount-input" type="number" value="1">
            
        </div>
        <span class="cart-price cart-column">
        ${price}
        <button class="btn btn-remove" type="button">REMOVE</button>
        </span>`
    
    cartRow.innerHTML = cartRowContents
    
    cartProducts.append(cartRow)
    
    cartRow.getElementsByClassName('btn-remove')[0].addEventListener('click', removeCartProduct)
    
    cartRow.getElementsByClassName('cart-amount-input')[0].addEventListener('change', amountChanged)
}


function addToCartClicked(event) {
    var button = event.target
    var storeProduct = button.parentElement.parentElement
    var title = storeProduct.getElementsByClassName('store-product-title')[0].innerText
    var price = storeProduct.getElementsByClassName('store-product-price')[0].innerText
    var imageSrc = storeProduct.getElementsByClassName('store-product-image')[0].src
    addProductToCart(title, price, imageSrc)
    updateCartTotal()
}


function amountChanged(event) {
 
    var input = event.target
    
    if (isNaN(input.value) || input.value <= 0 || input.value>5) {
        input.value = 1
    }
    updateCartTotal()
}

 var amountInputs = document.getElementsByClassName('cart-amount-input')
    for (var i = 0; i < amountInputs.length; i++) {
        var input = amountInputs[i]
        input.addEventListener('change', amountChanged)
    }


function removeCartProduct(event){
     
     var buttonClicked = event.target
     buttonClicked.parentElement.parentElement.remove() 
     updateCartTotal()
}


var removeCartProductButtons = document.getElementsByClassName('btn-remove')
    for (var i = 0; i < removeCartProductButtons.length; i++) {
        var button = removeCartProductButtons[i]

        
        button.addEventListener('click',function(event){
           
            var buttonClicked = event.target
            buttonClicked.parentElement.parentElement.remove() 
            updateCartTotal()
        })
    }

   
    function updateCartTotal() {
        var cartProductContainer = document.getElementsByClassName('cart-products')[0]
        var cartRows = cartProductContainer.getElementsByClassName('cart-row')
        var total = 0
        for (var i = 0; i < cartRows.length; i++) {
            
            var cartRow = cartRows[i]
            var priceElement = cartRow.getElementsByClassName('cart-price')[0]
            var amountElement = cartRow.getElementsByClassName('cart-amount-input')[0]
            
            var price = parseFloat(priceElement.innerText)
            var amount = amountElement.value
            
            total = total + (price * amount)
        }
       
        total = Math.round(total*100)/100
        document.getElementsByClassName('cart-total-price')[0].innerText = '\u20AC' + total
    }
}