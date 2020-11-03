import React from "react";
import styles from "./twitter-3-image-gallery.module.css";

export function Twitter3ImageGallery() {
  return (
    <>
      <h1>Twitter's 3 Image Gallery</h1>

      <ul className={styles.gallery}>
        <li>
          <img src="https://picsum.photos/id/447/500" alt="" />
        </li>
        <li>
          <img src="https://picsum.photos/id/513/500" alt="" />
        </li>
        <li>
          <img src="https://picsum.photos/id/550/500" alt="" />
        </li>
      </ul>
    </>
  );
}
