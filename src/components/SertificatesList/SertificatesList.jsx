import Sertificate from '@/components/Sertificate/Sertificate';

import styles from '@/components/SertificatesList/SertificatesList.module.css';

const SertificatesList = ({sertificates}) => {
  return (
    <ul className={styles.sertificatesList}>
        {sertificates.map(({id, text}) => {        
        return (
            <li key={id}>
                <Sertificate text={text}/>
            </li>
        );
      })}        
    </ul>    
  );
};

export default SertificatesList;