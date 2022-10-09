import React, {FC} from 'react';
import '../styles/RentForm.css'
import Submit from "../UI/Submit";

interface RentFormProps {

}

const RentForm:FC<RentFormProps> = (props) => {
    return (
        <form className='rent-form'>
            <Submit>Submit rent</Submit>
        </form>
    );
};

export default RentForm;