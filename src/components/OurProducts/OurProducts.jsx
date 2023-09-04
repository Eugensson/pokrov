import OurProductsList from '../OurProductsList/OurProductsList';

import styles from '@/components/OurProducts/OurProducts.module.css';

const products = [
  {
  "id": "1",
  "href": "/servicesDome",
  "src": "/domes.jpg",
  "title": "Проектування та виготовлення куполів для церков та соборів",
  "descr": "Маківка куполу"
  },
  {
  "id": "2",
  "href": "/servicesCross",
  "src": "/cross.jpg",
  "title": "Проектування та виготовлення накупольних хрестів",
  "descr": "Хрест"
  },
  {
  "id": "3",
  "href": "/servicesSheets",
  "src": "/sheets.jpg",
  "title": "Реалізація аркушів з нержавіючої сталі",
  "descr": "Листова сталь з нанесенним покриттям"
  },
  {
    "id": "4",
    "href": "/servicesDecor",
    "src": "/decor.jpg",
    "title": "Декоративні елементи з нержавіючої сталі",
    "descr": "Декоративні елементи з нанесеним покриттям"
  }
]

const OurProducts = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.descriptions}>
          <p className={styles.text}>ТОВ НВФ Покров спеціалізується на напиленні нітрид-титану на листову нержавіючу сталь та декоративні елементи (рушникосушки, поручні для басейнів, змішувачі тощо). Наші послуги допоможуть зберегти метал в найкращому вигляді, забезпечуючи стійкість до корозії та зносу, а також створюючи естетичний вигляд для вашого обладнання. Звертайтеся до нас і отримуйте найкращі рішення для вашого бізнесу!</p>
          <h2 className={styles.subtitle}>Наша продукція</h2>
      </div>
      <OurProductsList products={products}/>      
    </section>
  );
};

export default OurProducts;