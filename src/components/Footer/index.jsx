import { Link } from 'react-router-dom';
import Styles from './styles.module.css';

function Footer() {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.left}>

        <Link to="/" className={Styles['favicon_logo']}>
          <img className={Styles.favicon} src="https://i.im.ge/2022/08/31/OEt2Z4.favicon.png" />
          <img className={Styles.logo} src="https://i.im.ge/2022/08/31/OEtaGP.logo.png" />
        </Link>
        <div className={Styles.links}>
          <div>
            <h3>CONTACT US</h3>
            <ul>
              <li>
                <a href="/">Chat with us</a>
              </li>
              <li>
                <a href="tel:+2348181846556">Give us a call</a>
              </li>
              <li>
                <a href="mailto:admin@pepperish.ng">Send us an email</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>FOLLOW US</h3>
            <ul>
              <li>
                <a href="https://facebook.com/pepperish.ng" target="_blank" rel="noreferrer">Facebook</a>
              </li>
              <li>
                <a href="https://instagram.com/pepperish.ng" target="_blank" rel="noreferrer">Instagram</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>COMPANY</h3>
            <ul>
              <li>
                <a href="/">Terms of use</a>
              </li>
              <li>
                <a href="/">Privacy policy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={Styles['copyright-text']}>
          <p>Pepperish Foods.</p>
          <p>&copy; 2024 All Rights Reserved.</p>
        </div>
      </div>

      <img className={Styles.model} src="https://i.ibb.co/LNt4zG3/model.png" alt="" />
    </footer>
  )
}

export default Footer;
