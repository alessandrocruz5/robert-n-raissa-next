// Landing.tsx
import Image from "next/image";
import landingImage from "@/app/assets/images/landing.jpg";
import Header from "../sections/Header";
import Location from "./Location";
import AboutUs from "./AboutUs";
import Registry from "./Registry";
import Rsvp from "./Rsvp";
import Footer from "../sections/Footer";
import styles from "./Landing.module.scss";

const Landing: React.FC = () => {
  return (
    <>
      <div id="hero" className={styles.hero}>
        <Header />
        <Image
          src={landingImage}
          alt="Landing image"
          className={styles.heroImage}
          priority
        />
        <div className={styles.heroContent}>
          <div className={styles.titleContainer}>
            <h2 className={styles.preTitle}>We're getting married!</h2>
            <h1 className={styles.mainTitle}>Robert & Raissa</h1>
            <h3 className={styles.date}>17 December 2024</h3>
          </div>
        </div>
      </div>
      <section id="location" className={styles.section}>
        <Location />
      </section>
      <section id="about-us" className={styles.section}>
        <AboutUs />
      </section>
      <section id="registry" className={styles.section}>
        <Registry />
      </section>
      <section id="rsvp" className={styles.section}>
        <Rsvp />
      </section>
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
};

export default Landing;
