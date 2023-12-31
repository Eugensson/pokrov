import LinkBtn from '@/components/LinkBtn/LinkBtn';

import styles from "@/app/servicesDecor/page.module.css";

export const metadata = {
  title: 'Декор | НВФ Покров',
  description: 'Декоративні елементи з нержавіючої сталі',
};

export default function ServicesDome() {
  return (
    <section className='sectionsWrapper'>
      <div className={styles.imgContainer}></div>
      <div className={styles.descriptions}>
      <h1>Декоративні елементи з нержавіючої сталі</h1>
      <p>
        Ми застосовуємо технологію напилення нітриду титану не лише на аркуші
        для покрівлі куполів та хрестів, але й на різних предметах завдяки нашим
        сучасним технологіям. Ця технологія дозволяє нам отримати ефект не
        тільки золота, але і міді, небесно-голубого або зеленого кольорів в
        поєднанні з різними поверхнями, такими як суперзеркало та шліфування
        (HL). Результатом є дивовижний вигляд предмета.
      </p>
      <p>
        Науково-виробнича фірма «Покров» гарантує атмосферостійкість напиленого
        нітрид-титанового покриття протягом 50 років згідно з результатами
        випробувань дії промислової атмосфери відповідно до нормативних
        документів ГОСТ 9.308-85, ГОСТ 9.908-85 та ГОСТ 92-1346-83 на вироби з
        магнітної нержавіючої сталі 12Х17 ГОСТ 1982-73 і немагнітної нержавіючої
        сталі 04Х18Н9 ГОСТ 19282-73.
      </p>
      <p>
        Якщо ви бажаєте дізнатися більше про напилення нітриду титану на
        декоративні елементи, звертайтеся до наших фахівців.
      </p>
      </div>      
      <div className={styles.nav}>
        <LinkBtn url="/services" text="Послуги" />
        <LinkBtn url="/portfolio/decor" text="Галерея робіт" />
      </div>
    </section>
  );
}
