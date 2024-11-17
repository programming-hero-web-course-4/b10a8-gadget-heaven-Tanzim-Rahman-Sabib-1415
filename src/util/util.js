const getItemCart = () => {
    let cart = localStorage.getItem('cart');
    
    if (!cart) {
        cart = '[]';  
        localStorage.setItem('cart', cart);
    }

    return JSON.parse(cart);  
}

const setItemCart = (item) => {
    let cart = getItemCart()
    cart.push(item)
    localStorage.setItem('cart',JSON.stringify(cart))
}
const isItemInCart = (id) =>{
    const cart = getItemCart();
    const exist = cart.includes(id);
    return exist
}

const removeItemCart = (id) => {
    let cart = getItemCart();
    if(!isItemInCart(id)){return};

    const newCart = cart.filter(storedId => storedId !== id)
    
    localStorage.setItem('cart',JSON.stringify(newCart))
}






const getItemWishlist = () => {
    let wishList = localStorage.getItem('wishlist');
    
    if (!wishList) {
        wishList = '[]';  
        localStorage.setItem('wishlist', wishList);
    }

    return JSON.parse(wishList);  
}



const setItemWishist = (item) => {
    let wishList = getItemWishlist()
    if(isItemInWishlist(item)){return}
    wishList.push(item)
    localStorage.setItem('wishlist',JSON.stringify(wishList))
}

const isItemInWishlist = (id) =>{
    const wishList = getItemWishlist();
    const exist = wishList.includes(id);
    return exist
}

const removeItemWishlist = (id) => {
    let wishList = getItemWishlist();
    // console.log("wishlist",wishList)
    if(!isItemInWishlist(id)){return};

    const newWishList = wishList.filter(storedId=>storedId !== id)
    // console.log("newWishList",newWishList)
    localStorage.setItem('wishlist',JSON.stringify(newWishList))
}


export  {getItemCart, setItemCart, setItemWishist, getItemWishlist, isItemInWishlist, removeItemWishlist, removeItemCart, isItemInCart};