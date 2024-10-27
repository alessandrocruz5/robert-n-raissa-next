"use client";

import React, { useCallback } from "react";
import Image from "next/image";
import rsvpImage from "@/app/assets/images/rsvp.jpg";
import styles from "./Rsvp.module.scss";

const Rsvp: React.FC = () => {
  const handleRsvpClick = useCallback(() => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSfdF5HsMv-UlYGOzYX5psfd4n-fLbhNYihNfeHi3lveMCfxxQ/viewform",
      "_blank",
      "noopener,noreferrer"
    );
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={rsvpImage}
          alt="RSVP"
          className={styles.backgroundImage}
          priority
        />

        <div className={styles.content}>
          <h1>We hope you can make it!</h1>
          <button
            onClick={handleRsvpClick}
            className={styles.rsvpButton}
            type="button"
            aria-label="Open RSVP form"
          >
            RSVP
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rsvp;
