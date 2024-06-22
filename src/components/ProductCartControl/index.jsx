import { Link } from 'react-router-dom';
import Styles from './styles.module.css';
import PropTypes from 'prop-types';

function ProductCartControl({
  quantity,
  cost,
  onChange,
}) {
  return (
    <ul className={Styles.container}>
      <li>
        &#8358;
        {' '}
        {cost}
        <br />
        per pack
      </li>

      <li>
        <button onClick={() =>
          quantity > 0 && onChange(quantity - 1)
        }>-</button>
      </li>

      <li>
        <p>{quantity}</p>
      </li>

      <li>
        <button onClick={() => onChange(quantity + 1)}>+</button>
      </li>

      <li>
        <Link to="/cart">
          Checkout
        </Link>
      </li>
    </ul>
  )
}

ProductCartControl.propTypes = {
  quantity: PropTypes.number,
  onChange: PropTypes.func,
  cost: PropTypes.number.isRequired,
};

ProductCartControl.defaultProps = {
  quantity: 0,
  onChange: () => {},
};

export default ProductCartControl;
