import { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/Cart-context';
import './CartButton.css';

const CartButton =(props) =>{
    const cartCtx = useContext(CartContext);

    const numberOfCartItem = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    return(
    <button className="button" onClick={props.onClick}>
        <span className="icon">
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className="badge" >{numberOfCartItem}
        </span>
    </button>
    );
};

export default CartButton;