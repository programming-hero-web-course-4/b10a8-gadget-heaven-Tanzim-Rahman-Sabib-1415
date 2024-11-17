import React from 'react';

const Botfooter = () => {
    return (
        <footer className="bg-white text-accent-content p-10 mx-auto flex flex-col">
            <div className='text-center mx-auto flex flex-col'>
                <h1 className='text-3xl font-bold mb-4'>Gadget Heaven</h1>
                <p>Leading the way in cutting-edge technology and innovation</p>
            </div>
            <div className='border my-9'></div>
            <div className='grid grid-cols-3 text-base-content max-w-[1280px] gap-52  mx-auto'>
                <div className='flex flex-col gap-2'>
                    <h6 class="footer-title font-black">Services</h6>
                    <a class="link link-hover">Product Support</a>
                    <a class="link link-hover">Order Tracking</a>
                    <a class="link link-hover">Shipping & Delivery</a>
                    <a class="link link-hover">Returns</a>
                </div>
                <div className='flex flex-col gap-2 '>
                    <h6 class="footer-title font-black">Company</h6>
                    <a class="link link-hover">About Us</a>
                    <a class="link link-hover">Careers</a>
                    <a class="link link-hover">Contact</a>
                    
                </div>
                <div className='flex flex-col gap-2'>
                    <h6 class="footer-title font-black">Legal</h6>
                    <a class="link link-hover">Terms of Service</a>
                    <a class="link link-hover">Privacy Policy</a>
                    <a class="link link-hover">Cookie Policy</a>
                    
                </div>
                
            </div>
        </footer>
    );
};

export default Botfooter;