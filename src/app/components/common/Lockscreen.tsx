"use client";

import { useState, useEffect } from "react";
import styles from "./Lockscreen.module.scss";
import classNames from "classnames";
import Image from "next/image";
import logo from "@/app/assets/images/logo/Footer logo.png";
import Countdown from "./Countdown";

const Lockscreen: React.FC = () => {
  const [password, setPassword] = useState("");
  const [isLocked, setIsLocked] = useState(true);
  const [isUnlocking, setIsUnlocking] = useState(false);
  const [isIncorrect, setIsIncorrect] = useState(false);
  const [formDisabled, setFormDisabled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormDisabled(true);

    if (password === "UnliRaisForRobert") {
      setIsUnlocking(true);
      setShowWelcome(true);
      // Wait for animation to complete before hiding the screen
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsLocked(false);
      setTimeout(() => {
        setIsHidden(true);
      }, 1000);
    } else {
      setIsIncorrect(true);
      setFormDisabled(false);
      setPassword("");
      await new Promise((resolve) => setTimeout(resolve, 300));
      setIsIncorrect(false);
    }
  };

  useEffect(() => {
    if (isHidden) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isHidden]);

  if (isHidden) {
    return null;
  }

  return (
    <div
      className={classNames(styles.lockscreen, {
        [styles.fadeOut]: !isLocked,
      })}
    >
      <div
        className={classNames(styles.lockIcon, {
          [styles.unlocked]: isUnlocking,
          [styles.incorrect]: isIncorrect,
        })}
      >
        <svg viewBox="0 0 40 40">
          <rect
            className={styles.lockBody}
            x="10"
            y="18"
            width="20"
            height="14"
            rx="2"
          />
          <path className={styles.lockShackle} d="M14 18V12a6 6 0 1 1 12 0v6" />
        </svg>
      </div>

      <h2
        className={classNames(styles.title, {
          [styles.fadeOut]: isUnlocking,
        })}
      >
        Please enter the password to access the wedding invite
      </h2>

      <form
        onSubmit={handleSubmit}
        className={classNames(styles.form, {
          [styles.hidden]: showWelcome,
        })}
      >
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
          placeholder="Enter password"
          disabled={formDisabled}
        />

        <button type="submit" className={styles.button} disabled={formDisabled}>
          Submit
        </button>
      </form>

      <div
        className={classNames(styles.welcome, {
          [styles.visible]: showWelcome,
        })}
      >
        <h1 className={styles.welcomeTitle}>Welcome!</h1>
        <p className={styles.welcomeText}>
          We're so excited to share our special day with you
        </p>
      </div>

      <div
        className={classNames(styles.monogram, {
          [styles.fadeOut]: isUnlocking,
        })}
      >
        <Image className={styles.logo} src={logo} alt="Robert & Raissa" />
      </div>

      <Countdown targetDate="2024-12-17T00:00:00" variant="lock" />
    </div>
  );
};

export default Lockscreen;
