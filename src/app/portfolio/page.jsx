import Link from 'next/link';
import styles from '@/app/portfolio/page.module.css';

export const metadata = {
  title: 'Галерея робіт | НВФ Покров',
};

const Portfolio = () => {
  return (
    <section className={styles.portfolio}>
      <h1>Галерея робіт</h1>
      <div className={styles.items}>
        <Link href="/portfolio/domes" className={styles.item}>
          <span className={styles.title}>Куполи</span>
        </Link>
        <Link href="/portfolio/cross" className={styles.item}>
          <span className={styles.title}>Хрести</span>
        </Link>
        <Link href="/portfolio/sheets" className={styles.item}>
          <span className={styles.title}>Аркуші</span>
        </Link>
        <Link href="/portfolio/decor" className={styles.item}>
          <span className={styles.title}>Декор</span>
        </Link>
      </div>
    </section>
  );
};

export default Portfolio;
