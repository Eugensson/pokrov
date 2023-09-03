import Image from 'next/image'
import Link from 'next/link'
import styles from '@/app/page.module.css'
import LinkBtn from '@/components/LinkBtn/LinkBtn'

export default function Home() {
  return (
    <section className={styles.about}>
      <h1 className={styles.visuallyHidden}> Про компанію</h1>
      <section className={styles.hero}>
        <p className={styles.hero__title}>
          Збережіть метал в його найкращому вигляді та додайте естетики вашим
          виробам з нашим покриттям!
        </p>
      </section>
      <section className={styles.preference}>
        <h2 className={styles.visuallyHidden}>Наші перваги</h2>
        <ul className={styles.preferenceCard__list}>
          <li className={styles.preferenceCard__item}>
            <Image
              className={styles.preferenceCard__image}
              src={"/pref1.jpg"}
              width={350}
              height={350}
              alt="Робітник біля продукції"
            />
            <Image
              className={styles.preferenceCard__logo}
              src={"/prefIcon1.svg"}
              width={100}
              height={100}
              alt="Іконка з латинськоб літерою P"
            />
            <h3 className={styles.preferenceCard__text}>Продукція та послуги</h3>
            <p className={styles.preferenceCard__overlay}>
              Науково-виробнича фірма «Покров» займається напиленням
              нітрид-титану на листову нержавіючу сталь і найрізноманітніші
              декоративні елементи (рушникосушки, поручні басейнів, змішувачі
              тощо).
              <LinkBtn text="Докладніше" url="/services"/>
            </p>
          </li>
          <li className={styles.preferenceCard__item}>
            <Image
              className={styles.preferenceCard__image}
              src={"/pref2.jpg"}
              width={350}
              height={350}
              alt="Робітник біля продукції"
            />
            <Image
              className={styles.preferenceCard__logo}
              src={"/prefIcon2.svg"}
              width={100}
              height={100}
              alt="Іконка з шестернею"
            />
            <h3 className={styles.preferenceCard__text}>Можливості</h3>
            <p className={styles.preferenceCard__overlay}>
              Технологія вакуумного напилення, також відома як фізичне
              відкладення парової фази (PVD), є процесом, при якому тонкі шари
              матеріалу відкладаються на поверхні іншого матеріалу за допомогою
              вакуумної камери...
              <LinkBtn text="Докладніше" url="/technology"/>
            </p>
          </li>
          <li className={styles.preferenceCard__item}>
            <Image
              className={styles.preferenceCard__image}
              src={"/pref3.jpg"}
              width={350}
              height={350}
              alt="Робітник біля продукції"
            />
            <Image
              className={styles.preferenceCard__logo}
              src={"/prefIcon3.svg"}
              width={100}
              height={100}
              alt="Іконка з галочкою"
            />
            <h3 className={styles.preferenceCard__text}>Гарантія якості</h3>
            <p className={styles.preferenceCard__overlay}>
              Ми гарантуємо 50-річну стійкість наших виробів, вкритих нітридом
              титану, до дії атмосферних (в тому числі, й агресивних, і
              промислових) явищ. Строк гарантії отриманий за результатами
              проведених досліджень на вплив промислової атмосфери...
              <LinkBtn text="Докладніше" url="/assurance"/>
            </p>
          </li>
        </ul>
        <div className={styles.prefDescrWrapper}>
          <div className={styles.prefDescrTech}>
            <h3 className={styles.prefDescrTech__subtitle}>
              Технологія вакуумного напилення
            </h3>
            <p className={styles.prefDescrTech__text}>
              Застосування технології іонно-плазмового вакуумного напилення є
              оптимальним вибором для виробників, оскільки вона забезпечує
              високу якість, стійкість та естетичний вигляд продукції.
            </p>
            <p className={styles.prefDescrTech__text}>
              Основні переваги технології &raquo;&raquo;&raquo;
            </p>
          </div>
          <div className={styles.prefDescrInfoGroup}>
            <div className={styles.prefDescrInfo}>
              <Image
                src={"/checked.svg"}
                width={40}
                height={40}
                alt="Icon"
              />
              <p className={styles.prefDescrTech__text}>
                <b>Стійкість до впливу атмосферних явищ та хімічних речовин:</b>
                <br />
                покриття забезпечує захист поверхні від впливу атмосферних явищ
                та хімічних речовин, що підвищує стійкість та надійність
                виробів.
              </p>
            </div>
            <div className={styles.prefDescrInfo}>
              <Image
                src={"/checked.svg"}
                width={40}
                height={40}
                alt="Icon"
              />
              <p className={styles.prefDescrTech__text}>
                <b>Стійкість до корозії:</b>
                <br />
                покриття має високу стійкість до корозії, що забезпечує тривалий
                термін експлуатації виробів.
              </p>
            </div>
            <div className={styles.prefDescrInfo}>
              <Image
                src={"/checked.svg"}
                width={40}
                height={40}
                alt="Icon"
              />
              <p className={styles.prefDescrTech__text}>
                <b>Контроль кольору та відбиваності:</b>
                <br />
                високотехнологічне обладнання дозволяє регулювати колір
                покриття, відтінки кольорів та рівень відбиваності поверхні (від
                дзеркальної до матової).
              </p>
            </div>
            <div className={styles.prefDescrInfo}>
              <Image
                src={"/checked.svg"}
                width={40}
                height={40}
                alt="Icon"
              />
              <p className={styles.prefDescrTech__text}>
                <b>Екологічна безпека:</b>
                <br />
                процес виконується в вакуумі, що дозволяє знизити рівень
                забруднення довкілля.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
