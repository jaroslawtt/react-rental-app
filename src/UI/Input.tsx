import React, {FC} from 'react';
import '../styles/Input.css'


interface InputProps {
    type: string,
    required?: boolean,
    placeholder?: string,
    id: string,
    value?: string | number,
    maxLength?: number,
    onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void,
    min?: number,
}

const Input: FC<InputProps> = (props) => {
    return (
        <input {...props} className = 'input' {...props}/>
    );
};

export default Input;