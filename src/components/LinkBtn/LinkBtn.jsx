import Link from 'next/link';

import styles from '@/components/LinkBtn/LinkBtn.module.css';

const LinkBtn = ({ text, url }) => {
  return (
    <Link href={url} className={styles.container}>
      {text}
    </Link>
  );
};

export default LinkBtn;