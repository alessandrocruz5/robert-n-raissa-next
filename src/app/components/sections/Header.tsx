"use client";

import HeaderLogo from "@/app/assets/images/logo/Header logo.png";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setIsMenuOpen(false);
    }
  };

  const handleRsvpClick = useCallback(() => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSfdF5HsMv-UlYGOzYX5psfd4n-fLbhNYihNfeHi3lveMCfxxQ/viewform",
      "_blank",
      "noopener,noreferrer"
    );

    setIsMenuOpen(false);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.leftSection}>
          <button onClick={() => scrollToSection("location")}>Wedding</button>
          <button onClick={() => scrollToSection("about-us")}>About Us</button>
          <button onClick={() => scrollToSection("registry")}>Registry</button>
        </div>

        <div className={styles.centerSection}>
          <button onClick={() => scrollToSection("hero")}>
            <Image
              src={HeaderLogo}
              alt="Header logo"
              width={115}
              height={115}
              priority
            />
          </button>
        </div>

        <div className={styles.rightSection}>
          <button onClick={handleRsvpClick}>RSVP</button>
        </div>

        <div
          className={`${styles.hamburger} ${isMenuOpen ? styles.active : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <div className={`${styles.sidePanel} ${isMenuOpen ? styles.open : ""}`}>
        <div className={styles.sidePanelContent}>
          <button onClick={() => scrollToSection("location")}>Wedding</button>
          <button onClick={() => scrollToSection("about-us")}>About Us</button>
          <button onClick={() => scrollToSection("registry")}>Registry</button>
          <button onClick={handleRsvpClick}>RSVP</button>
          <div
            className={`${styles.hamburger} ${isMenuOpen ? styles.active : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className={styles.overlay} onClick={toggleMenu}></div>
      )}
    </>
  );
};

export default Header;
