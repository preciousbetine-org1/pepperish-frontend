import Footer from '../../components/Footer'
import Styles from './styles.module.css'

function EventsPage() {
  return (
    <section className={Styles['events-page']}>
      <div className={Styles['page-content']}>
        <div>
          <span className={`hidden ${Styles['sub-title']}`}>For events</span>
          <h2 className="hidden">
            LET US SPICE THINGS UP AT YOUR NEXT EVENT
          </h2>
        </div>

        <p className="hidden">
          Add a spicy kick to your event with our flavorful dishes.
          Our expertly crafted meals bring the perfect blend of heat and taste
          to any gathering. Let us handle the spice, making your gathering
          a delicious and unforgettable experience for everyone.
        </p>

        <div className="hidden">
          <button>
            GET IN TOUCH
          </button>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default EventsPage
