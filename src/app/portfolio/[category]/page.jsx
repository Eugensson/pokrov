import styles from './page.module.css';
import { items } from './data';
import { notFound } from 'next/navigation';
import SwiperComponent from '@/components/SwiperComponent/SwiperComponent';
import LinkBtn from '@/components/LinkBtn/LinkBtn';

const getData = cat => {
  const data = items[cat];

  if (data) {
    return data;
  }
  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <LinkBtn text="До галереї" url="/portfolio"/>      
        <SwiperComponent spaceBetween={10} slidesPerView={1} data={data} width={900} height={600} />
      </div>
    </div>    
  );
};

export default Category;