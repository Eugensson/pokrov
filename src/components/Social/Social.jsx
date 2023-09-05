import Image from 'next/image';

import styles from '@/components/Social/Social.module.css';

const Social = ({width, height}) => {
  return (
    <ul className={styles.sociallist}>
          <li className={styles.socialItem}>
            <a
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
            </a>
          </li>
          <li className={styles.socialItem}>
            <a
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
            </a>
          </li>
          <li className={styles.socialItem}>
            <a
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
            </a>
          </li>
          <li className={styles.socialItem}>
            <a
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
            </a>
          </li>
        </ul>
  );
};

export default Social;