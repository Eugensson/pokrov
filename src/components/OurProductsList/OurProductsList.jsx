import OurProductsItem from '../OurProductsItem/OurProductsItem';

import styles from '@/components/OurProductsList/OurProductsList.module.css';

const OurProductsList = ({products}) => {
  return (
    <ul className={styles.list}>
        {products.map(({id, href, src, title, descr}) => {        
        return (
            <li key={id} className={styles.item}>
                <OurProductsItem href={href} src={src} title={title} descr={descr}/>                
            </li>
        );
      })}        
    </ul>    
  );
};

export default OurProductsList;