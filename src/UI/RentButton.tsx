import React, {FC} from 'react';
import '../styles/Button.css'
import { ButtonInterface } from "../interfaces/Button.interface";

interface RentButtonProps extends ButtonInterface{

}

const RentButton:FC<RentButtonProps> = (props) => {
    return (
        <button {...props} className= 'btn btn-rent'>
            Rent
        </button>
    );
};

export default RentButton;