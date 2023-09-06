import Hero from '@/components/Hero/Hero'
import Preference from '@/components/Preference/Preference'
import OurProducts from '@/components/OurProducts/OurProducts'
import QualityGuarantee from '@/components/QualityGuarantee/QualityGuarantee'
import OtherServices from '@/components/OtherServices/OtherServices'

export default function Home() {
  return (
    <section>
      <h1 className="visuallyHidden">Про компанію</h1>
      <Hero/>
      <Preference/>
      <OurProducts/>
      <QualityGuarantee/>
      <OtherServices/>
    </section>
  )
}
