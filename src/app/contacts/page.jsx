import Image from "next/image";
import Link from "next/link";

import styles from '@/app/contacts/page.module.css';

export const metadata = {
  title: 'Контакти',
  description: "Контактна інформація про компанію",
};

const Contacts = () => {
  return (
    <section className={styles.contacts}>
      <h1>Контакти</h1>
      <ul className={styles.list}>
        <li className={styles.item}>
          <h2 className={styles.subtitle}>Зателефонуйте:</h2>
          <div className={styles.info}>
            <div className={styles.infoList}>
              <Link className={styles.link} href="tel:+380965300300">
                +38 096 5-300-300
              </Link>
              <Link className={styles.link} href="tel:+380665300300">
                +38 066 5-300-300
              </Link>
              <Link className={styles.link} href="tel:+380682300300">
                +38 068 2-300-300
              </Link>
            </div>
            <Image
              src={"/phone.svg"}
              width={40}
              height={40}
              alt="Icon phone"
            />
          </div>
        </li>
        <li className={styles.item}>
          <h2 className={styles.subtitle}>Напишіть нам:</h2>
          <div className={styles.info}>
            <Link className={styles.link} href="mailto:pokrov-ltd@ukr.net">
              pokrov-ltd@ukr.net
            </Link>
            <Image
              src={"/mail.svg"}
              width={40}
              height={40}
              alt="Icon mail"
            />
          </div>
        </li>
        <li className={styles.item}>
          <h2 className={styles.subtitle}>Завітайте до нас:</h2>
          <div className={styles.info}>
            <div className={styles.infoList}>
              <span className={styles.text}>Україна,</span>
              <span className={styles.text}>Черкаська область,</span>
              <span className={styles.text}>м. Черкаси,</span>
              <span className={styles.text}>вул. М. Залізняка, 167</span>
            </div>
            <Image
              src={"/location.svg"}
              width={40}
              height={40}
              alt="Icon location"
            />
          </div>
        </li>
      </ul>
      <div className={styles.wrapper}>
        <div className={styles.form}>
          <h2 className={styles.subtitle}>Форма зворотнього зв’язку</h2>
        </div>
        <div className={styles.map}>
          <h2 className={styles.subtitle}>Мапа проїзду</h2>                   
        </div>
      </div>
    </section>
  );
};

export default Contacts;