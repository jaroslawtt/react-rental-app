

export interface IApartment {
    id: string,
    name: string,
    rooms: number,
    days: string,
    price: number,
    rented: boolean,
}

export interface ApartmentState {
    apartments: Array<IApartment>
}