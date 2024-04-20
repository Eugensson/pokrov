"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { SubmitHandler, ValidationRule, useForm } from "react-hook-form";

import useCartService from "@/lib/hooks/useCartStore";
import CheckoutSteps from "@/components/CheckoutSteps";
import { ShippingAddress } from "@/lib/models/OrderModel";

const Form = () => {
  const router = useRouter();

  const { saveShippingAddrress, shippingAddress } = useCartService();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ShippingAddress>({
    defaultValues: {
      fullName: "",
      address: "",
      city: "",
      postalCode: "",
    },
  });

  useEffect(() => {
    setValue("fullName", shippingAddress.fullName);
    setValue("address", shippingAddress.address);
    setValue("city", shippingAddress.city);
    setValue("postalCode", shippingAddress.postalCode);
  }, [setValue, shippingAddress]);

  const formSubmit: SubmitHandler<ShippingAddress> = async (form) => {
    saveShippingAddrress(form);
    router.push("/payment");
  };

  const FormInput = ({
    id,
    name,
    required,
    pattern,
  }: {
    id: keyof ShippingAddress;
    name: string;
    required?: boolean;
    pattern?: ValidationRule<RegExp>;
  }) => (
    <div className="mb-2">
      <label className="label" htmlFor={id}>
        {name}
      </label>
      <input
        type="text"
        id={id}
        {...register(id, {
          required: required && `${name} обов'язкове поле`,
          pattern,
        })}
        className="input input-bordered w-full max-w-sm"
      />
      {errors[id]?.message && (
        <div className="text-error">{errors[id]?.message}</div>
      )}
    </div>
  );

  return (
    <div>
      <CheckoutSteps current={1} />
      <div className="max-w-sm mx-auto card bg-base-300 my-4">
        <div className="card-body p-4">
          <h1 className="card-title mx-auto">Адреса доставки</h1>
          <form onSubmit={handleSubmit(formSubmit)}>
            <FormInput name="П.І.Б." id="fullName" required />
            <FormInput name="Індекс" id="postalCode" required />
            <FormInput name="Місто" id="city" required />
            <FormInput name="Адреса" id="address" required />
            <div className="my-5">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full"
              >
                {isSubmitting && (
                  <span className="loading loading-spinner"></span>
                )}
                Далі
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Form;
