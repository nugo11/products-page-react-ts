import { useState } from "react";
import "./App.css";
import cartImg from "./assest/cart.png";
import cartImg2 from "./assest/cart2.png";
import logo from "./assest/logo.png";
import ProfileImg from "./assest/profile.png";
import Gallery from "./components/gallery";
import img from "./assest/products/pr1.png";
import delimg from "./assest/del.svg";
import burger from "./assest/burger.svg";

function App() {
  const [cartModal, setCartModal] = useState(false);
  const [counter, setCounter] = useState(0);
  const [productArr, setProductArr] = useState(false);
  const [burgerM, setBurgerM] = useState(false);

  const openCartModal = () => {
    setCartModal(true);
  };
  const closeCartModal = () => {
    setCartModal(false);
  };

  return (
    <>
      <header>
        <div className="head_left">
          <div className="logo">
            <img src={burger} alt="burger" onClick={() => setBurgerM(true)} className="burger" />
            <img src={logo} alt="logo" />
          </div>
          <nav className={`navigation ${burgerM ? "active" : ""}`}>
          {burgerM ? <li className="xbut" onClick={() => setBurgerM(false)}>X</li> : ""}
            <li>
              <a href="#">Collections</a>
            </li>
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Women</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </nav>
        </div>
        <div className="head_right">
          <div className="imgresp">
            <img
              src={cartImg}
              onClick={!cartModal ? openCartModal : closeCartModal}
              width={20}
              alt="cart"
            />
            <div className="count">{counter}</div>
          </div>
          <div className={`cartmodal ${cartModal ? "active" : ""}`}>
            <div className="firstcart"></div>
            <h1>cart</h1>
            <div className="prods">
              {productArr ? (
                <div className="firstcart">
                  <div className="cart_product">
                    <img src={img} width={50} alt="prod" />
                    <div className="cartinfo">
                      <h1>Fall Limited Edition Sneakers</h1>
                      <span>$125.00 x {counter}</span> <b>${counter * 125}</b>
                    </div>
                    <img
                      src={delimg}
                      onClick={() => setProductArr(false)}
                      alt="delimg"
                    />
                  </div>
                  <div className="cart_but">
                    <button>Checkout</button>
                  </div>
                </div>
              ) : (
                <p>Your cart is empty.</p>
              )}
            </div>
          </div>
          <img src={ProfileImg} width={35} className="hoverImg" alt="profile" />
        </div>
      </header>
      <main>
        <div className="mine_left">
          <Gallery />
        </div>

        <div className="mine_right">
          <div className="info">
            <h2>Sneaker Company</h2>
            <h1>Fall Limited Edition Sneakers</h1>
            <p>
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>
            <div className="price">
              <div className="p1">
                <span>$125.00</span>
                <b>50%</b>
              </div>
              <div className="p2">
                <span>$250.00</span>
              </div>
            </div>
          </div>
          <div className="buts">
            <div className="counter">
              <button
                onClick={() => setCounter(counter <= 0 ? counter : counter - 1)}
              >
                -
              </button>
              <p>{counter}</p>
              <button onClick={() => setCounter(counter + 1)}>+</button>
            </div>

            <div
              className="add"
              onClick={() => {
                setProductArr(true);
              }}
            >
              <img src={cartImg2} alt="cart" />
              <button>Add to cart</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
