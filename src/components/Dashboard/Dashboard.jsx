import React, { useContext, useState, useEffect } from 'react';
import Cart from '../Cart/Cart';
import Wishlist from '../Wishlist/Wishlist';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { getItemCart, getItemWishlist, removeItemCart, removeItemWishlist } from '../../util/util';
import ModalIcon from '../../assets/Group.png'
import { ThemeContext } from '../../root';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-toastify';

const Dashboard = () => {
    const { switchBtn, setSwitchBtn } = useContext(ThemeContext)
    const [cartActive, setCartActive] = useState(switchBtn);
    const [cartList, setCartList] = useState(getItemCart());
    const [wishList, setWishList] = useState(getItemWishlist());
    const gadgetData = useLoaderData();
    const navigate = useNavigate()
    // const wishList = getItemWishlist();

    useEffect(() => {
        setCartActive(switchBtn);
    }, [switchBtn]);

    const handleRemoveFromCart = (id) => {
        removeItemCart(id);
        setCartList(getItemCart());
    }

    const handleRemoveFromWishlist = (id) => {
        removeItemWishlist(id);
        setWishList(getItemWishlist());
    }

    const sortCart = () => {
        displayCart.sort((a, b) => b.price - a.price);
        const sortedCart = displayCart.map(gadget => gadget.product_id)
        setCartList(sortedCart)
    }

    const displayCart = cartList.map((cartItemId) => {
        return gadgetData.find((gadget) => gadget.product_id === cartItemId)
    })

    const displayWishList = wishList.map((cartItemId) => {
        return gadgetData.find((gadget) => gadget.product_id === cartItemId)
    })

    const purchase = () => {
        document.getElementById('my_modal_5').showModal()
        // setCartList([])
        // localStorage.setItem('cart',[])
    }

    const clearCart = () => {
        setCartList([]);
        localStorage.setItem('cart', []);
        navigate("/")
    }

    let priceAll = displayCart.reduce((sum, cur) => sum + cur.price, 0).toFixed(3)
    // console.log(displayCart)

    const addToCart = (productId) => {
        setCartList((prevCart) => {
            const updatedCart = [...prevCart, productId];
            localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update localStorage
            return updatedCart;
        });
        toast.success("Item added to cart");
    };

    return (
        <div>
            <Helmet>
                <title>Dashboard</title>
            </Helmet>
            <div className='bg-primary-1  text-center py-8 flex flex-col text-white'>
                <span className='font-bold text-[32px] mb-4'>Dashboard</span>
                <span>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br />the coolest accessories, we have it all!</span>
                <div className='flex justify-center gap-6 mt-8'>

                    <button className={`btn w-[200px] text-lg font-bold rounded-3xl  ${cartActive ? '' : 'bg-transparent text-white hover:bg-purple-900'}`} onClick={() => {
                        if (!cartActive) { setSwitchBtn(!cartActive); setCartActive(!cartActive); }
                    }}>Cart</button>

                    <button className={`btn w-[200px] text-lg font-bold rounded-3xl  ${cartActive ? 'bg-transparent text-white hover:bg-purple-900' : ''}`} onClick={() => {
                        if (cartActive) { setSwitchBtn(!cartActive); setCartActive(!cartActive); }
                    }}>Wishlist</button>


                </div>
            </div>
            <div className='max-w-[1280px] mx-auto'>

                {cartActive &&
                    <div className='flex justify-between mt-12 mb-8'>
                        <div className='text-2xl font-bold my-auto'>Cart</div>
                        <div className='flex gap-x-5 items-center'>

                            <div>
                                <p className='text-2xl font-bold'>Toatal cost: {priceAll}</p>
                            </div>
                            <div>
                                <button className='btn text-primary-1 bg-transparent border border-primary-1 rounded-3xl ml-2' onClick={() => sortCart()}>Sort by Price</button></div>
                            <div>
                                {/* {console.log(typeof(parseFloat(priceAll)))} */}
                                <button className='btn bg-primary-1 text-white rounded-3xl hover:bg-purple-900' onClick={() => purchase()} disabled={!parseFloat(priceAll)}>Purchase</button></div>
                        </div>
                    </div>
                }

                {cartActive && (displayCart.map(gadget => <Cart gadget={gadget} clickRemove={handleRemoveFromCart}></Cart>))}

                {!cartActive &&
                    <div className='mt-12 mb-8'>
                        <h1 className='text-2xl font-bold my-auto'>Wishlist</h1></div>
                }

                {!cartActive && (displayWishList.map(gadget => 
                    <Wishlist 
                        gadget={gadget} 
                        clickRemove={handleRemoveFromWishlist} 
                        addToCart={addToCart}
                    />
                ))}
            </div>

            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box flex flex-col justify-center text-center">
                    <div className='mx-auto pt-8 pb-6'>

                        <img src={ModalIcon} alt="" />
                    </div>

                    <h3 className="font-bold text-2xl">Payment Successfully</h3>

                    <div className='divider'></div>
                    <p className="">Thanks for purchasing</p>
                    <br />
                    <p>Total: {priceAll}</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}

                            <button className="btn" onClick={() => clearCart()}>Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Dashboard;