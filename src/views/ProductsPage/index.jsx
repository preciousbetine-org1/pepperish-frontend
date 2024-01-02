import { useContext } from 'react';
import Footer from '../../components/Footer'
import ProductCartControl from '../../components/ProductCartControl'
import { updateProductQuantity } from '../../data'
import Styles from './styles.module.css'
import applicationContext from '../../data/applicationContext';

function ProductsPage() {
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
    <section className={Styles['products-page']}>
      <div className={Styles.product}>
        <div className={Styles['product-heading']}>
          <div>
            <span className={`hidden ${Styles['sub-title']}`}>Savor and refresh with</span>
            <h2 className="hidden">PEPCOOL</h2>
          </div>
          <div className={`hidden ${Styles['price-tag']}`}>
            N
            {' '}
            {product1.unitPrice}
          </div>
        </div>
        <p className="hidden">
          Whether you&apos;re looking for a quick and tasty snack or a fuss-free meal,
          our Ponmo Plate and Coke duo is the answer. Indulge your cravings with this perfect
          combination, crafted for those who appreciate the simple joy of good food
          and great refreshment.
        </p>
        <h3 className="hidden">CONTAINED IN THIS PACKAGE</h3>
        <div className={Styles['product-contents']}>
          <div className={Styles['product-content']}>
            <img className="hidden" alt="" src="https://i.ibb.co/4S8RRN9/plate-of-ponmo.png" />
            <span className={`left-hidden ${Styles['product-name']}`}>1x plate of ponmo</span>
          </div>
          <div className={Styles['product-content']}>
            <img className="hidden" alt="" src="https://i.ibb.co/3YBkhjX/can-of-coke.png" />
            <span className={`left-hidden ${Styles['product-name']}`}>1x can of coke</span>
          </div>
        </div>

        <div className="hidden">
          <ProductCartControl
            weight={`${product1.weight}g`}
            cost={`N ${product1.unitPrice}`}
            subTotal={`N ${product1.unitPrice * product1.quantity}`}
            quantity={product1.quantity}
            onChange={updateProduct1Quantity}
          />
        </div>
      </div>

      <hr />

      <div className={Styles.product}>
        <div className={Styles['product-heading']}>
          <div>
            <span className={`hidden ${Styles['sub-title']}`}>Enjoy a tasty twosome with</span>
            <h2 className="hidden">PEPCHILL</h2>
          </div>
          <div className={`hidden ${Styles['price-tag']}`}>
            N
            {' '}
            {product2.unitPrice}
          </div>
        </div>
        <p className="hidden">
          Enjoy a delicious combo with our savory ponmo plate
          and two refreshing Pepsi bottles. Bite into the tender
          goodness of perfectly seasoned ponmo while sipping on
          the cool fizz of Pepsi. It&apos;s a simple, tasty treat
          for any time of the day.
        </p>
        <h3 className="hidden">CONTAINED IN THIS PACKAGE</h3>
        <div className={Styles['product-contents']}>
          <div className={Styles['product-content']}>
            <img className="hidden" alt="" src="https://i.ibb.co/4S8RRN9/plate-of-ponmo.png" />
            <span className={`left-hidden ${Styles['product-name']}`}>1x plate of ponmo</span>
          </div>
          <div className={Styles['product-content']}>
            <img className="hidden" alt="" src="https://i.ibb.co/7YpssWQ/pepsi-bottles.png" />
            <span className={`left-hidden ${Styles['product-name']}`}>2x bottles of pepsi</span>
          </div>
        </div>

        <div className="hidden">
          <ProductCartControl
            weight={`${product2.weight}g`}
            cost={`N ${product2.unitPrice}`}
            subTotal={`N ${product2.unitPrice * product2.quantity}`}
            quantity={product2.quantity}
            onChange={updateProduct2Quantity}
          />
        </div>
      </div>

      <Footer />
    </section>
  )
}

export default ProductsPage
