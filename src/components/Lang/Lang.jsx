import Link from 'next/link';
import Image from 'next/image';

import styles from '@/components/Lang/Lang.module.css';

const Lang = () => {
  return (
    <ul className={styles.list}>
          <li>
            <Link href="/">
              <Image
                src={"/ua.svg"}
                width={38}
                height={25}
                alt="Іконка з прапором України"
              />
            </Link>
          </li>
          <li>
            <Link href="/">
              <Image
                src={"/en.svg"}
                width={38}
                height={25}
                alt="Іконка з прапором Великої Британії"
              />
            </Link>
          </li>
          <li>
            <Link href="/">
              <Image
                src={"/ru.svg"}
                width={38}
                height={25}
                alt="Іконка з прапором Російської Федерації"
              />
            </Link>
          </li>
    </ul>
  );
};

export default Lang;




