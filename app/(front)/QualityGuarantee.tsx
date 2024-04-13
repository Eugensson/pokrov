import { FaAward } from "react-icons/fa";

const QualityGuarantee = () => {
  return (
    <section className="flex flex-col bg-base-300 rounded-lg shadow-xl py-1  md:py-3">
      <div className="flex flex-col md:flex-row-reverse md:items-center gap-4 mb-1 p-2 md:p-5 xl:p-10">
        <h2 className="text-xl md:text-2xl xl:text-3xl md:text-right font-bold uppercase md:w-[25%]">
          Гарантія якості
        </h2>
        <p className="text-xs md:text-base xl:text-lg md:w-[75%]">
          Ми забезпечуємо надійність наших виробів протягом 50 років. Вся
          продукція відповідає ТУ У 25.6-37651685-001:2012 &quot;Покриття
          металеві іонно-плазмові&quot; та підтверджена сертифікатом якості.
          Програма гарантії якості виробництва була розроблена для задоволення
          вимог нашого ринку, включаючи:
        </p>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 md:gap-2 xl:gap-4 py-1 md:py-3">
        <li className="card gap-2 md:gap-4 bg-base-100 border shadow-xl p-2">
          <FaAward className="w-10 h-10 md:w-16 md:h-16 xl:w-20 xl:h-20 text-primary mx-auto" />
          <p className="font-bold text-xs md:text-lg text-center">
            TУ У 25.6-37651685-001:2012
            <br /> &quot;Покриття металеві іонно-плазмові. Технічні умови&quot;
          </p>
        </li>
        <li className="card gap-2 md:gap-4 bg-base-100 border shadow-xl p-2">
          <FaAward className="w-10 h-10 md:w-16 md:h-16 xl:w-20 xl:h-20 text-primary mx-auto" />
          <p className="font-bold text-xs md:text-lg text-center">
            Сертифікат відповідності
            <br /> (якості)
            <br /> UA1.012.0006075
          </p>
        </li>
        <li className="card gap-2 bg-base-100 border shadow-xl p-2">
          <FaAward className="w-10 h-10 md:w-16 md:h-16 xl:w-20 xl:h-20 text-primary mx-auto" />
          <p className="font-bold text-xs md:text-lg text-center">
            Сертифікат відповідності
            <br /> (якості)
            <br /> UA1.012.0017193
          </p>
        </li>
        <li className="card gap-2 bg-base-100 border shadow-xl p-2">
          <FaAward className="w-10 h-10 md:w-16 md:h-16 xl:w-20 xl:h-20 text-primary mx-auto" />
          <p className="font-bold text-xs md:text-lg text-center">
            ГОСТ 9.308, ГОСТ 9.908,
            <br /> OCT 92-1346,
            <br /> ГОСТ 1982, ГОСТ 19282
          </p>
        </li>
      </ul>
    </section>
  );
};

export default QualityGuarantee;
