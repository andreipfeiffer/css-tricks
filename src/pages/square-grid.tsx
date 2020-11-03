import React from "react";
import styles from "./square-grid.module.css";

export function SquareGrid() {
  return (
    <>
      <h1>Square Grid</h1>

      <ul className={styles.list}>
        <li>
          <span>🔧</span>
        </li>
        <li className={styles.wide}>
          <span>🔨</span>
        </li>
        <li className={styles.tall}>
          <span>🛠</span>
        </li>
        <li>
          <span>⛏</span>
        </li>
        <li className={styles.wide}>
          <span>🔩</span>
        </li>
        <li>
          <span>⚙️</span>
        </li>
        <li className={styles.tall}>
          <span>🗡</span>
        </li>
        <li>
          <span>⚔️</span>
        </li>
        <li>
          <span>🔪</span>
        </li>
        <li>
          <span>🪓</span>
        </li>
        <li className={styles.wide}>
          <span>🧭</span>
        </li>
        <li>
          <span>⏱</span>
        </li>
        <li>
          <span>⏲</span>
        </li>
        <li className={styles.wide}>
          <span>⏰</span>
        </li>
        <li>
          <span>🕰</span>
        </li>
        <li>
          <span>⌛️</span>
        </li>
      </ul>
    </>
  );
}
