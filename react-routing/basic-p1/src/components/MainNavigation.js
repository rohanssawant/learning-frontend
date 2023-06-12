import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Main.module.css";

const MainNavigation = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Products
          </NavLink>
          {/* <Link to="/">Home</Link>
          <Link to="/product">Products</Link> */}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
