import React, { FC } from 'react';
import '../styles/Rent-Card.css'
import Cancel from "../UI/Cancel";
import { IApartment } from "../interfaces";
import Controls from "./Controls";
import RentButton from "../UI/RentButton";
import Delete from "../UI/Delete";
import { useAppDispatch } from "../hooks";
import { apartmentSlice } from "../store/slices";


interface RentCardProps extends IApartment{

}


const RentCard: FC<RentCardProps> = ({name, rooms, days, price,rented, id}) => {
    const dispatch = useAppDispatch();
    const deleteHandler = () => {
        dispatch(apartmentSlice.actions.deleteApartment(id));
    }
    const onToggle = () => {
        dispatch(apartmentSlice.actions.toggleApartment(id));
    }
    return (
        <div className= 'rent-card'>
                <div className='rent-card-info'>
                    {name} / {rooms} room(-s) / {days} day(-s) / ${price}
                </div>
            {
                rented ?
                    <Controls>
                        <Cancel onClick={onToggle}/>
                    </Controls>
                    :
                    <Controls>
                        <RentButton onClick={onToggle}/>
                        <Delete onClick={deleteHandler}/>
                    </Controls>
            }
        </div>
    );
};

export default RentCard;