import React from "react";
import "./TopBar.css";
import { Link } from "react-router-dom";
import Logo from "../../../Assets/Fexal.png";
import Rext from "../../../Assets/Rectangle 10.png";
import cart from "../../../Assets/cart.png";
import logout from "../../../Assets/svg/login.svg";
import wishlist from "../../../Assets//svg/wishlist.svg";
import alert from "../../../Assets/svg/alert.svg";

const TopBar = ({ title }) => {
  return (
    <div className=" fexal_topbar ">
      <div className="container nav-wrapper topbar_wrapper">
        <ul className="col left">
          <Link to="/" className={"logo"}>
            <img src={Rext} alt="Fexal" />
            <img src={Logo} alt="Fexal" />
          </Link>
        </ul>
        <ul className="col center navigation-links  hide-on-small-and-down left-align">
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/shop">About</Link>
          </li>
          <li>
            <Link to="/shop">Products</Link>
          </li>
        </ul>
        <ul class="col right content-links ">
          <li>
            <Link to="/wishlist">
              <div className="wishlist-images">
                <img src={wishlist} alt="Wishlist" />
                <img className="alert" src={alert} alt="Wishlist" />
              </div>
            </Link>
          </li>
          <li>
            <a className="logout" href="/login/google">
              <img src={logout} alt="Logout" />
            </a>
          </li>
          <li>
            <Link className="cart" to="./cart">
              <img className="cart-img" src={cart} alt="cart" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopBar;
