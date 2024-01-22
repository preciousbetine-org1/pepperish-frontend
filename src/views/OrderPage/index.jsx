import { useContext, useRef, useState } from 'react';
import Footer from '../../components/Footer'
import ProductCartControl from '../../components/ProductCartControl'
import { updateProductQuantity } from '../../data'
import Styles from './styles.module.css'
import applicationContext from '../../data/applicationContext';
import Header from '../../components/Header';
import { SwapHoriz } from '@mui/icons-material';

function OrderPage() {
  const app = useContext(applicationContext);
  const productsRef = useRef(null);
  const [currentProduct, setCurrentProduct] = useState(0);

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

  const switchProduct = () => {
    if (currentProduct === 1) {
      productsRef.current.scrollLeft = 0;
    } else {
      productsRef.current.scrollLeft = productsRef.current.scrollWidth;
    }
    setCurrentProduct(currentProduct === 0 ? 1 : 0);
  }

  return (
    <div className={Styles['order-page']}>
      <Header sticky boxShadow backgroundColor="white" />

      <div className={Styles.products} ref={productsRef}>
        <div className={`${Styles.product} ${currentProduct === 1 ? Styles.dim : ''}`}>
          <div className={Styles['product-heading']}>
            <div>
              <span className={Styles['sub-title']}>Savor and refresh with</span>
              <h2>PEPCOOL</h2>
            </div>
            <div className={Styles['price-tag']}>
              N
              {' '}
              {product1.unitPrice}
            </div>
          </div>
          <p>
            Whether you&apos;re looking for a quick and tasty snack or a fuss-free meal,
            our Ponmo Plate and Coke duo is the answer. Indulge your cravings with this perfect
            combination, crafted for those who appreciate the simple joy of good food
            and great refreshment.
          </p>
          <h3>CONTAINED IN THIS PACKAGE</h3>
          <div className={Styles['product-contents']}>
            <div className={Styles['product-content']}>
              <img alt="" src="https://i.ibb.co/jVFwnVp/plate-of-ponmo.png" />
              <span className={Styles['product-name']}>1x plate of ponmo</span>
            </div>
            <div className={Styles['product-content']}>
              <img alt="" src="https://i.ibb.co/4fGmjQS/can-of-coke.png" />
              <span className={Styles['product-name']}>1x can of coke</span>
            </div>
          </div>

          <div>
            <ProductCartControl
              weight={`${product1.weight}g`}
              cost={`N ${product1.unitPrice}`}
              subTotal={`N ${product1.unitPrice * product1.quantity}`}
              quantity={product1.quantity}
              onChange={updateProduct1Quantity}
            />
          </div>
        </div>

        <div className={Styles.divider}>
          <button onClick={switchProduct}>
            <SwapHoriz />
          </button>
        </div>

        <div className={`${Styles.product} ${currentProduct === 0 ? Styles.dim : ''}`}>
          <div className={Styles['product-heading']}>
            <div>
              <span className={Styles['sub-title']}>Enjoy a tasty twosome with</span>
              <h2>PEPCHILL</h2>
            </div>
            <div className={Styles['price-tag']}>
              N
              {' '}
              {product2.unitPrice}
            </div>
          </div>
          <p>
            Enjoy a delicious combo with our savory ponmo plate
            and two refreshing cans of heineken. Bite into the tender
            goodness of perfectly seasoned ponmo while sipping on
            the cool fizz of heineken. It&apos;s a simple, tasty treat
            for any time of the day.
          </p>
          <h3>CONTAINED IN THIS PACKAGE</h3>
          <div className={Styles['product-contents']}>
            <div className={Styles['product-content']}>
              <img alt="" src="https://i.ibb.co/jVFwnVp/plate-of-ponmo.png" />
              <span className={Styles['product-name']}>1x plate of ponmo</span>
            </div>
            <div className={Styles['product-content']}>
              <img alt="" src="https://i.ibb.co/zxFnsm9/cans-of-heineken.png" />
              <span className={Styles['product-name']}>2x cans of heineken</span>
            </div>
          </div>

          <div>
            <ProductCartControl
              weight={`${product2.weight}g`}
              cost={`N ${product2.unitPrice}`}
              subTotal={`N ${product2.unitPrice * product2.quantity}`}
              quantity={product2.quantity}
              onChange={updateProduct2Quantity}
            />
          </div>
        </div>

      </div>

      <Footer />
    </div>
  )
}

export default OrderPage
