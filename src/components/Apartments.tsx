import React from 'react';
import Caption from "./Caption";
import '../styles/Appartments.css'
import RentCard from "./RentCard";


const Apartments = () => {
    const counter: number = 3;
    return (
        <div className='apartments'>
            <div className='apartments-control-block'>
                <Caption>🏠 Available Apartments ({counter})</Caption>
                <div className='sort-control'>
                    Sort by:
                    <select value='sort'>
                        <option value='highest price' selected={true}>Price: Highest price</option>
                        <option value='lowest price'>Price: Lowest price</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Apartments;