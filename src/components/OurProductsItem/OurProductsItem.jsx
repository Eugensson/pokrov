import Link from 'next/link';
import Image from 'next/image';

import styles from '@/components/OurProductsItem/OurProductsItem.module.css';

const OurProductsItem = ({href, src, title, descr}) => {
  return (
    <Link className={styles.card} href={href}>
        <Image
        src={src}
        width={300}
        height={300}
        alt={descr}
        />
        <p className={styles.title}>
          {title}
        </p>
    </Link>
  );
};

export default OurProductsItem;