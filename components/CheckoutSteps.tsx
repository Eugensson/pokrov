const CheckoutSteps = ({ current = 0 }) => {
  return (
    <ul className="steps steps-vertical md:steps-horizontal w-[90%] ml-4 md:ml-0 md:my-10">
      {["Авторизація", "Доставка", "Оплата", "Замовлення"].map(
        (step, index) => (
          <li
            key={step}
            className={`step
           ${index <= current ? "step-primary" : ""}
           `}
          >
            {step}
          </li>
        )
      )}
    </ul>
  );
};

export default CheckoutSteps;
