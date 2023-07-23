import { Fragment } from "react";

import mealImage from '../../assets/meals.jpg';
import CartButton from "./CartButton";
import  './Header.css';

const Header =(props) => {
    return (
        <Fragment>
            <header className="header">
                <h1>Hot Chill</h1>
                <CartButton onClick={props.onShowCart} />
            </header>
            <div className="main-image">
                <img src={mealImage} alt="A table full of food!" />
            </div>

        </Fragment>
    );
        
};

export default Header;