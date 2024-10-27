"use client";

import React, { useCallback } from "react";
import Image from "next/image";
import FooterImage from "@/app/assets/images/footer.jpg";
import FooterLogo from "@/app/assets/images/logo/Footer logo.png";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, []);

  const navigationItems = [
    { label: "Wedding", section: "location" },
    { label: "About Us", section: "about-us" },
    { label: "Registry", section: "registry" },
    { label: "RSVP", section: "rsvp" },
  ];

  return (
    <div className={styles.container}>
      <Image
        src={FooterImage}
        alt="Footer"
        className={styles.backgroundImage}
        priority
      />
      <div className={styles.content}>
        <nav className={styles.navigation}>
          {navigationItems.map((item, index) => (
            <button key={index} onClick={() => scrollToSection(item.section)}>
              {item.label}
            </button>
          ))}
        </nav>

        <div
          className={styles.logoContainer}
          onClick={() => scrollToSection("hero")}
        >
          <Image src={FooterLogo} alt="R&R" className={styles.logo} />
        </div>

        <div className={styles.credits}>
          <h3>
            Developed by{" "}
            <a
              href="https://github.com/alessandrocruz5?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              Alessandro Cruz
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
