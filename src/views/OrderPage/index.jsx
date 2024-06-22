import { useContext } from 'react';
import Footer from '../../components/Footer'
import ProductCartControl from '../../components/ProductCartControl'
import { updateProductQuantity } from '../../data'
import Styles from './styles.module.css'
import applicationContext from '../../data/applicationContext';
import Header from '../../components/Header';
import pepcool from '../../assets/pepcool.png';
import pepchill from '../../assets/pepchill.png';

function OrderPage() {
  const app = useContext(applicationContext);

  const product1 = app.products[0];
  const product2 = app.products[1];

  const updateProduct1Quantity = (newQuantity) => {
    updateProductQuantity(product1.id, newQuantity);
    app.setProducts([{
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
    <div className={Styles['order-page']}>
      <Header />
      <h1>Order now!</h1>
      <section className={Styles['product-section']}>
        <ul className={Styles.menu}>
          <li className={Styles['product-card']}>
            <div className={Styles['product-card-left']}>
              <img src={pepcool} />
              <h3>Pepcool</h3>
            </div>
            <div>
              <h4>Content</h4>
              <ul className={Styles['product-content']}>
                <li>1 plate of ponmo</li>
                <li>1 can of coke</li>
              </ul>
              <div className={Styles['product-details']}>
                <div className={Styles['price-tag']}>
                  <span className={Styles.amount}>&#8358; 1,500</span>
                  <span>PER PACK</span>
                </div>
              </div>
            </div>
            <ProductCartControl
              quantity={product1.quantity}
              cost={1500}
              onChange={updateProduct1Quantity}
            />
          </li>
          <li className={Styles['product-card']}>
            <div className={Styles['product-card-left']}>
              <img src={pepchill} />
              <h3>Pepchill</h3>
            </div>
            <div>
              <h4>Content</h4>
              <ul className={Styles['product-content']}>
                <li>1 plate of ponmo</li>
                <li>2 cans of heineken</li>
              </ul>
              <div className={Styles['product-details']}>
                <div className={Styles['price-tag']}>
                  <span className={Styles.amount}>&#8358; 2,000</span>
                  <span>PER PACK</span>
                </div>
              </div>
            </div>
            <ProductCartControl
              quantity={product2.quantity}
              cost={2000}
              onChange={updateProduct2Quantity}
            />
          </li>
        </ul>
      </section>


      <Footer />
    </div>
  )
}

export default OrderPage
