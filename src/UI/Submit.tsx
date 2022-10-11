import React, {FC} from 'react';
import '../styles/Submit.css'

interface SubmitProps {
    children: React.ReactElement | React.ReactNode,
    onClick: (evt: React.MouseEvent<HTMLButtonElement>)=>void,
}

const Submit: FC<SubmitProps> = (props) => {
    return (
        <button {...props} className='btn-submit'>
            {props.children}
        </button>
    );
};

export default Submit;