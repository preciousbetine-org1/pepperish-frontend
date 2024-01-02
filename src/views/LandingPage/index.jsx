import Footer from '../../components/Footer'
import Styles from './styles.module.css'

function LandingPage() {
  return (
    <section className={Styles['landing-page']}>
      <div>
        <span className={`hidden ${Styles['sub-title']}`}>Experience</span>
        <h2 className="hidden">THE MOST TASTY VARIETY OF PEPPERS</h2>
        <p className="hidden">
          From the fiery kick of jalapeños to the rich complexity of
          habaneros, our selection showcases the finest peppers,
          carefully curated to elevate your dining experience.
          Explore the diverse world of peppers with us,
          and let your taste buds savor the extraordinary.
          Get ready for a tantalizing journey through the most tempting
          and flavorful peppers - because at Pepperish.ng,
          taste knows no bounds!
        </p>
        <div className={Styles.images}>
          <img className="left-hidden" alt="" src="https://i.ibb.co/SXQk45r/chili-pepper-3.jpg" />
          <img className={`left-hidden ${Styles.bordered}`} alt="" src="https://i.ibb.co/bsPj3WL/jalapeno-pepper.jpg" />
          <img className="left-hidden" alt="" src="https://i.ibb.co/cL5WvQm/habanero-pepper.jpg" />
          <img className="left-hidden" alt="" src="https://i.ibb.co/q9NMwZj/chili-pepper.jpg" />
          <img className="left-hidden" alt="" src="https://i.ibb.co/bmYWm1p/chili-pepper-4.jpg" />
        </div>
      </div>

      <hr />

      <div>
        <span className={`hidden ${Styles['sub-title']}`}>Made with</span>
        <h2 className="hidden">INGREDIENTS FROM THE FRESHEST SOURCES</h2>
        <p className="hidden">
          From vibrant vegetables to succulent proteins,
          our dedication to using premium, farm-fresh ingredients
          guarantees a dining experience that&apos;s not only delicious
          but also wholesome. We believe that the journey from farm
          to table enhances the essence of every dish, inviting you
          to savor the true flavors of nature in every mouthwatering bite.
        </p>
        <div className={Styles.images}>
          <img className="left-hidden" alt="" src="https://i.ibb.co/xhmPnZK/beef.jpg" />
          <img className="left-hidden" alt="" src="https://i.ibb.co/8DtQKYr/vegetable.jpg" />
          <img className="left-hidden" alt="" src="https://i.ibb.co/hDmCK3J/gizzard.jpg" />
          <img className="left-hidden" alt="" src="https://i.ibb.co/wJ42phS/ponmo.jpg" />
        </div>
      </div>

      <hr />

      <div>
        <span className={`hidden ${Styles['sub-title']}`}>Packaged with</span>
        <h2 className="hidden">
          THE MOST AIR-TIGHT SPILL PROOF CONTAINERS
        </h2>
        <p className="hidden">
          Our commitment to quality extends beyond flavors to ensure your
          culinary experience is not only delightful but also mess-free.
          Trust in the reliability of our expertly designed packaging,
          where freshness is sealed, and spills are kept at bay.
          With every dish, enjoy the convenience and assurance that comes
          with our state-of-the-art containers, preserving the integrity
          of your meal until the moment you&apos;re ready to savor it
        </p>
        <div className={Styles['package-images']}>
          <img className="left-hidden" alt="" src="https://i.ibb.co/51RfDzx/plates.png" />
          <img className="left-hidden" alt="" src="https://i.ibb.co/Twx9czs/bags.png" />
        </div>
      </div>

      <hr />

      <div>
        <span className={`hidden ${Styles['sub-title']}`}>Delivered</span>
        <h2 className="hidden">
          BY TRAINED AND VERIFIED RIDERS
        </h2>
        <p className="hidden">
          With our team of trained and verified riders, your order
          is in reliable hands from start to finish. Our dedicated
          delivery professionals ensure the secure and timely
          transportation of your packages, upholding the highest
          standards of service. With their expertise and commitment to
          excellence, you can trust that your order will arrive not
          only promptly but also in pristine condition.
        </p>
        <div className={Styles['delivery-images']}>
          <img className="left-hidden" alt="" src="https://i.ibb.co/PWBR5Jd/rider.jpg" />
          <img className="left-hidden" alt="" src="https://i.ibb.co/BnLn8rq/map.jpg" />
        </div>
      </div>

      <Footer />
    </section>
  )
}

export default LandingPage
