import React from "react";
import styles from "./definition-list-vertical-layout.module.css";

export function DefinitionListVerticalLayout() {
  return (
    <>
      {/* <h1>Definition List Vertical Layout</h1> */}

      <dl className={styles.list}>
        <dt className={styles.label}>Photos</dt>
        <dd className={styles.value}>123</dd>

        <dt className={styles.label}>
          <small>premium</small>
          <br />
          Followers
        </dt>
        <dd className={styles.value}>456</dd>

        <dt className={styles.label}>Follows</dt>
        <dd className={styles.value}>65</dd>
      </dl>
    </>
  );
}
