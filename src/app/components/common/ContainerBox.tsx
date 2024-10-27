import React from "react";
import styles from "./ContainerBox.module.scss";

interface ContainerBoxProps {
  contentClassName?: string;
  innerContainer?: string;
  children: React.ReactNode;
}

const ContainerBox: React.FC<ContainerBoxProps> = ({
  children,
  contentClassName,
  innerContainer,
}) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.innerContainer} ${innerContainer} || ''}`}>
        <div className={contentClassName}>{children}</div>
      </div>
    </div>
  );
};

export default ContainerBox;
