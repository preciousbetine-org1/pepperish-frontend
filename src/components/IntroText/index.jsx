import { Link } from 'react-router-dom';
import Styles from './styles.module.css';

function IntroText() {
  return (
    <Link to="/" className={Styles['intro-text']}>
      <div className={`hidden ${Styles['sub-title']}`}>
        Tasty and Refreshing
      </div>
      <h1 className={`hidden ${Styles.title}`}>
        PEPPERISH.NG
      </h1>
      <p className="hidden">
        Pepperish.ng stands as the foremost online destination for
        enthusiasts of peppered and spicy foods across Nigeria.
        Our brand is dedicated to catering to the discerning tastes
        of every spicy food lover. Featuring delectable meals such
        as the tantalizingly spicy flavored ponmo and elegantly
        gussied-up noodles, our extensive catalog promises an
        experience that will leave you craving more.
      </p>
    </Link>
  )
}

export default IntroText
