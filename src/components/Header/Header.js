import React from "react";
import "./Header.module.css"
import classes from './Header.module.css'

const Header = () => {
    return (
        <header className={classes.header}>
            <img
                src={'https://i.pinimg.com/originals/a4/e0/8c/a4e08c9d154ad706a058a7f7e915327d.jpg'}/>
        </header>
    );
}

export default Header;