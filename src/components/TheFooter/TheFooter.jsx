import Link from "next/link";
import Image from "next/image";

import Social from "@/components/Social/Social";
import Logo from "../Logo/Logo";

import styles from '@/components/TheFooter/TheFooter.module.css';

const TheFooter = () => {  
  const linkClassNameCenter = `${styles.wrapper} ${styles.center}`;
    
  return (
    <footer className={styles.container}>      
        <div className={styles.wrapper}>
          <div className={styles.contactsWrapper}>
            <b>Графік роботи:</b>
            <p>Пн-Пт: 8:00-20:00</p>
            <p>Сб, Нд: вихідний</p>
          </div>
          <div className={styles.contactsWrapper}>
              <b>Контактні телефони:</b>
              <Link className={styles.contactLink} href="tel:+380965300300">
                +38 096 5-300-300
              </Link>
              <Link className={styles.contactLink} href="tel:+380665300300">
                +38 066 5-300-300
              </Link>
              <Link className={styles.contactLink} href="tel:+380682300300">
                +38 068 2-300-300
              </Link>
          </div>          
        </div>
        <div className={linkClassNameCenter}>          
          <Logo width={200} height={160}/>
          <Social width={30} height={30}/>
          <p className={styles.policy}>
            &copy; 2023, Pokrov-ltd. All rights reserved.
          </p>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.contactsWrapper}>
            <b>Пошта:</b>
            <Link className={styles.contactLink} href="mailto:pokrov-ltd@ukr.net">
              pokrov-ltd@ukr.net
            </Link>
          </div>
          <div className={styles.contactsWrapper}>
            <b>Адреса виробництва:</b>
            <p>Україна,</p>
            <p>Черкаська область,</p>
            <p>м. Черкаси,</p>
            <p>вул. Максима Залізняка, 167</p>
          </div>
        </div>      
    </footer>
  );
};

export default TheFooter;