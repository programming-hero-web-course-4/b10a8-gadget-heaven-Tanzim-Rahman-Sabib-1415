import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { FaRegHeart as HeartIcon } from "react-icons/fa";
import { IoCartOutline as CartIcon } from "react-icons/io5";

import Rating from '../Rating/Rating';
import { setItemCart, isItemInWishlist, setItemWishist, removeItemWishlist } from '../../util/util';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet-async';


const Gadgetdetail = () => {
    const { product_id } = useParams()
    const data = useLoaderData();
    const inWishlist = isItemInWishlist(product_id);
    // console.log(inWishlist,"is it present")

    const [wishlistBtnActive, setWishlistBtnActive] = useState(inWishlist);

    const clickWishlistBtn = () => {
        

        setWishlistBtnActive(prevState => {
            const newState = !prevState;
            if (newState) {
                setItemWishist(product_id);
                toast.success("Added to Wishlist");
            }
            else {
                removeItemWishlist(product_id);
                toast.info("Removed from Wishlist")
            }
            return newState
        });


    }

    const gadgetData = data.find(gadget => gadget.product_id === product_id)
    // console.log(gadgetData)
    const { product_title, product_image, category, price, description, specification, availability, rating } = gadgetData || {}



    return (
        <div>
            <Helmet><title>{product_title}</title></Helmet>
            <div className='bg-primary-1 h-[463px] text-center py-8 flex flex-col text-white'>
                <span className='font-bold text-[32px] mb-4'>Product Details</span>
                <span>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br />the coolest accessories, we have it all!</span>
            </div>

            <div className='flex bg-white rounded-3xl p-8 relative -top-[200px] gap-x-8 flex-1 w-fit mx-auto'>
                <div className='max-w-[424px] h-[]'>
                    <img src={product_image} className='rounded-2xl object-cover h-[600px]' alt="" />
                </div>

                <div className='flex flex-col justify-between '>
                    <div>

                        <h1 className='font-semibold text-3xl mb-3'>{product_title}</h1>
                        <p className='font-semibold text-xl mb-4'>Price: $ {price}</p>
                        <div className={`rounded-[32px] border w-fit px-3 font-semibold ${availability ? 'border-green-400 text-green-400' : 'border-red-400 text-red-400'}`}>{availability ? 'Avilable' : 'Out of Stock'}</div>
                    </div>
                    <p className='text-lg'>{description}</p>
                    <div>
                        <p className='font-bold text-lg mb-3'>Specification:</p>
                        <div className='text-lg'>
                            {specification.map((spec, index) => {
                                return <p>{index + 1}. {spec}</p>
                            })}
                        </div>
                    </div>
                    <div>
                        <div className='flex gap-1 items-center mb-1'>
                            <h2 className='text-lg font-bold mb-2'>Rating</h2>
                            <p className='ml-2 text-lg font-semibold text-green-500'>{rating}</p>
                        </div>
                        <Rating rating={rating}></Rating>
                    </div>
                    <div className='flex gap-4'>
                        <button className='btn rounded-[32px] text-lg text-white bg-primary-1 hover:bg-purple-800'
                            onClick={() => {
                                setItemCart(product_id);
                                toast("Added to Cart")
                            }} disabled={!availability}
                        >Add to Cart <CartIcon /> </button>

                        <button className={`btn  rounded-full  text-[18px]  ${wishlistBtnActive ? 'bg-pink-400 text-white hover:bg-pink-400' : 'hover:text-white hover:bg-pink-300'}`}
                            onClick={clickWishlistBtn}
                        ><HeartIcon /></button>

                    </div>
                </div>
            </div>
                    
        </div>
    );

};

export default Gadgetdetail;