import React from "react";
import { Link } from "gatsby";
import styles from "./navigation.module.css";

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/">Blog</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/contact/">Contact</Link>
      </li>
      <li className={styles.navigationItem}>
        <a href="https://forms.gle/ZReCP2RDc6mpeNsr6">Join</a>
      </li>
      <li className={styles.navigationItem}>
        <a href="https://opencollective.com/cooperation-denton">Donate</a>
      </li>
    </ul>
  </nav>
);
