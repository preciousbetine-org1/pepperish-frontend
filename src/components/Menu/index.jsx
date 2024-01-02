import { Link } from 'react-router-dom';
import Styles from './styles.module.css';

function Menu() {
  return (
    <div className={Styles.menu}>
      <h2 className="hidden">Choose an option from our menu</h2>

      <ul>
        <li className="hidden">
          <Link to="/products">
            <h3>PRE-PACKAGED</h3>
            <p>
              Craving a spicy meal in no time?
              For a quick and satisfying experience,
              choose from one of our pre-packaged options.
            </p>
          </Link>
        </li>
        <li className="hidden">
          <Link to="/custom-package">
            <h3>CUSTOM</h3>
            <p>
              Take a moment to carefully craft and personalize your own custom
              meal package. Choose from a variety of options to create a
              delicious meal that&apos;s just right for you.
            </p>
          </Link>
        </li>
        <li className="hidden">
          <Link to="/for-events">
            <h3>FOR EVENTS</h3>
            <p>
              We cater to all types of events, from small gatherings to large
              parties. Let us know what you need and we&apos;ll take care of
              the rest.
            </p>
          </Link>
        </li>
      </ul>

    </div>
  )
}

export default Menu
