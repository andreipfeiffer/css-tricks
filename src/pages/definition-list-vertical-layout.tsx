import React from "react";
import styles from "./definition-list-vertical-layout.module.css";

export function DefinitionListVerticalLayout() {
  return (
    <>
      <h1>Definition List Vertical Layout</h1>

      <p>
        We'll use <code>grid-auto-flow</code>
      </p>

      <dl className={styles.dl}>
        <dt>Photos</dt>
        <dd>456</dd>

        <dt>Followers</dt>
        <dd>602</dd>

        <dt>Follows</dt>
        <dd>290</dd>
      </dl>
    </>
  );
}
