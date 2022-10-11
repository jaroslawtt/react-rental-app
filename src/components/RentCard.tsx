import React, { FC } from 'react';
import '../styles/Rent-Card.css'
import Cancel from "../UI/Cancel";
import {IApartment} from "../interfaces";
import Controls from "./Controls";
import RentButton from "../UI/RentButton";
import Delete from "../UI/Delete";


interface RentCardProps extends IApartment{

}


const RentCard: FC<RentCardProps> = ({name, rooms, days, price,rented}) => {
    return (
        <div className= 'rent-card'>
                <div className='rent-card-info'>
                    {name} / {rooms} rooms / {days} days / ${price}
                </div>
            {
                rented ?
                    <Controls>
                        <Cancel/>
                    </Controls>
                    :
                    <Controls>
                        <RentButton/>
                        <Delete/>
                    </Controls>
            }
        </div>
    );
};

export default RentCard;