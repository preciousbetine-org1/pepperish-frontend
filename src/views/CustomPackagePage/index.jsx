import { useContext } from 'react';
import Footer from '../../components/Footer'
import ProductCartControl from '../../components/ProductCartControl'
import {
  updateItemQuantity,
  updateCustomPackageQuantity,
} from '../../data'
import Styles from './styles.module.css'
import applicationContext from '../../data/applicationContext';

function CustomPackagePage() {
  const app = useContext(applicationContext);

  const plateOfPonmo = app.items.find((item) => item.id === 1);
  const plateOfGizzard = app.items.find((item) => item.id === 2);
  const plateOfNoodles = app.items.find((item) => item.id === 3);
  const canOfCoke = app.items.find((item) => item.id === 4);
  const canOfMalt = app.items.find((item) => item.id === 5);
  const bottleOfPepsi = app.items.find((item) => item.id === 6);
  const customPackageCartItem = app.customPackage;

  const items = [
    plateOfPonmo,
    plateOfGizzard,
    plateOfNoodles,
    canOfCoke,
    canOfMalt,
    bottleOfPepsi,
  ];

  const packageEmpty = items.reduce((a, b) => a + b.quantity, 0) === 0;

  const updateQuantity = (item, amount) => {
    if (item.quantity === 0 && amount === -1) return;
    updateItemQuantity(item.id, item.quantity + amount);

    switch (item.id) {
      case 1:
        app.setItems([
          ...items.filter((item) => item.id !== 1),
          {
            ...plateOfPonmo,
            quantity: plateOfPonmo.quantity + amount,
          },
        ]);
        break;
      case 2:
        app.setItems([
          ...items.filter((item) => item.id !== 2),
          {
            ...plateOfGizzard,
            quantity: plateOfGizzard.quantity + amount,
          },
        ]);
        break;
      case 3:
        app.setItems([
          ...items.filter((item) => item.id !== 3),
          {
            ...plateOfNoodles,
            quantity: plateOfNoodles.quantity + amount,
          },
        ]);
        break;
      case 4:
        app.setItems([
          ...items.filter((item) => item.id !== 4),
          {
            ...canOfCoke,
            quantity: canOfCoke.quantity + amount,
          },
        ]);
        break;
      case 5:
        app.setItems([
          ...items.filter((item) => item.id !== 5),
          {
            ...canOfMalt,
            quantity: canOfMalt.quantity + amount,
          },
        ]);
        break;
      case 6:
        app.setItems([
          ...items.filter((item) => item.id !== 6),
          {
            ...bottleOfPepsi,
            quantity: bottleOfPepsi.quantity + amount,
          },
        ]);
        break;
      default:
        break;
    }
  };

  return (
    <section className={Styles['custom-package-page']}>
      <div className={Styles['page-content']}>
        <div>
          <span className={`hidden ${Styles['sub-title']}`}>Craft your meal</span>
          <h2 className="hidden">CREATE A CUSTOM PACKAGE</h2>
        </div>

        <p className="hidden">
          Build your perfect meal with our custom package!
          Choose your favorites for a personalized dining experience
          tailored just for you.
        </p>

        <h3 className="hidden">ADD ITEMS TO YOUR PACKAGE</h3>
        <div className={Styles['package-contents']}>
          <div className={Styles['package-item']}>
            <img className="left-hidden" alt="" src="https://i.ibb.co/4S8RRN9/plate-of-ponmo.png" />
            <div className={`hidden ${Styles['item-details']}`}>
              <span className={Styles['item-name']}>Plate of ponmo</span>
              <div className={Styles['item-quantity']}>
                <button onClick={() => updateQuantity(plateOfPonmo, -1)}>-</button>
                <span>{plateOfPonmo.quantity}</span>
                <button onClick={() => updateQuantity(plateOfPonmo, 1)}>+</button>
              </div>
            </div>
            <div className={`hidden ${Styles['unit-price']}`}>
              UNIT PRICE:
              {' '}
              <span>
                N
                {' '}
                {plateOfPonmo.unitPrice}
              </span>
            </div>
          </div>
          <div className={Styles['package-item']}>
            <img className="left-hidden" alt="" src="https://i.ibb.co/xsCDwLc/gizzard-plate.png" />
            <div className={`hidden ${Styles['item-details']}`}>
              <span className={Styles['item-name']}>Plate of gizzard</span>
              <div className={Styles['item-quantity']}>
                <button onClick={() => updateQuantity(plateOfGizzard, -1)}>-</button>
                <span>{plateOfGizzard.quantity}</span>
                <button onClick={() => updateQuantity(plateOfGizzard, 1)}>+</button>
              </div>
            </div>
            <div className={`hidden ${Styles['unit-price']}`}>
              UNIT PRICE:
              {' '}
              <span>
                N
                {' '}
                {plateOfGizzard.unitPrice}
              </span>
            </div>
          </div>
          <div className={Styles['package-item']}>
            <img className="left-hidden" alt="" src="https://i.ibb.co/TgctcGc/noodles-plate.png" />
            <div className={`hidden ${Styles['item-details']}`}>
              <span className={Styles['item-name']}>Plate of noodles</span>
              <div className={Styles['item-quantity']}>
                <button onClick={() => updateQuantity(plateOfNoodles, -1)}>-</button>
                <span>{plateOfNoodles.quantity}</span>
                <button onClick={() => updateQuantity(plateOfNoodles, 1)}>+</button>
              </div>
            </div>
            <div className={`hidden ${Styles['unit-price']}`}>
              UNIT PRICE:
              {' '}
              <span>
                N
                {' '}
                {plateOfNoodles.unitPrice}
              </span>
            </div>
          </div>
          <div className={`${Styles['can-of-coke']} ${Styles['package-item']}`}>
            <img className="left-hidden" alt="" src="https://i.ibb.co/3YBkhjX/can-of-coke.png" />
            <div className={`hidden ${Styles['item-details']}`}>
              <span className={Styles['item-name']}>Can of coke</span>
              <div className={Styles['item-quantity']}>
                <button onClick={() => updateQuantity(canOfCoke, -1)}>-</button>
                <span>{canOfCoke.quantity}</span>
                <button onClick={() => updateQuantity(canOfCoke, 1)}>+</button>
              </div>
            </div>
            <div className={`hidden ${Styles['unit-price']}`}>
              UNIT PRICE:
              {' '}
              <span>
                N
                {' '}
                {canOfCoke.unitPrice}
              </span>
            </div>
          </div>
          <div className={`${Styles['can-of-malt']} ${Styles['package-item']}`}>
            <img className="left-hidden" alt="" src="https://i.ibb.co/9qb4fFY/can-of-malt.png" />
            <div className={`hidden ${Styles['item-details']}`}>
              <span className={Styles['item-name']}>Can of malt</span>
              <div className={Styles['item-quantity']}>
                <button onClick={() => updateQuantity(canOfMalt, -1)}>-</button>
                <span>{canOfMalt.quantity}</span>
                <button onClick={() => updateQuantity(canOfMalt, 1)}>+</button>
              </div>
            </div>
            <div className={`hidden ${Styles['unit-price']}`}>
              UNIT PRICE:
              {' '}
              <span>
                N
                {' '}
                {canOfMalt.unitPrice}
              </span>
            </div>
          </div>
          <div className={`${Styles['bottle-of-pepsi']} ${Styles['package-item']}`}>
            <img className="left-hidden" alt="" src="https://i.ibb.co/2NRSKjP/bottle-of-pepsi.png" />
            <div className={`hidden ${Styles['item-details']}`}>
              <span className={Styles['item-name']}>Bottle of pepsi</span>
              <div className={Styles['item-quantity']}>
                <button onClick={() => updateQuantity(bottleOfPepsi, -1)}>-</button>
                <span>{bottleOfPepsi.quantity}</span>
                <button onClick={() => updateQuantity(bottleOfPepsi, 1)}>+</button>
              </div>
            </div>
            <div className={`hidden ${Styles['unit-price']}`}>
              UNIT PRICE:
              {' '}
              <span>
                N
                {' '}
                {bottleOfPepsi.unitPrice}
              </span>
            </div>
          </div>
        </div>

        <div className="hidden">
          {
            !packageEmpty && (
              <ProductCartControl
                quantity={customPackageCartItem.quantity}
                weight={
                  `${plateOfPonmo.quantity * plateOfPonmo.weight
                  + plateOfGizzard.quantity * plateOfGizzard.weight
                  + plateOfNoodles.quantity * plateOfNoodles.weight
                  + canOfCoke.quantity * canOfCoke.weight
                  + canOfMalt.quantity * canOfMalt.weight
                  + bottleOfPepsi.quantity * bottleOfPepsi.weight
                  }g`
                }
                cost={
                  `N ${plateOfPonmo.quantity * plateOfPonmo.unitPrice
                  + plateOfGizzard.quantity * plateOfGizzard.unitPrice
                  + plateOfNoodles.quantity * plateOfNoodles.unitPrice
                  + canOfCoke.quantity * canOfCoke.unitPrice
                  + canOfMalt.quantity * canOfMalt.unitPrice
                  + bottleOfPepsi.quantity * bottleOfPepsi.unitPrice
                  }`
                }
                subTotal={
                  `N ${(plateOfPonmo.quantity * plateOfPonmo.unitPrice
                  + plateOfGizzard.quantity * plateOfGizzard.unitPrice
                  + plateOfNoodles.quantity * plateOfNoodles.unitPrice
                  + canOfCoke.quantity * canOfCoke.unitPrice
                  + canOfMalt.quantity * canOfMalt.unitPrice
                  + bottleOfPepsi.quantity * bottleOfPepsi.unitPrice) * customPackageCartItem.quantity
                  }`
                }
                onChange={(quantity) => {
                  updateCustomPackageQuantity(quantity);
                  app.setCustomPackage({
                    ...customPackageCartItem,
                    quantity,
                  });
                }}
              />
            )
          }
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default CustomPackagePage
