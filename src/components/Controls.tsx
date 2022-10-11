import React, {FC} from 'react';
import Delete from "../UI/Delete";
import RentButton from "../UI/RentButton";
import '../styles/Controls.css'

interface ControlsProps {
    children: React.ReactNode | React.ReactElement,
}


const Controls: FC<ControlsProps> = () => {
    return (
        <div className= 'controls'>
            <RentButton/>
            <Delete/>
        </div>
    );
};

export default Controls;