import { useContext } from 'react'
import Styles from './styles.module.css'
import notie from 'notie';
import 'notie/dist/notie.css';
import applicationContext from '../../../data/applicationContext'

function CheckoutSection() {
  const app = useContext(applicationContext);
  const items = app.items;
  const products = app.products;
  const customPackage = app.customPackage;

  const productsInCart = products.filter((product) => product.quantity > 0);
  const itemsInCustomPackage = items.filter((item) => item.quantity > 0);

  const productsInCartPrice = productsInCart.reduce(
    (total, product) => total + product.unitPrice * product.quantity,
    0
  );

  const itemsInCustomPackagePrice = itemsInCustomPackage.reduce(
    (total, item) => total + item.unitPrice * item.quantity,
    0
  );

  const totalPrice = productsInCartPrice + (itemsInCustomPackagePrice * customPackage.quantity);

  const placeOrder = (event) => {
    event.preventDefault();
    notie.alert({ type: 'success', text: 'We are no longer accepting orders. Sorry for the inconvenience!', time: 5 });
  };

  return (
    <section className={Styles['checkout-section']}>
      <form className={Styles['page-content']} onSubmit={placeOrder}>
        <div className={Styles['checkout-step']}>
          <span className={Styles['sub-title']}>Checkout</span>
          <h2>ENTER YOUR DETAILS</h2>

          <div className={Styles['form-groups']}>
            <div className={Styles['form-group']}>
              <label htmlFor="firstName">First name</label>
              <input id="firstName" type="text" required />
            </div>
            <div className={Styles['form-group']}>
              <label htmlFor="lastName">Last name</label>
              <input id="lastName" type="text" required />
            </div>
            <div className={Styles['form-group']}>
              <label htmlFor="phone">Phone number</label>
              <input id="phone" type="text" required />
            </div>
            <div className={Styles['form-group']}>
              <label htmlFor="email">Email address</label>
              <input id="email" type="email" />
            </div>
          </div>
        </div>

        <div className={Styles['checkout-step']}>
          <h2>WHERE ARE YOU LOCATED?</h2>

          <p>
            Delivery is available to only select locations in Lagos.
            We plan to deliver to more locations as time goes by.
            The locations currently serviced are areas in the Alimosho
            and Ikeja LGA of Lagos State. Orders made from locations
            outside these zones won&apos;t be delivered
            (Packages can be picked up from our physical store or you will
            get a refund after three working days).
          </p>

          <div className={Styles['form-groups']}>
            <div className={Styles['form-group']}>
              <label htmlFor="lga">LGA</label>
              <select id="lga" required>
                <option value="Alimosho">Alimosho</option>
                <option value="Ikeja">Ikeja</option>
              </select>
            </div>
            <div className={Styles['form-group']}>
              <label htmlFor="street">Street name</label>
              <input id="street" type="text" required />
            </div>
            <div className={Styles['form-group']}>
              <label htmlFor="house">House number</label>
              <input id="house" type="text" required />
            </div>
          </div>
        </div>

        <div className={Styles['checkout-step']}>
          <h2>MAKE PAYMENT</h2>

          <p>
            Payments are handled by Paystack.
            This helps to route payments through the most optimal channels,
            ensuring a higher transaction success rate.
          </p>

          <div className={Styles['checkout-summary']}>
            <div>
              <span>SUB TOTAL:</span>
              <span>
                N
                {' '}
                {Number(totalPrice).toLocaleString()}
              </span>
            </div>
            <div>
              <span>DELIVERY FEE:</span>
              <span>N 0</span>
            </div>
            <div>
              <span>TOTAL:</span>
              <span>
                N
                {' '}
                {Number(totalPrice).toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        <button type="submit">PAY</button>
      </form>
    </section>
  )
}

export default CheckoutSection
