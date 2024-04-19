import { testimonials } from "@/constants";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const OurProducts = () => {
  return (
    <section className="flex flex-col mx-auto">
      <div className="divider divider-accent py-10 text-2xl font-bold uppercase">
        Продукція
      </div>
      <p className="mb-5">
        TOB &quot;НВФ &quot;Покров&quot; спеціалізується на напиленні
        нітрид-титану на різноманіьні вироби. Таке покриття допоможе зберегти
        продукцію в найкращому вигляді, забезпечуючи стійкість до корозії та
        зносу, а також створюючи естетичний вигляд. Звертаючись до нас ви
        отримаєту найкращі рішення для вашого бізнесу!
      </p>
      <InfiniteMovingCards items={testimonials} speed="slow" />
    </section>
  );
};

export default OurProducts;
