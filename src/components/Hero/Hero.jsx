import React, { useEffect, useState } from 'react';
import Dummycard from '../Dummycard/Dummycard';
import banner from '../../assets/banner.jpg'
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Hero = () => {
    const [gadgetType, setGadgetType] = useState("All")
    const [gadgetData, setGadgetData] = useState([])
    const activeStyle = "bg-primary-1 text-white hover:bg-purple-500 font-semibold text-lg rounded-[32px]"
    // useEffect(() => {
    //     fetch("fakedata.json")
    //         .then(res => res.json())
    //         .then(data => setGadgetData(...gadgetData, data))
    // }, [])


    const realData = useLoaderData()
    // console.log("setttttttttttttttttttttt",realData)

    // setGadgetData([realData])
    // console.log(gadgetData.length)
    // console.log(gadgetData)
    return (
        <div className='mb-[100px]'>
            <Helmet>
            <title>Home</title>
            </Helmet>
            <div className='bg-primary-1 h-[624px] mx-7 relative text-white'>
                <div className='pt-12 text-center max-w-[1280px] mx-auto'>
                    <h1 className='text-[56px] font-bold mb-6 leading-tight'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    <p className='mb-8'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br></br> the coolest accessories, we have it all!</p>
                    <a href='#mainveiw'>
                    <button className='btn rounded-[32px] text-primary-1 font-bold text-[18px]'>Shop Now</button>
                    </a>
                </div>

                <div className='absolute -bottom-96 p-6 border-2 rounded-[32px] bg-white/30 h-[611px] w-[1110px] left-1/2 transform -translate-x-1/2 '>
                    <img src={banner} alt="" className='rounded-3xl object-cover h-full w-full object-center' />
                </div>

            </div>

            <div id="mainveiw">
                <h1 className='font-bold text-4xl text-center mt-[435px] pt-10'>Explore Cutting-Edge Gadgets</h1>
            </div>

            <div className='mt-12 mx-auto flex max-w-[1480px] gap-4'>
                <div className='flex flex-col gap-6 bg-white p-6 rounded-[32px] border h-fit'>
                    <div className={`btn ${gadgetType === "All" ? activeStyle : 'rounded-[32px]'}`} onClick={() => setGadgetType("All")}>All</div>
                    <div className={`btn ${gadgetType === "Audio" ? activeStyle : 'rounded-[32px]'}`} onClick={() => setGadgetType("Audio")}>Audio</div>
                    <div className={`btn ${gadgetType === "Wearables" ? activeStyle : 'rounded-[32px]'}`} onClick={() => setGadgetType("Wearables")}>Wearables</div>
                    <div className={`btn ${gadgetType === "Cameras" ? activeStyle : 'rounded-[32px]'}`} onClick={() => setGadgetType("Cameras")}>Cameras</div>
                    <div className={`btn ${gadgetType === "Smart Home" ? activeStyle : 'rounded-[32px]'}`} onClick={() => setGadgetType("Smart Home")}>Smart Home</div>
                    <div className={`btn ${gadgetType === "Tablets" ? activeStyle : 'rounded-[32px]'}`} onClick={() => setGadgetType("Tablets")}>Tablets</div>
                    <div className={`btn ${gadgetType === "Computers" ? activeStyle : 'rounded-[32px]'}`} onClick={() => setGadgetType("Computers")}>Computers</div>
                    <div className={`btn ${gadgetType === "Home Entertainment" ? activeStyle : 'rounded-[32px]'}`} onClick={() => setGadgetType("Home Entertainment")}>Home Entertainment</div>
                </div>




                <div className=' flex-1 grid grid-cols-3 gap-x-4 gap-y-9 rounded-2xl'>
                    {realData.map((gadget) => {
                        if ((gadgetType === "All") || (gadgetType === gadget.category)) {
                            return <Dummycard key={gadget.product_id} gadget={gadget}></Dummycard>
                        }
                    }

                    )
                    }
                </div>
            </div>
        </div>
    );
};

export default Hero;