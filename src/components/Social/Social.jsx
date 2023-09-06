import Image from 'next/image';
import Link from 'next/link';

import styles from '@/components/Social/Social.module.css';

const Social = ({width, height}) => {
  return (
    <ul className={styles.sociallist}>
          <li className={styles.socialItem}>
            <Link
              className={styles.socialLink}
              href="https://www.instagram.com/"
              target="_blank"
            >
              <Image
                src={"/Instagram.svg"}
                width={width}
                height={height}
                alt="Іконка Instagram"
              />
            </Link>
          </li>
          <li className={styles.socialItem}>
            <Link
              className={styles.socialLink}
              href="https://twitter.com/"
              target="_blank"
            >
              <Image
                src={"/Twitter.svg"}
                width={15}
                height={15}
                alt="Іконка Twitter"
              />
            </Link>
          </li>
          <li className={styles.socialItem}>
            <Link
              className={styles.socialLink}
              href="https://facebook.com/pokrov.ltd/"
              target="_blank"
            >
              <Image
                src={"/Facebook.svg"}
                width={15}
                height={15}
                alt="Іконка Facebook"
              />
            </Link>
          </li>
          <li className={styles.socialItem}>
            <Link
              className={styles.socialLink}
              href="https://www.linkedin.com/"
              target="_blank"
            >
              <Image
                src={"/LinkedIn.svg"}                
                width={15}
                height={15}
                alt="Іконка linkedIn"
              />
            </Link>
          </li>
        </ul>
  );
};

export default Social;