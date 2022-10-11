import React, {FC} from 'react';
import classes from '../styles/Header.module.css'


interface HeaderProps {

}

const Header: FC<HeaderProps> = (props) => {
    return (
        <div className={classes.header}>
            Apartments Marketplace
        </div>
    );
};

export default Header;