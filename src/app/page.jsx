import Hero from '@/components/Hero/Hero'
import Preference from '@/components/Preference/Preference'
import OurProducts from '@/components/OurProducts/OurProducts'
import QualityGuarantee from '@/components/QualityGuarantee/QualityGuarantee'
import OtherServices from '@/components/OtherServices/OtherServices'

import styles from '@/app/page.module.css'

export default function Home() {
  return (
    <section>
      <h1 className={styles.visuallyHidden}> Про компанію</h1>
      <Hero/>
      <Preference/>
      <OurProducts/>
      <QualityGuarantee/>
      <OtherServices/>
    </section>
  )
}
