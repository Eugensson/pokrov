import SertificatesList from '@/components/SertificatesList/SertificatesList';
import {sertificates} from '@/data/sertificates';

import styles from '@/components/QualityGuarantee/QualityGuarantee.module.css';

const QualityGuarantee = () => {
  return (
    <section className={styles.wrapper}>
        <div className={styles.descriptions}>
          <h2 className={styles.subtitle}>Гарантія якості</h2>
            <p>Ми забезпечуємо надійність наших виробів протягом 50 років завдяки високоякісному покриттю їх нітридом титану, що захищає від атмосферних факторів, включаючи агресивні та промислові умови.
              <br/>Вся продукція, що виготовляється підприємством, відповідає нормативним документам за ТУ У 25.6-37651685-001:2012 “Покриття металеві іонно-плазмові” та підтверджена сертифікатом якості.
              <br/>Програма гарантії якості виробництва ТОВ “НВФ “Покров” була розроблена для задоволення вимог нашого ринку, включаючи наступні галузеві норми:  
            </p>
        </div>
        <SertificatesList sertificates={sertificates}/>
    </section>
  );
};

export default QualityGuarantee;