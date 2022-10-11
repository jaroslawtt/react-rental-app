import React, {FC} from 'react';
import '../styles/Rent-Card.css'
import Cancel from "../UI/Cancel";


interface RentCardProps {

}


const RentCard: FC<RentCardProps> = (props) => {
    return (
        <div className= 'rent-card'>
                <div>
                    Sun Hotel / 1 bed / 2 days / $220
                </div>
                <Cancel/>
        </div>
    );
};

export default RentCard;