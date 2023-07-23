import './CartItem.css';

const CartItem = (props) => {
  const price = `$${props.price}`;

  return (
    <li className="cart-items">
      <div>
        <h2>{props.name}</h2>
        <div className="sumary">
          <span className="prices">{price}</span>
          <span className="amounts">x {props.amount}</span>
        </div>
      </div>
      <div className="action">
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
