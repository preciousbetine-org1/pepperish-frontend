import { useContext } from 'react';
import Footer from '../../components/Footer'
import { updateProductQuantity } from '../../data'
import Styles from './styles.module.css'
import applicationContext from '../../data/applicationContext';
import Header from '../../components/Header';
import CheckoutSection from './CheckoutSection';
import pepcool from '../../assets/pepcool.png';
import pepchill from '../../assets/pepchill.png';

function CartPage() {
  const app = useContext(applicationContext);

  const product1 = app.products[0];
  const product2 = app.products[1];

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

  return (
    <div className={Styles['cart-page']}>
      <Header sticky boxShadow backgroundColor="white" />

      <div className={Styles.sections}>
        <div className={Styles['cart-section']}>
          <div>
            <h2>Items in your cart</h2>
          </div>

          <div className={Styles['cart-items']}>
          {
              product1?.quantity > 0 ? (
                <div className={Styles['cart-item']}>
                  <img alt="Pepcool" src={pepcool} />
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
                <div className={Styles['cart-item']}>
                  <img alt="" src={pepchill} />
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
          </div>
        </div>

        <div className={Styles['checkout-section']}>
          <CheckoutSection />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default CartPage
