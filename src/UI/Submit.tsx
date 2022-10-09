import React, {FC} from 'react';
import '../styles/Submit.css'

interface SubmitProps {
    children: React.ReactElement | React.ReactNode
}

const Submit: FC<SubmitProps> = (props) => {
    return (
        <button className='btn-submit'>
            {props.children}
        </button>
    );
};

export default Submit;