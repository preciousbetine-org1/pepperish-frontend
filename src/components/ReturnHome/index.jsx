import { Link } from 'react-router-dom';
import Styles from './styles.module.css';

function ReturnHome() {
  return (
    <div className={Styles.container}>
      <Link to="/">
        <button type="button" className={Styles.button}>
          Return Home
        </button>
      </Link>
    </div>
  )
}

export default ReturnHome;
