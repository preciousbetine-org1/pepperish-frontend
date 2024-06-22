import { ArrowRightAlt } from '@mui/icons-material'
import notie from 'notie'
import Header from '../../components/Header'
import Styles from './styles.module.css'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import anim from '../../assets/anim.mp4'
import pepcool from '../../assets/pepcool.png'
import pepchill from '../../assets/pepchill.png'
import bg1 from '../../assets/bg1.jpg'

function LandingPage() {
  const bookEvent = (e) => {
    e.preventDefault()
    notie.alert({ type: 'success', text: 'We are no longer accepting orders. Sorry for the inconvenience!', time: 5 });
  }

  return (
    <>
      <Header />
      <section className={Styles['hero-section']}>
        <div className={Styles['left-section']}>
          <h1>
            Peppery and tasty ponmo delivered
            to you.
          </h1>
          <p>Free and fast delivery.</p>
          <Link to="/order">
            <button>
              Order now
              <ArrowRightAlt />
            </button>
          </Link>
        </div>
        <div className={Styles['right-section']}>
          <video autoPlay loop muted>
            <source src={anim} type="video/mp4" />
          </video>
        </div>
      </section>

      <section className={Styles.products}>
        <div className={Styles['products-heading']}>
          <h2>Pick your pepperish</h2>
          <p>
            Our peppered ponmo comes with a can
            of coke or two cans of heineken. You choose.
          </p>
        </div>
        <ul className={Styles.menu}>
          <li className={Styles['product-card']}>
            <div>
              <img src={pepcool} />
              <h3>Pepcool</h3>
            </div>
            <div>
              <h4>Content</h4>
              <ul className={Styles['product-content']}>
                <li>1 plate of ponmo</li>
                <li>1 can of coke</li>
              </ul>
              <div className={Styles['product-details']}>
                <div className={Styles['price-tag']}>
                  <span className={Styles.amount}>&#8358; 1,500</span>
                  <span>PER PACK</span>
                </div>
                <Link to="/order">
                  <button>Order now</button>
                </Link>
              </div>
            </div>
          </li>
          <li className={Styles['product-card']}>
            <div>
              <img src={pepchill} />
              <h3>Pepchill</h3>
            </div>
            <div>
              <h4>Content</h4>
              <ul className={Styles['product-content']}>
                <li>1 plate of ponmo</li>
                <li>2 cans of heineken</li>
              </ul>
              <div className={Styles['product-details']}>
                <div className={Styles['price-tag']}>
                  <span className={Styles.amount}>&#8358; 2,000</span>
                  <span>PER PACK</span>
                </div>
                <Link to="/order">
                  <button>Order now</button>
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <section className={Styles.events}>
        <div className={Styles['events-text']}>
          <h2>Let us spice things up at your next event</h2>
          <p>
            Add a spicy kick to your event with our peppered ponmo.
            Our special peppers bring the perfect blend of heat
            and taste to any gathering. Let us handle the spice,
            making your gathering a delicious and unforgettable
            experience for everyone.
          </p>
          <button onClick={bookEvent} type="button">Get in touch</button>
        </div>

        <img src={bg1} alt="" />
      </section>

      <Footer />
    </>
  )
}

export default LandingPage
