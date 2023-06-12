import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/Main";
import styles from "./Root.module.css";

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main className={styles.content}>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
