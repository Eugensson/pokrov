import Image from 'next/image';
import Vector from '../../../public/Vector.svg';

import styles from '@/components/Sertificate/Sertificate.module.css';

const Sertificate = ({text}) => {
  return (
    <div className={styles.wrapper}>
        <Image src={Vector} alt="Icon" />
        <p className={styles.text}>{text}</p>        
    </div>    
  );
};

export default Sertificate;