import { FaAward } from "react-icons/fa";

const QualityGuarantee = () => {
  return (
    <section className="flex flex-col mx-auto">
      <h2 className="divider divider-accent py-1 md:py-2 xl:py-5 text-lg font-semibold uppercase">
        Гарантія якості
      </h2>
      <p className="mb-5">
        Ми забезпечуємо надійність наших виробів протягом 50 років. Вся
        продукція відповідає ТУ У 25.6-37651685-001:2012 &quot;Покриття металеві
        іонно-плазмові&quot; та підтверджена сертифікатом якості. Програма
        гарантії якості виробництва була розроблена для задоволення вимог нашого
        ринку, включаючи:
      </p>
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-1 md:gap-2 xl:gap-4">
        <li className="card glass">
          <div className="card-body">
            <FaAward className="w-10 h-10 mx-auto mb-3 text-primary" />
            <p className="text-center">
              TУУ25.6-37651685-001:2012 &quot;Покриття металеві іонно-плазмові.
              Технічні умови&quot;
            </p>
          </div>
        </li>
        <li className="card glass">
          <div className="card-body">
            <FaAward className="w-10 h-10 mx-auto mb-3 text-primary" />
            <p className="text-center">
              Сертифікат відповідності (якості) UA1.012.0006075
            </p>
          </div>
        </li>
        <li className="card glass">
          <div className="card-body">
            <FaAward className="w-10 h-10 mx-auto mb-3 text-primary" />
            <p className="text-center">
              Сертифікат відповідності (якості) UA1.012.0017193
            </p>
          </div>
        </li>
        <li className="card glass">
          <div className="card-body">
            <FaAward className="w-10 h-10 mx-auto mb-3 text-primary" />
            <p className="text-center">
              ГОСТ9.308, ГОСТ9.908, OCT92-1346, ГОСТ1982, ГОСТ19282
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default QualityGuarantee;
