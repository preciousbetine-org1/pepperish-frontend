import Footer from '../../components/Footer'
import Styles from './styles.module.css'

function ReceiptPage() {
  return (
    <section className={Styles['receipt-page']}>
      <div className={Styles['page-content']}>
        <div>
          <span className={Styles['sub-title']}>Thanks for shopping with us!</span>
          <h2>RECEIPT</h2>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Delectus labore molestias aut tempore nobis rerum sunt assumenda eius!
            Recusandae totam adipisci qui quidem pariatur, ex mollitia a est ullam earum!
          </p>

          <div className={Styles['table-container']}>
            <table>
              <thead>
                <tr>
                  <th>Package name</th>
                  <th>QTY</th>
                  <th>Unit Price</th>
                  <th>Total weight</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Plate of ponmo</td>
                  <td>10</td>
                  <td>N 1500</td>
                  <td>10kg</td>
                  <td>N 15000</td>
                </tr>
                <tr>
                  <td>Plate of ponmo</td>
                  <td>10</td>
                  <td>N 1500</td>
                  <td>10kg</td>
                  <td>N 15000</td>
                </tr>
                <tr>
                  <td>Plate of ponmo</td>
                  <td>10</td>
                  <td>N 1500</td>
                  <td>10kg</td>
                  <td>N 15000</td>
                </tr>
                <tr>
                  <td>Plate of ponmo</td>
                  <td>10</td>
                  <td>N 1500</td>
                  <td>10kg</td>
                  <td>N 15000</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="3">Sub Total</td>
                  <td>40kg</td>
                  <td>N 60000</td>
                </tr>
                <tr>
                  <td colSpan="4">Delivery Fee</td>
                  <td>N 2000</td>
                </tr>
                <tr>
                  <td colSpan="4">Total</td>
                  <td>N 62000</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        <button type="button">PRINT</button>
      </div>
      <Footer />
    </section>
  )
}

export default ReceiptPage
