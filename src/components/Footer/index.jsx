import Styles from './styles.module.css';

function Footer() {
  return (
    <footer className={Styles.footer}>
      <ul className={Styles.links}>
        <li>
          <a href="https://facebook.com/pepperish.ng" target="_blank" rel="noreferrer">Facebook</a>
        </li>
        <li>
          <a href="https://instagram.com/pepperish.ng" target="_blank" rel="noreferrer">Instagram</a>
        </li>
      </ul>

      <div className={Styles['copyright-text']}>
        <p>&copy; 2022 All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;
