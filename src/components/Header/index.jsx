import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Styles from './styles.module.css';
import { useContext } from 'react';
import applicationContext from '../../data/applicationContext';
import { ArrowRightAlt } from '@mui/icons-material';
import logo from '../../assets/logo.png';
import favicon from '../../assets/favicon.png';

function Header({
  backgroundColor,
}) {
  const app = useContext(applicationContext);

  const numItemsInCart = app.products.reduce((sum, product) => sum + product.quantity, 0) + app.customPackage.quantity;

  return (
    <header
      className={Styles.header}
      style={{
        backgroundColor,
      }}
    >
      <Link to="/" className={Styles['favicon_logo']}>
        <img className={Styles.favicon} src={favicon} />
        <img className={Styles.logo} src={logo} />
      </Link>

      <nav className={Styles.nav}>
        <Link className={Styles['order-btn']} to="/order">
          ORDER NOW
          <ArrowRightAlt />
        </Link>
        <Link className={Styles['cart-link']} to="/cart">
          CART
          <div className={Styles['cart-count']}>
            {numItemsInCart}
          </div>
        </Link>
      </nav>

    </header>
  )
}

Header.propTypes = {
  backgroundColor: PropTypes.string,
};

export default Header;
