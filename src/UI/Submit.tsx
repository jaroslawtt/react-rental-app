import React, {FC} from 'react';
import '../styles/Button.css'
import {ButtonInterface} from "../interfaces/Button.interface";

interface SubmitProps extends ButtonInterface{
}

const Submit: FC<SubmitProps> = (props) => {
    return (
        <button {...props} className='btn btn-submit'>
            Submit form
        </button>
    );
};

export default Submit;