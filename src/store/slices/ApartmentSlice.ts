import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ApartmentState, IApartment} from "../../interfaces";
import { apartments } from "../../api";

const initialState: ApartmentState = {
    apartments: [...apartments],
}

export const apartmentSlice = createSlice({
    name: 'apartments',
    initialState,
    reducers: {
        addApartment(state, action: PayloadAction<IApartment>){
            state.apartments.push(action.payload);
        },
        deleteApartment(state, action: PayloadAction<string>){
            state.apartments = state.apartments.filter(apartment => apartment.id !== action.payload);
        },
        toggleApartment(state, action: PayloadAction<string>){
            state.apartments.forEach((apartment,index, array) => {
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
