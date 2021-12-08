import React from "react";
import CartContent from "./CartContent/CartContent";

const Cart = () => {
  return (
    <section id="cart">
      <div className="row">
        <CartContent />
      </div>
      <div className="container">
        <div className="row right">
          <div className=" col total">
            <h3>Total</h3>
          </div>
          <div className=" col accent-1total">
            <h3>99</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
