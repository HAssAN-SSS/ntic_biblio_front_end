import "./cart.css";
import { useState } from "react";
import CartItem from "./cartItem";
import { Link } from "react-router-dom";

export default function Cart(props) {
  let style = {
    color: "yello",
  };
  let [cartStyle, setCartStyle] = useState({ display: "block" });
  function toggelCart() {
    if (props.setShowCart && !props.inDashbord) {
      if (props.showCart === "show") {
        props.setShowCart(false);
        setCartStyle({ display: "none" });
      } else {
        props.setShowCart("show");
        setCartStyle({ display: "block" });
      }
    } else {
      props.vesion();
    }
  }
  return (
    <div className="cart" style={cartStyle}>
      <header className="cart-header">
        <svg
          onClick={() => {
            toggelCart();
          }}
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          className="bi bi-x-lg"
          viewBox="0 0 16 16"
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
        </svg>
        <span className="cart-title">Vorte Panier</span>
      </header>
      <div className="cart-items-list">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
    </div>
  );
}
