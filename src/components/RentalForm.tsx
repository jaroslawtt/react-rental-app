import React, {ChangeEvent, FormEvent, useState} from 'react';
import Caption from "./Caption";
import '../styles/RentalForm.css'
import Input from "../UI/Input";
import Submit from "../UI/Submit";
import { useAppDispatch } from "../hooks";
import { apartmentSlice } from "../store/slices";

const RentalForm = () => {
    const dispatch = useAppDispatch();
    const [formValue, setFormValue] = useState({
        name: '',
        days: 0,
        rooms: '3+',
        price: 0,
    });
    const changeHandler = (evt: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormValue({
            ...formValue,
            [evt.target.id]: evt.target.value,
        });
    }
    const submitHandler = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        dispatch(apartmentSlice.actions.addApartment({
            id: `${Date.now()}`,
            ...formValue,
            rented: false,
        }));
    }
    return (
        <div className='rental-form-block'>
            <Caption>🤑 Create a new rent</Caption>
            <form className='rental-form' onSubmit={submitHandler}>
                <Input type={'text'} maxLength={99} value={formValue.name} id='name' onChange={(evt) => {
                    changeHandler(evt);
                }} placeholder={'Ex. Flat in the city center'} required={true}/>
                <Input type={'number'} id={'days'} min={0} value={formValue.days} onChange={(evt) => {
                    changeHandler(evt);
                }} required={true} placeholder='4'/>
                <select onChange={(evt) => {
                    changeHandler(evt);
                }} className= 'days-input' id='rooms' defaultValue={'3+'}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3+'>3+</option>
                </select>
                <Input type={'number'} id={'price'} min={0} onChange={(evt) => {
                    changeHandler(evt);
                }} required={true} placeholder={'99.00'}/>
                <Submit/>
            </form>
        </div>
    );
};

export default RentalForm;