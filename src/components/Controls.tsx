import React, {FC} from 'react';
import '../styles/Controls.css'

interface ControlsProps {
    children: React.ReactNode | React.ReactElement,
}


const Controls: FC<ControlsProps> = (props) => {
    return (
        <div className= 'controls'>
            {props.children}
        </div>
    );
};

export default Controls;