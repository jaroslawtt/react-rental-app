import React, {ChangeEventHandler, FC, useState} from 'react';
import Caption from "./Caption";
import '../styles/Appartments.css'
import { IApartment } from "../interfaces";
import RentCard from "./RentCard";
import {useSort} from "../hooks/sort-hooks";

interface ApartmentsProps {
    apartments: Array<IApartment>;
}


const Apartments: FC<ApartmentsProps> = ({apartments}) => {
    const {sortType, setSortType} = useSort(apartments)
    return (
        <div className='apartments'>
            <div className='apartments-control-block'>
                <Caption>🏠 Available Apartments ({apartments.length})</Caption>
                <div className='sort-control'>
                    Sort by:
                    <select id='sort' defaultValue={sortType} onChange={(evt) => {
                        setSortType(evt.target.value);
                    }}>
                        <option value='highest price'>Price: Highest price</option>
                        <option value='lowest price'>Price: Lowest price</option>
                    </select>
                </div>
            </div>
            {apartments.map(apartment => <RentCard {...apartment}/>) }
        </div>
    );
};

export default Apartments;