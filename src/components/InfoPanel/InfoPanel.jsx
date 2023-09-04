"use client";

import Image from 'next/image';

import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';

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
        <ul className={styles.sociallist}>
          <li className={styles.socialItem}>
            <a
              className={styles.socialLink}
              href="https://www.instagram.com/"
              target="_blank"
            >
              <Image
                src={"/Instagram.svg"}
                width={15}
                height={15}
                alt="Іконка Instagram"
              />
            </a>
          </li>
          <li className={styles.socialItem}>
            <a
              className={styles.socialLink}
              href="https://twitter.com/"
              target="_blank"
            >
              <Image
                src={"/Twitter.svg"}
                width={15}
                height={15}
                alt="Іконка Twitter"
              />
            </a>
          </li>
          <li className={styles.socialItem}>
            <a
              className={styles.socialLink}
              href="https://facebook.com/pokrov.ltd/"
              target="_blank"
            >
              <Image
                src={"/Facebook.svg"}
                width={15}
                height={15}
                alt="Іконка Facebook"
              />
            </a>
          </li>
          <li className={styles.socialItem}>
            <a
              className={styles.socialLink}
              href="https://www.linkedin.com/"
              target="_blank"
            >
              <Image
                src={"/LinkedIn.svg"}                
                width={15}
                height={15}
                alt="Іконка linkedIn"
              />
            </a>
          </li>
        </ul>
        <DarkModeToggle/>
      </section>
  );
};

export default InfoPanel;

