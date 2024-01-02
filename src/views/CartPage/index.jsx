import { useContext } from 'react';
import Footer from '../../components/Footer'
import { updateProductQuantity, updateCustomPackageQuantity } from '../../data'
import Styles from './styles.module.css'
import applicationContext from '../../data/applicationContext';
import { Link } from 'react-router-dom';

function CartPage() {
  const app = useContext(applicationContext);

  const product1 = app.products[0];
  const product2 = app.products[1];
  const customPackage = app.customPackage;

  const itemsInCustomPackage = app.items.filter((item) => item.quantity > 0);

  const customPackagePrice = itemsInCustomPackage.reduce(
    (total, item) => total + item.unitPrice * item.quantity,
    0
  ) * customPackage.quantity;

  const updateProduct1Quantity = (newQuantity) => {
    updateProductQuantity(product1.id, newQuantity);
    app.setProducts([
      {
      ...product1,
      quantity: newQuantity,
    },
    product2]);
  };

  const updateProduct2Quantity = (newQuantity) => {
    updateProductQuantity(product2.id, newQuantity);
    app.setProducts([
      product1,
      {
      ...product2,
      quantity: newQuantity,
    }]);
  };

  const doUpdateCustomPackageQuantity = (newQuantity) => {
    updateCustomPackageQuantity(newQuantity);
    app.setCustomPackage({
      ...customPackage,
      quantity: newQuantity,
    });
  };

  return (
    <section className={Styles['cart-page']}>
      <div className={Styles['page-content']}>
        <div>
          <span className={`hidden ${Styles['sub-title']}`}>Preview</span>
          <h2 className="hidden">ITEMS IN YOUR CART</h2>
        </div>

        <div className={Styles['cart-items']}>
        {
            product1?.quantity > 0 ? (
              <div className={`hidden ${Styles['cart-item']}`}>
                <img alt="" src="https://i.ibb.co/nrt7bZh/pepcool.png" />
                <div className={Styles['item-details']}>
                  <span className={Styles['item-name']}>Pepcool</span>
                  <div className={Styles['item-quantity']}>
                    <button type="button" onClick={() =>
                      (product1.quantity > 0) ? updateProduct1Quantity(product1.quantity - 1) : null}
                    >
                      -
                    </button>
                    <span>{product1.quantity}</span>
                    <button type="button" onClick={() =>
                      updateProduct1Quantity(product1.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className={Styles['total-price']}>
                  TOTAL:
                  {' '}
                  <span>
                    N
                    {' '}
                    {product1.unitPrice * product1.quantity}
                  </span>
                </div>
              </div>
            ) : null
          }
          {
            product2?.quantity > 0 ? (
              <div className={`hidden ${Styles['cart-item']}`}>
                <img alt="" src="https://i.ibb.co/9V4H8PR/pepchill.png" />
                <div className={Styles['item-details']}>
                  <span className={Styles['item-name']}>Pepchill</span>
                  <div className={Styles['item-quantity']}>
                    <button type="button" onClick={() =>
                      (product2.quantity > 0) ? updateProduct2Quantity(product2.quantity - 1) : null}
                    >
                      -
                    </button>
                    <span>{product2.quantity}</span>
                    <button type="button" onClick={() =>
                      updateProduct2Quantity(product2.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className={Styles['total-price']}>
                  TOTAL:
                  {' '}
                  <span>
                    N
                    {' '}
                    {product2.unitPrice * product2.quantity}
                  </span>
                </div>
              </div>
            ) : null
          }
          {
            customPackage.quantity > 0 ? (
              <div className={Styles['custom-package-cart-item']}>
                <div className={`hidden ${Styles['cart-item']} ${Styles['custom-package']}`}>
                  <img alt="" src="https://i.ibb.co/k4mR4zf/custom-package.png" />
                  <div className={Styles['item-details']}>
                    <span className={Styles['item-name']}>Your custom package</span>
                    <div className={Styles['item-quantity']}>
                      <button type="button" onClick={() => {
                        if (customPackage.quantity > 0) doUpdateCustomPackageQuantity(customPackage.quantity - 1)
                      }}>
                        -
                      </button>
                      <span>{customPackage.quantity}</span>
                      <button type="button" onClick={() => {
                        doUpdateCustomPackageQuantity(customPackage.quantity + 1)
                      }}>
                        +
                      </button>
                    </div>
                  </div>
                  <div className={Styles['total-price']}>
                    TOTAL:
                    {' '}
                    <span>
                      N
                      {' '}
                      {customPackagePrice}
                    </span>
                  </div>
                </div>
                <div className={`hidden ${Styles['custom-package-content']}`}>
                  <h3>CONTENT</h3>
                  <ul>
                    {
                      itemsInCustomPackage.map((item) => (
                        <li key={item.id}>
                          {item.name}
                          {' '}
                          x
                          {' '}
                          {item.quantity}
                        </li>
                      ))
                    }
                  </ul>
                  <Link to="/custom-package">Edit package content</Link>
                </div>
              </div>
            ) : null
          }
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default CartPage
