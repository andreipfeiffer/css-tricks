import React from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "../types";
import styles from "./Nav.module.css";

type Props = {
  routes: AppRoute[];
};

export function Nav(props: Props) {
  return (
    <nav className={styles.wrapper}>
      <ul className={styles.menu}>
        {props.routes.map((r) => (
          <li key={r.path}>
            <Link to={r.path}>{r.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
