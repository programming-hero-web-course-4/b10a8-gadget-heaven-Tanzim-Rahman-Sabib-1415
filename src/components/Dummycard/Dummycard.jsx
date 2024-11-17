import React from 'react';
import { Link } from "react-router-dom";

const Dummycard = ({ gadget }) => {
    const { product_id, product_title, product_image, category, price, description, specification, availability, rating } = gadget;

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure className='h-60'>
                <img
                    src={product_image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{product_title}</h2>
                <p>${price}</p>
                <div className="card-actions justify-start">
                    <Link to={`gadgets/${product_id}`}>
                    <button className="btn bg-white rounded-[32px] border-primary-1 text-primary-1 font-semibold btn-outline hover:bg-primary-1 hover:border-none text-lg">Veiw Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Dummycard;