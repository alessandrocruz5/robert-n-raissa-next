import React from "react";
import Image from "next/image";
import registryImage from "@/app/assets/images/registry.jpg";
import BpiQR from "@/app/assets/images/qr/BPI QR.png";
import GcashRaissaQr from "@/app/assets/images/qr/Gcash Raissa.png";
import GcashRobertQr from "@/app/assets/images/qr/Gcash Robert.png";
import UbQr from "@/app/assets/images/qr/UB QR.png";
import styles from "./Registry.module.scss";

const Registry: React.FC = () => {
  const qrCodes = [
    { src: BpiQR, alt: "BPI QR" },
    { src: GcashRaissaQr, alt: "GCash Raissa" },
    { src: GcashRobertQr, alt: "GCash Robert" },
    { src: UbQr, alt: "UB QR" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.qrSection}>
        <div className={styles.contentContainer}>
          <div className={styles.content}>
            <h2>Thank you!</h2>
            <p>
              Your presence on our special day is the greatest gift of all.
              However, if you wish to contribute in another way, a monetary gift
              would be greatly appreciated as we embark on this new chapter
              together.
            </p>
            <p>
              Kindly include a note with your gift, so we can express our
              heartfelt gratitude. Please mention your name in the remarks/notes
              section.
            </p>
          </div>
          <Image
            src={registryImage}
            alt="Registry"
            className={styles.registryImage}
            priority
          />
        </div>

        <div className={styles.qrCodesContainer}>
          {qrCodes.map((qr, index) => (
            <div key={index} className={styles.qrCode}>
              <Image src={qr.src} alt={qr.alt} className={styles.qrImage} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Registry;
