"use client";

import { useState, useEffect } from "react";
import styles from "./Countdown.module.scss";

interface CountdownProps {
  targetDate: string;
  variant?: "lock" | "landing";
}

const Countdown: React.FC<CountdownProps> = ({
  targetDate,
  variant = "landing",
}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className={`${styles.countdown} ${styles[variant]}`}>
      <div className={styles.timeUnit}>
        <span className={styles.number}>{timeLeft.days}</span>
        <span className={styles.label}>Days</span>
      </div>
      <div className={styles.timeUnit}>
        <span className={styles.number}>{timeLeft.hours}</span>
        <span className={styles.label}>Hours</span>
      </div>
      <div className={styles.timeUnit}>
        <span className={styles.number}>{timeLeft.minutes}</span>
        <span className={styles.label}>Minutes</span>
      </div>
      <div className={styles.timeUnit}>
        <span className={styles.number}>{timeLeft.seconds}</span>
        <span className={styles.label}>Seconds</span>
      </div>
    </div>
  );
};

export default Countdown;
