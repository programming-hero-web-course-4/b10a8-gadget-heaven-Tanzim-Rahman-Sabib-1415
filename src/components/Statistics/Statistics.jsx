import React from 'react';
import {ComposedChart,Line,Area,BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import Barchart from '../Barchart/Barchart';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Statistics = () => {
    // const data = [
    //     { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    //     { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    //     { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    //     { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    //     { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    //     { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    //     { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
    // ];

    const data = useLoaderData()

    return (
        <div>
            <Helmet>
                <title>Statistics</title>
            </Helmet>
            <div className='bg-primary-1  text-center py-8 flex flex-col text-white'>
                <span className='font-bold text-[32px] mb-4'>Statistics</span>
                <span>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br />the coolest accessories, we have it all!</span>

            </div>

            <div className='h-[500px] w-full max-w-[1280px] mx-auto my-10'>
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart
                        data={data}
                        
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="product_title" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area dataKey="price" type="monotone" fill="#8884d8" stroke="#8884d8"/>
                        <Bar dataKey="price" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />

                    </ComposedChart>
                </ResponsiveContainer>
            </div>
            {/* <Barchart></Barchart> */}
        </div>
    );
};

export default Statistics;