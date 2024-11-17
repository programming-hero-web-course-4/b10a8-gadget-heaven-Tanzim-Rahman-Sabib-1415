import React, { useState } from 'react';
import { getItemCart, removeItemCart } from '../../util/util';
import { toast } from 'react-toastify';


const Cart = ({ gadget, clickRemove }) => {
    const { product_id, product_title, product_image, category, price, description, specification, availability, rating } = gadget || {}
    
    return (
        <div className='p-8 bg-white my-6 rounded-2xl'>
            <div className='flex'>
                <div className='w-[200px] h-28'>
                    <img src={product_image} alt="" className='rounded-xl  w-full h-full object-cover' />
                </div>

                <div className='flex flex-col justify-between flex-1 ml-8'>
                    <h1 className='font-semibold text-2xl'>{product_title}</h1>
                    <p className='text-lg'>{description}</p>
                    <h1 className='font-semibold text-xl'>{price}</h1>
                </div>

                <div><button className="btn btn-circle btn-outline bg-red-300 text-red-800 border-red-300"
                onClick={()=>{
                    toast.error("Item removed from cart");
                    clickRemove(product_id)}}>
                    
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="red"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button></div>

            </div>
        </div>
    );
};

export default Cart;