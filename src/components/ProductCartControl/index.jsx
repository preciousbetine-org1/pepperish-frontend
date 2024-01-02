import { Link } from 'react-router-dom';
import Styles from './styles.module.css';
import PropTypes from 'prop-types';

function ProductCartControl({
  quantity,
  weight,
  cost,
  subTotal,
  onChange,
}) {
  return (
    <div className={Styles.container}>
      <div className={Styles['product-details']}>
        <h3>ADD TO CART</h3>
        <ul>
          {
            weight && (
              <li>
                <p>Net weight:</p>
                <p>{weight}</p>
              </li>
            )
          }
          {
            cost && (
              <li>
                <p>Unit cost:</p>
                <p>{cost}</p>
              </li>
            )
          }
          {
            subTotal && (
              <li>
                <p>Sub total:</p>
                <p>{subTotal}</p>
              </li>
            )
          }
        </ul>
      </div>
      <div className={Styles['cart-controls']}>
        <div className={Styles['amount-controls']}>
          <button type="button" onClick={() => (quantity > 0) ? onChange(quantity - 1) : null}>-</button>
          <span>{quantity}</span>
          <button type="button" onClick={() => onChange(quantity + 1)}>+</button>
        </div>
        <Link to="/cart">
          <button type="button">View cart</button>
        </Link>
      </div>
    </div>
  )
}

ProductCartControl.propTypes = {
  weight: PropTypes.string,
  cost: PropTypes.string,
  subTotal: PropTypes.string,
  quantity: PropTypes.number,
  onChange: PropTypes.func,
};

ProductCartControl.defaultProps = {
  weight: null,
  cost: null,
  subTotal: null,
  quantity: 0,
  onChange: () => {},
};

export default ProductCartControl;
