import React, { FC } from 'react';
import '../styles/Rent-Card.css'
import Cancel from "../UI/Cancel";
import {IApartment} from "../interfaces";
import Controls from "./Controls";
import RentButton from "../UI/RentButton";
import Delete from "../UI/Delete";
import {useDispatch} from "react-redux";
import {useAppDispatch} from "../hooks";
import appartmentSlice from "../store/slices/AppartmentSlice";


interface RentCardProps extends IApartment{

}


const RentCard: FC<RentCardProps> = ({name, rooms, days, price,rented, id}) => {
    const dispatch = useAppDispatch();
    const deleteHandler = () => {
        dispatch(appartmentSlice.actions.deleteApartment(id));
    }
    const onToggle = () => {
        dispatch(appartmentSlice.actions.toggleApartment(id));
    }
    return (
        <div className= 'rent-card'>
                <div className='rent-card-info'>
                    {name} / {rooms} rooms / {days} days / ${price}
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