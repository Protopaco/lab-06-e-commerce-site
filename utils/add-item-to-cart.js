export function addItemToCart(itemID){

    let cartArray = [];
    if (localStorage.getItem('cart')){
        cartArray = JSON.parse(localStorage.getItem('cart'));
        console.log(cartArray);
    } 
    let found = false;
    for (let item of cartArray){
        if (item.id === itemID) {
            item.quantity++;
            found = true;
        }
    }
    if (found === false) {
        let cartItem = {
            id: itemID,
            quantity: 1,
        }
        console.log(found);
        cartArray.push(cartItem);
    }

    localStorage.setItem('cart', JSON.stringify(cartArray));
}