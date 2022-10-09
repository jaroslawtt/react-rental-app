import React, {FC} from 'react';

interface InputProps {
    type: string,
    required?: boolean,
}

const Input: FC<InputProps> = (props) => {
    return (
        <input {...props}/>
    );
};

export default Input;