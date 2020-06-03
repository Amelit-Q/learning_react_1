import React from "react";
import "./Header.module.css"
import classes from './Header.module.css'
import { NavLink } from "react-router-dom";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img
                src={'https://i.pinimg.com/originals/a4/e0/8c/a4e08c9d154ad706a058a7f7e915327d.jpg'} />

            <div className={classes.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    )
}

export default Header;