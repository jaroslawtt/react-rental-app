import React, {FC} from 'react';
import classes from '../styles/Header.module.css'


interface HeaderProps {
    children: React.ReactNode | React.ReactElement,
}

const Header: FC<HeaderProps> = (props) => {
    return (
        <div className={classes.header}>
            {props.children}
        </div>
    );
};

export default Header;