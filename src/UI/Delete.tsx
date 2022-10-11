import React, { FC } from 'react';
import '../styles/Button.css'
import {ButtonInterface} from "../interfaces/Button.interface";

interface DeleteButtonProps extends ButtonInterface{

}

const Delete: FC<DeleteButtonProps> = (props) => {
    return (
        <button {...props} className= 'btn btn-delete'>
            Delete
        </button>
    );
};

export default Delete;