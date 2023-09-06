import Image from 'next/image';
import Link from 'next/link';

import LinkBtn from '@/components/LinkBtn/LinkBtn';

import styles from '@/app/services/page.module.css';

export const metadata = {
  title: 'Послуги | НВФ Покров',
  description: 'Послуги компанії',
};

const Services = () => {
  return (
    <section className='sectionsWrapper'>
      <div className={styles.imgContainer}>
        <div className={styles.imgText}>
          <h1 className={styles.visuallyHidden}>Послуги</h1>
        </div>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h2 className={styles.title}>Хто ми?</h2>
          <p className={styles.desc}>
            ТОВ НВФ Покров спеціалізується на напиленні нітрид-титану на листову
            нержавіючу сталь та декоративні елементи (рушникосушки, поручні для
            басейнів, змішувачі тощо).
          </p>
          <p className={styles.desc}>
            Наші послуги допоможуть зберегти метал в найкращому вигляді,
            забезпечуючи стійкість до корозії та зносу, а також створюючи
            естетичний вигляд для вашого обладнання. Звертайтеся до нас і
            отримуйте найкращі рішення для вашого бізнесу!
          </p>
          <p className={styles.desc}>
            Ми прагнемо до постійного розвитку, закупівлі інноваційного
            обладнання та вдосконалення робочих місць. Це є необхідним для
            забезпечення високої якості виготовленої продукції та покращення
            обслуговування клієнтів. Ми хочемо, щоб ви були задовленні вибором
            саме нашої компанії, та мали бажання розповісти про це всім.
          </p>
        </div>

        <div className={styles.item}>
          <h2 className={styles.title}>Чим ми займаємось?</h2>
          <ul className={styles.list}>
            <li>
              <Link className={styles.link} href="/servicesDome">
                Проектування та виготовлення куполів
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="/servicesCross">
                Проектування та виготовлення накупольних хрестів
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="/servicesSheets">
                Реалізація аркушів із нержавіючої сталі
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="/servicesDecor">
                Декоративні елементи з нержавіючої сталі
              </Link>
            </li>
          </ul>

          <LinkBtn url="/contacts" text="Контакти" />
        </div>
      </div>
    </section>
  );
};

export default Services;