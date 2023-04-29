import React from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.logo}>ToDo List</div>
      <nav className={styles.nav}>
        <Link to={props.path}>{props.name}</Link>
      </nav>
    </section>
  );
};

export default Header;
