import React, {FC} from 'react';
import Caption from "./Caption";
import "../styles/Rent.css"
import RentCard from "./RentCard";
import {IApartment} from "../interfaces";

interface RentProps {
    apartments: Array<IApartment>,
}


const Rent: FC<RentProps> = (props) => {
    return (
        <div className= "rent-block">
            <Caption>🤩 Your current rent</Caption>
            {props.apartments.map(apartment => {
                return <RentCard key={apartment.id} {...apartment}/>
            })}
        </div>
    );
};

export default Rent;