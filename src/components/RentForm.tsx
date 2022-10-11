import React, {FC} from 'react';
import '../styles/RentForm.css'
import Submit from "../UI/Submit";
import Input from "../UI/Input";

interface RentFormProps {

}

const RentForm:FC<RentFormProps> = (props) => {
    return (
        <form className='rent-form'>
            <div className='input-block'>
                <label htmlFor='name'>Title</label>
                <Input type={'text'} required={true} placeholder= 'Ex. Flat in the city center' id="name"></Input>
            </div>
            <div className='input-block'>
                <label htmlFor='days'>Days</label>
                <Input type={'Number'} required={true} placeholder= '4' id="days"></Input>
            </div>
            <div className='input-block'>
                <label htmlFor='beds'>Beds</label>
                <select className={'form-select'} id={'beds'}>
                    <option value={'3+'} selected={true}>3+</option>
                    <option></option>
                    <option></option>
                    <option></option>
                </select>
            </div>
            <div className='input-block'>
                <label htmlFor='days'>Rent Price</label>
                <Input type={'Number'} required={true} placeholder= '99.00' id="days"/>
            </div>
            <Submit onClick={(evt) => {
                evt.preventDefault();
            }}>Submit rent</Submit>
        </form>
    );
};

export default RentForm;