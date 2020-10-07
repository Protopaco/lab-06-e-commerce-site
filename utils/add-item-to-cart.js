export function addItemToCart(itemID){

    let cartArray = [];
    let found = false;

    // if cart exists in localStorage assign it to cartArray
    if (localStorage.getItem('cart')){
        cartArray = JSON.parse(localStorage.getItem('cart'));
        console.log(cartArray);
    } 

    // if this item already exists in cartArray, increment quantity
    for (let item of cartArray){
        if (item.id === itemID) {
            item.quantity++;
            found = true;
        }
    }
    
    // if this item doesn't already exist, add its own entry
    if (found === false) {
        let cartItem = {
            id: itemID,
            quantity: 1,
        }

        cartArray.push(cartItem);
    }
    // store cartArray in localStorage under 'cart'
    localStorage.setItem('cart', JSON.stringify(cartArray));
}