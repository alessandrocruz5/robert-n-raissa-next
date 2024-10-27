"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./AutoCarousel.module.scss";
import clsx from "clsx"; // You'll need to install this package for className merging

interface CarouselItem {
  url: StaticImageData;
  alt: string;
}

interface CarouselProps {
  items: CarouselItem[];
  interval?: number;
  className?: string;
  imageStyle?: string;
}

const AutoCarousel: React.FC<CarouselProps> = ({
  items,
  interval = 3000,
  className = "",
  imageStyle = "",
}) => {
  const [currIndex, setCurrIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  }, [items.length]);

  useEffect(() => {
    const autoplay = setInterval(nextSlide, interval);
    return () => clearInterval(autoplay);
  }, [nextSlide, interval]);

  return (
    <div className={clsx(styles.carouselContainer, className)}>
      {items.map((item, index) => (
        <Image
          key={index}
          src={item.url}
          alt={item.alt}
          fill
          className={clsx(
            styles.carouselImage,
            index === currIndex && styles.active,
            imageStyle
          )}
          priority
        />
      ))}
    </div>
  );
};

export default AutoCarousel;
