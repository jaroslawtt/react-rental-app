

export interface IApartment {
    id: string,
    name: string,
    rooms: string,
    days: number,
    price: number,
    rented: boolean,
}

export interface ApartmentState {
    apartments: Array<IApartment>
}