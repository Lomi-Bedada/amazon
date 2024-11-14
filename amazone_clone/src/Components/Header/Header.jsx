import React, { useContext } from "react";

import { BiCart } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { DataContext } from "../DataProvider/DataProvider";
import { Link } from "react-router-dom";
import { PiCaretDownLight } from "react-icons/pi";
import { SlLocationPin } from "react-icons/sl";
import classes from "./header.module.css";

// import { auth } from '../../Utility/firebase';

const Header = () => {
  const [{ basket, user }, dispatch] = useContext(DataContext);

  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  //    console.log(basket);
  //    console.log(dispatch)
  return (
    <section className={classes.fixed}>
      <section>
        <dev className={classes.header__container}>
          {/* logo */}
          <div className={classes.logo__container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </Link>
            {/*delivery*/}
            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Delivered to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>

          {/* search */}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" name="" id="" placeholder="search product" />
            {/* icon */}
            <BsSearch size={37} />
          </div>

          {/* right side link ///other section */}
          <div className={classes.order__container}>
            <Link to="#" className={classes.language}>
              <img
                src="https://pngimg.com/uploads/flags/flags_PNG14592.png"
                alt=""
              />
              <section name="" id="">
                <option value="">EN</option>
              </section>
              <PiCaretDownLight size={20} />
            </Link>
            {/* three components */}
            <Link to={!user && "/auth"}>
              <div>
                {user ? (
                  <>
                    <p> Hello {user?.email?.split("@")[0]}</p>
                    <span onClick={() => auth.signOut()}>Sign Out</span>
                  </>
                ) : (
                  <>
                    <p>Hello, Sign In</p>
                    <span>Account & Lists</span>
                  </>
                )}
              </div>
            </Link>
            {/* orders */}
            <Link to="/orders">
              <p>returns</p>
              <span>& Orders</span>
            </Link>
            {/* Cart */}
            <Link to="/cart" className={classes.cart}>
              {/* icon */}
              <BiCart size={35} />
              <span>{totalItem}</span>
              <p>Cart</p>
            </Link>
          </div>
        </dev>
      </section>
      <LowerHeader />
    </section>
  );
};

export default Header;
