"use client";

import Image from 'next/image';

import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import Social from '@/components/Social/Social';

import styles from '@/components/InfoPanel/InfoPanel.module.css';

const InfoPanel = () => {
  return (
    <section className={styles.container}>
        <div className={styles.schedule}>
          <Image src={"/clock.svg"} width={24} height={24} alt="Clock" />
          <span>Пн-Пт: 8:00-20:00</span>
        </div>
        <ul className={styles.contactlist}>
          <li className={styles.contactItem}>
            <a className={styles.contactLink} href="tel:+380965300300">
              <Image
                className="icon__svg"
                src={"/phone.svg"}
                width={22}
                height={22}
                alt="Іконка телефону"
              />
              +38(096)5-300-300
            </a>
          </li>
          <li className={styles.contactItem}>
            <a className={styles.contactLink} href="tel:+380665300300">
              +38(066)5-300-300
            </a>
          </li>
          <li className={styles.contactItem}>
            <a className={styles.contactLink} href="tel:+380682300300">
              +38(068)2-300-300
            </a>
          </li>
          <li className={styles.contactItem}>
            <a
              className={styles.contactLink}
              href="mailto:pokrov-ltd@ukr.net"
            >
              <Image
                className="icon__svg"
                src={"/mail.svg"}
                width={20}
                height={20}
                alt="Іконка конверта"
              />
              pokrov-ltd@ukr.net
            </a>
          </li>
        </ul>
        <Social width={15} height={15}/>
        <DarkModeToggle/>
      </section>
  );
};

export default InfoPanel;

