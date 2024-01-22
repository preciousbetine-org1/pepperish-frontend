import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Styles from './styles.module.css';
import { useContext } from 'react';
import applicationContext from '../../data/applicationContext';
import { Facebook, Instagram, ShoppingCartOutlined } from '@mui/icons-material';

function Header({
  backgroundColor,
  boxShadow,
  sticky,
}) {
  const app = useContext(applicationContext);

  const numItemsInCart = app.products.reduce((sum, product) => sum + product.quantity, 0) + app.customPackage.quantity;

  return (
    <header
      className={Styles.header}
      style={{
        backgroundColor,
        boxShadow: boxShadow ? '' : 'none',
        position: sticky ? 'sticky': 'absolute',
      }}
    >
      <Link to="/" className={Styles['favicon_logo']}>
        <img className={Styles.favicon} src="https://i.im.ge/2022/08/31/OEt2Z4.favicon.png" />
        <img className={Styles.logo} src="https://i.im.ge/2022/08/31/OEtaGP.logo.png" />
      </Link>

      <nav className={Styles.nav}>
        <Link className={Styles['nav-link']} to="/">HOME</Link>
        <Link className={Styles['nav-link']} to="/order">ORDER NOW</Link>
        <div className={Styles['social-links']}>
          <Link to="https://facebook.com/pepperish.ng" className={Styles.fb} target="_blank">
            <Facebook />
          </Link>
          <Link to="https://instagram.com/pepperish.ng" className={Styles.ig} target="_blank">
            <Instagram />
          </Link>
        </div>
        <Link className={Styles['cart-link']} to="/cart">
          <ShoppingCartOutlined />
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
  boxShadow: PropTypes.bool,
  sticky: PropTypes.bool,
};

export default Header;
