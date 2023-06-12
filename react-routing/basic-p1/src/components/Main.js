import React from "react";
import { Link } from "react-router-dom";
import styles from "./Main.module.css";

const MainNavigation = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <Link to="/">Home</Link>
          <Link to="/product">Products</Link>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
