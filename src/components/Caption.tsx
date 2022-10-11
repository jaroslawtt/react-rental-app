import React, {FC} from 'react';
import '../styles/Caption.css'


interface CaptionProps {
    children: React.ReactNode | React.ReactElement,
}

const Caption: FC<CaptionProps> = (props) => {
    return (
        <div className = 'caption'>
            {props.children}
        </div>
    );
};

export default Caption;