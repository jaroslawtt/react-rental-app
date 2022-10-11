import { useState } from "react";
import {IApartment} from "../interfaces";


export const useSort = (apartments: Array<IApartment>) => {
    const [sortType, setSortType] = useState(`highest price`);
    if(sortType === `highest price`) apartments.sort((apartment1, apartment2) => {
        if(apartment1.price < apartment2.price) return 1;
        else if(apartment1.price > apartment2.price) return -1;
        else return 0;
    });
    if(sortType === `lowest price`) apartments.sort((apartment1, apartment2) => {
        if(apartment1.price > apartment2.price) return 1;
        else if(apartment1.price < apartment2.price) return -1;
        else return 0;
    });
    return {sortType, setSortType}
};