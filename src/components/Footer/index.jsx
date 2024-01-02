import Styles from './styles.module.css';

function Footer() {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.links}>
        <div>
          <h3>CONTACT US</h3>
          <ul>
            <li>
              <a href="/">Chat with us</a>
            </li>
            <li>
              <a href="/">Give us a call</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>SOCIAL LINKS</h3>
          <ul>
            <li>
              <a href="/">Instagram</a>
            </li>
            <li>
              <a href="/">Tiktok</a>
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
        <p>&copy; 2023 All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;
