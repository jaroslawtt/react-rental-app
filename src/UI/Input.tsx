import React, {FC} from 'react';
import '../styles/Input.css'


interface InputProps {
    type: string,
    required?: boolean,
    placeholder?: string,
    id: string,
}

const Input: FC<InputProps> = (props) => {
    return (
        <input className = 'input' {...props}/>
    );
};

export default Input;