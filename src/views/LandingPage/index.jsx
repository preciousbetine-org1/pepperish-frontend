import { ArrowRightAlt } from '@mui/icons-material'
import notie from 'notie'
import Header from '../../components/Header'
import Styles from './styles.module.css'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

function LandingPage() {
  const bookEvent = (e) => {
    e.preventDefault()
    notie.alert({ type: 'success', text: 'We are no longer accepting orders. Sorry for the inconvenience!', time: 5 });
  }

  return (
    <div className={Styles['landing-page']}>
      {/* <img className={Styles['hero-image']} src="https://i.ibb.co/2PfjHdf/peppered-food-in-a-c.jpg" /> */}
      <img className={Styles['hero-image']} src="https://i.ibb.co/4TjVxsn/bg-1.png" />
      {/* <img className={Styles['hero-image']} src="https://i.ibb.co/10B6G3H/bg-2.png" /> */}
      {/* <img className={Styles['hero-image']} src="https://i.ibb.co/9T5NYpN/bg-3.png" /> */}
      <Header />
      <section className={Styles['hero-section']}>
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
      </section>

      <section className={Styles.products}>
        <h2>Pick your pepperish</h2>
        <ul className={Styles.menu}>
          <li className={Styles['product-card']}>
            <div>
              <img src="https://i.ibb.co/nrt7bZh/pepcool.png" />
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
              <img src="https://i.ibb.co/tmtzvv5/pepchill-light.png" />
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
        <form className={Styles['events-form']} onSubmit={bookEvent}>
          <h2>Let us spice things up at your next event</h2>
          <p>
            Add a spicy kick to your event with our peppered ponmo.
            Our special peppers bring the perfect blend of heat
            and taste to any gathering. Let us handle the spice,
            making your gathering a delicious and unforgettable
            experience for everyone.
          </p>
          <div>
            <input placeholder="First name" />
            <input placeholder="Last name" />
          </div>
          <div>
            <input placeholder="Email address" />
            <input placeholder="Phone number" />
          </div>
          <div>
            <input placeholder="Packs of pepcool" type="number" />
            <input placeholder="Packs of pepchill" type="number" />
          </div>
          <input placeholder="Event address" />
          <textarea placeholder="Any additional information?" />
          <button type="submit">Place order</button>
        </form>

        <img src="https://i.ibb.co/DYRMFTc/pepperish-on-wood.jpg" alt="" />
      </section>


      <section className={Styles.testimonials}>
        <h2>Yummy Yarns from Our Customers</h2>
        <p>
          At Pepperish, creating the best meals is a journey fueled by passion and hard work at every step.
          We recognize the grit it takes to keep our customers satisfied and are committed to delivering excellence with every flavorful bite.
        </p>

        <ul className={Styles['testimonial-cards']}>
          <li className={Styles['testimonial-card']}>
            <img src="https://i.ibb.co/k8XQgHL/oluwatobi.jpg" alt="Oluwatobi Joy" />
            <p>
              It&apos;s very neatly packed. Now even more
              people want ooo haaah! I&apos;ve chased them
              from my office. Let them come back tommorow to order.
            </p>
            <h3>Oluwatobi Joy</h3>
          </li>
          <li className={Styles['testimonial-card']}>
            <img src="https://i.ibb.co/3NJhjrB/dave-double.jpg" alt="Dave Double" />
            <p>
              It&apos;s very neatly packed. Now even more
              people want ooo haaah! I&apos;ve chased them
              from my office. Let them come back tommorow to order.
            </p>
            <h3>Dave Double</h3>
          </li>
          <li className={Styles['testimonial-card']}>
            <img src="https://i.pinimg.com/564x/f4/32/9a/f4329ae33007f266f0b7a49c672717b4.jpg" alt="Oluwatobi Joy" />
            <p>
              It&apos;s very neatly packed. Now even more
              people want ooo haaah! I&apos;ve chased them
              from my office. Let them come back tommorow to order.
            </p>
            <h3>Kawe Princess</h3>
          </li>
          <li className={Styles['testimonial-card']}>
            <img src="https://i.ibb.co/mRVXsRF/blessing.jpg" alt="Blessing Obing" />
            <p>
              It&apos;s very neatly packed. Now even more
              people want ooo haaah! I&apos;ve chased them
              from my office. Let them come back tommorow to order.
            </p>
            <h3>Blessing Obong</h3>
          </li>
          <li className={Styles['testimonial-card']}>
            <img src="https://i.ibb.co/pbKq0CR/bolu.jpg" alt="Bolu Owoyonmi" />
            <p>
              It&apos;s very neatly packed. Now even more
              people want ooo haaah! I&apos;ve chased them
              from my office. Let them come back tommorow to order.
            </p>
            <h3>Bolu Owoyonmi</h3>
          </li>
          <li className={Styles['testimonial-card']}>
            <img src="https://i.ibb.co/WB9H4QF/peace.jpg" alt="Peace Livinus" />
            <p>
              It&apos;s very neatly packed. Now even more
              people want ooo haaah! I&apos;ve chased them
              from my office. Let them come back tommorow to order.
            </p>
            <h3>Peace Livinus</h3>
          </li>
        </ul>
      </section>

      <Footer />
    </div>
  )
}

export default LandingPage
