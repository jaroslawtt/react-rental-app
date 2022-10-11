import React, {FC} from 'react';
import '../styles/Button.css'
import {ButtonInterface} from "../interfaces/Button.interface";

interface CancelProps extends ButtonInterface{

}

const Cancel:FC<CancelProps> = (props) => {
    return (
        <button {...props} className= 'btn btn-cancel'>
                Cancel Rent
        </button>
    );
};

export default Cancel;