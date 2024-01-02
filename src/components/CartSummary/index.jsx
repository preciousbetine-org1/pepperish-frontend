import { Link } from 'react-router-dom';
import Styles from './styles.module.css';
import { useContext } from 'react';
import applicationContext from '../../data/applicationContext';

function CartSummary() {
  const app = useContext(applicationContext);
  const items = app.items;
  const products = app.products;
  const customPackage = app.customPackage;

  const productsInCart = products.filter((product) => product.quantity > 0);
  const itemsInCustomPackage = items.filter((item) => item.quantity > 0);

  const productsInCartRows = productsInCart.map((product) => (
    <tr key={product.id}>
      <td>{product.name}</td>
      <td>{product.quantity}</td>
      <td>N {product.unitPrice}</td>
      <td>{product.weight * product.quantity} g</td>
      <td>N {product.unitPrice * product.quantity}</td>
    </tr>
  ));

  const itemsInCustomPackagePrice = itemsInCustomPackage.reduce(
    (total, item) => total + item.unitPrice * item.quantity,
    0
  );

  const itemsInCustomPackageWeight = itemsInCustomPackage.reduce(
    (total, item) => total + item.weight * item.quantity,
    0
  );

  const customPackageRow = itemsInCustomPackagePrice && customPackage.quantity ? (
    <tr key="customPackage">
      <td>Your custom package</td>
      <td>{customPackage.quantity}</td>
      <td>N {itemsInCustomPackagePrice} </td>
      <td>{itemsInCustomPackageWeight * customPackage.quantity} g</td>
      <td>N {itemsInCustomPackagePrice * customPackage.quantity}</td>
    </tr>
  ): null;

  const productsInCartWeight = productsInCart.reduce(
    (total, product) => total + product.weight * product.quantity,
    0
  );

  const totalWeight = productsInCartWeight + (itemsInCustomPackageWeight * customPackage.quantity);

  const productsInCartPrice = productsInCart.reduce(
    (total, product) => total + product.unitPrice * product.quantity,
    0
  );

  const totalPrice = productsInCartPrice + (itemsInCustomPackagePrice * customPackage.quantity);

  return (
    <div className={Styles['cart-summary']}>
      <h3>SUMMARY</h3>

      <div className={Styles['table-container']}>
        <table>
          <thead>
            <tr>
              <th>Package name</th>
              <th>QTY</th>
              <th>Unit Price</th>
              <th>Total weight</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {productsInCartRows}
            {customPackageRow}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3">Sub Total</td>
              <td>{Number(totalWeight).toLocaleString()} g</td>
              <td>N {Number(totalPrice).toLocaleString()}</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <Link to="/checkout">
        <button type="button">Proceed to checkout</button>
      </Link>
    </div>
  )
}

export default CartSummary
