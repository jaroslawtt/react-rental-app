import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ApartmentState, IApartment} from "../../interfaces";
import { apartments } from "../../api";

const initialState: ApartmentState = [...apartments];

const apartmentSlice = createSlice({
    name: 'apartments',
    initialState,
    reducers: {
        addApartment(state, action: PayloadAction<IApartment>){
            state.push(action.payload);
        },
        deleteApartment(state, action: PayloadAction<string>){
            state = state.filter(apartment => apartment.id !== action.payload);
        },
        toggleApartment(state, action: PayloadAction<string>){
            state.forEach((apartment,index, array) => {
                if(apartment.id === action.payload){
                    array[index] = {
                        ...apartment,
                        rented: !apartment.rented,
                    }
                }
            })
        }
    }
});

export default apartmentSlice;