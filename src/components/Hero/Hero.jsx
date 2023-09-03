import styles from '@/components/Hero/Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.wrapper}>
        <p className={styles.title}>
          Збережіть метал в його найкращому вигляді та додайте естетики вашим
          виробам з нашим покриттям!
        </p>
    </section>
  );
};

export default Hero;