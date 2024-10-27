"use client";

import React from "react";
import AutoCarousel from "../common/AutoCarousel";
import balayDakoImage from "@/app/assets/images/location/balay dako.jpg";
import stBenedictImage from "@/app/assets/images/location/st. benedict.jpg";
import ContainerBox from "../common/ContainerBox";
import styles from "./Location.module.scss";

interface ColorCircleProps {
  variant: "sage" | "mauve" | "coral" | "peach" | "olive";
}

const ColorCircle: React.FC<ColorCircleProps> = ({ variant }) => (
  <div className={`${styles.colorCircle} ${styles[variant]}`} />
);

const Location: React.FC = () => {
  const carouselItems = [
    {
      url: stBenedictImage,
      alt: "St. Benedict Parish - Westgrove",
    },
    {
      url: balayDakoImage,
      alt: "Balay Dako, Tagaytay",
    },
  ];

  return (
    <ContainerBox
      innerContainer={styles.innerContainer}
      contentClassName={styles.locationContainer}
    >
      <AutoCarousel items={carouselItems} className={styles.carousel} />
      <div className={styles.locationInfo}>
        <div className={styles.section}>
          <h2>Ceremony</h2>
          <p>St. Benedict Parish - Westgrove</p>
          <p className={styles.time}>1:30PM</p>
        </div>

        <div className={styles.section}>
          <h2>Reception</h2>
          <p>Balay Dako, Tagaytay</p>
          <p className={styles.time}>5:00PM</p>
        </div>

        <div className={styles.section}>
          <h2>Attire</h2>
          <p className={styles.attire}>Formal or Black Tie Optional</p>
          <div className={styles.colorPalette}>
            <ColorCircle variant="sage" />
            <ColorCircle variant="mauve" />
            <ColorCircle variant="coral" />
            <ColorCircle variant="peach" />
            <ColorCircle variant="olive" />
          </div>
        </div>
      </div>
    </ContainerBox>
  );
};

export default Location;
