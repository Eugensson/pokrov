import Link from "next/link";
import Image from "next/image";

import styles from '@/components/TheFooter/TheFooter.module.css';

const TheFooter = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.block}>1</div>
        <div className={styles.block}>2</div>
        <div className={styles.block}>3</div>
      </div>
      <span className={styles.policy}>
        &copy; 2023, Pokrov-ltd. All rights reserved.
      </span>
    </footer>
  );
};

export default TheFooter;