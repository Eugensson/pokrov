import OurProductsList from '../OurProductsList/OurProductsList';
import {products} from '@/data/products'

import styles from '@/components/OurProducts/OurProducts.module.css';

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