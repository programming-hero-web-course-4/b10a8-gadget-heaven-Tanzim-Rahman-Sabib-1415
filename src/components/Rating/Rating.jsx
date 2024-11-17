import React from 'react';

const Rating = ({ rating }) => {

    const roundedRating = Math.floor(rating * 2) / 2;

    return (
        <div className="rating rating-md rating-half">
            {Array.from({ length: 5 }, (_, i) => {
                const halfIndex = i + 1;
                const isHalfFilled = roundedRating === halfIndex - 0.5;
                const isFullFilled = roundedRating >= halfIndex;

                return (
                    <React.Fragment key={i}>
                        
                        <input
                            type="radio"
                            name="rating-10"
                            className="mask mask-star-2 mask-half-1 bg-amber-300 cursor-default"
                            checked={isHalfFilled}
                            disabled
                        />
                        
                        <input
                            type="radio"
                            name="rating-10"
                            className="mask mask-star-2 mask-half-2 bg-amber-300 cursor-default"
                            checked={isFullFilled}
                            disabled
                        />
                    </React.Fragment>
                );
            })}
        </div>
    );
};

export default Rating;
