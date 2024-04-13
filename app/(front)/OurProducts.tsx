import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "https://res.cloudinary.com/dhkadb6du/image/upload/v1693843590/sheets-4_yrjloi.jpg",
  },
  {
    quote:
      "https://res.cloudinary.com/dhkadb6du/image/upload/v1693842163/decor-15_tc33jm.jpg",
  },
  {
    quote:
      "https://res.cloudinary.com/dhkadb6du/image/upload/v1693841763/decor-3_g6p4ev.jpg",
  },
  {
    quote:
      "https://res.cloudinary.com/dhkadb6du/image/upload/v1693841759/decor-6_on8zvs.jpg",
  },
  {
    quote:
      "https://res.cloudinary.com/dhkadb6du/image/upload/v1693841750/decor-14_f6vdqt.jpg",
  },
  {
    quote:
      "https://res.cloudinary.com/dhkadb6du/image/upload/v1693841743/decor-21_xexlag.jpg",
  },
  {
    quote:
      "https://res.cloudinary.com/dhkadb6du/image/upload/v1693841736/decor-27_eoeczw.jpg",
  },
  {
    quote:
      "https://res.cloudinary.com/dhkadb6du/image/upload/v1693841734/decor-29_sh83dr.jpg",
  },
  {
    quote:
      "https://res.cloudinary.com/dhkadb6du/image/upload/v1693838381/pokrov/domes-16_ddevpm.jpg",
  },
  {
    quote:
      "https://res.cloudinary.com/dhkadb6du/image/upload/v1693838381/pokrov/domes-20_btep8h.jpg",
  },
  {
    quote:
      "https://res.cloudinary.com/dhkadb6du/image/upload/v1693838380/pokrov/domes-9_d3tara.jpg",
  },
  {
    quote:
      "https://res.cloudinary.com/dhkadb6du/image/upload/v1693838379/pokrov/domes-15_gcfrar.jpg",
  },
];

const OurProducts = () => {
  return (
    <section className="flex flex-col bg-base-300 rounded-lg shadow-xl py-1 md:py-3">
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-1 p-2 md:p-5 xl:p-10">
        <h2 className="text-base md:text-2xl xl:text-3xl font-bold uppercase md:w-[25%]">
          Наша продукція
        </h2>
        <p className="text-xs md:text-base xl:text-lg md:w-[75%]">
          TOB &quot;НВФ &quot;Покров&quot; спеціалізується на напиленні
          нітрид-титану на різноманіьні вироби. Таке покриття допоможе зберегти
          продукцію в найкращому вигляді, забезпечуючи стійкість до корозії та
          зносу, а також створюючи естетичний вигляд. Звертаючись до нас ви
          отримаєту найкращі рішення для вашого бізнесу!
        </p>
      </div>
      <InfiniteMovingCards items={testimonials} speed="slow" />
    </section>
  );
};

export default OurProducts;
