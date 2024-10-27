"use client";

import AutoCarousel from "../common/AutoCarousel";
import ContainerBox from "../common/ContainerBox";
import Facts1 from "@/app/assets/images/facts/facts-1.jpg";
import Facts2 from "@/app/assets/images/facts/facts-2.jpg";
import Facts3 from "@/app/assets/images/facts/facts-3.jpg";
import Facts4 from "@/app/assets/images/facts/facts-4.jpg";
import Facts5 from "@/app/assets/images/facts/facts-5.jpg";
import styles from "./AboutUs.module.scss";

const AboutUs: React.FC = () => {
  const carouselItems = [
    {
      url: Facts1,
      alt: "Facts 1",
    },
    {
      url: Facts2,
      alt: "Facts 2",
    },
    {
      url: Facts3,
      alt: "Facts 3",
    },
    {
      url: Facts4,
      alt: "Facts 4",
    },
    {
      url: Facts5,
      alt: "Facts 5",
    },
  ];

  return (
    <ContainerBox
      innerContainer={styles.innerContainer}
      contentClassName={styles.aboutUsContainer}
    >
      <div className={styles.aboutContent}>
        <h2>Did you know?</h2>
        <p className={styles.greyText}>
          They met on their freshman year in college on a carpool ride--and it
          was Issa's birthday!
        </p>
        <p>
          After graduating, they took summer internships in Italy and travelled
          together to different European cities on the weekends.
        </p>
        <p className={styles.greyText}>
          Robert proposed to Issa in a zen garden park in Japan. When he started
          to kneel, she thought he was about to fall into the pond.
        </p>
        <p>
          They moved to Sydney, Australia and are planning the wedding from
          there.
        </p>
        <p className={styles.greyText}>
          As of the 8th of May 2024, Robert and Issa have been together for 13
          years.
        </p>
      </div>
      <AutoCarousel items={carouselItems} className={styles.carousel} />
    </ContainerBox>
  );
};

export default AboutUs;
