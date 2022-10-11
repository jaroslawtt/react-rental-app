import React, {FC} from 'react';
import '../styles/Button.css'

interface SubmitProps {
}

const Submit: FC<SubmitProps> = (props) => {
    return (
        <button className='btn btn-submit'>
            Submit form
        </button>
    );
};

export default Submit;