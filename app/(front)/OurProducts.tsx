import { testimonials } from "@/constants";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const OurProducts = () => {
  return (
    <section className="flex flex-col">
      <h2 className="divider divider-accent py-1 md:py-2 xl:py-5 text-lg font-semibold uppercase">
        Продукція
      </h2>
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
