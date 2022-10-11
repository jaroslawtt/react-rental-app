import React from 'react';
import Caption from "./Caption";
import '../styles/RentalForm.css'
import Input from "../UI/Input";
import Submit from "../UI/Submit";

const RentalForm = () => {
    return (
        <div className='rental-form-block'>
            <Caption>🤑 Create a new rent</Caption>
            <form className='rental-form'>
                <Input type={'text'} id='name' placeholder={'Ex. Flat in the city center'} required={true}/>
                <Input type={'number'} id={'days'} required={true} placeholder='4'/>
                <select className= 'days-input' id='days'>
                    <option value='3+' selected={true}>3+</option>
                </select>
                <Input type={'number'} id={'price'} required={true} placeholder={'99.00'}/>
                <Submit/>
            </form>
        </div>
    );
};

export default RentalForm;