"use client";

import { useState, useEffect } from "react";
import toast from "react-hot-toast";

interface Inputs {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [inputs, setInputs] = useState<Inputs>(() => {
    const storedData = localStorage.getItem("contactFormInputs");
    return storedData
      ? JSON.parse(storedData)
      : { name: "", email: "", message: "" };
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem("contactFormInputs", JSON.stringify(inputs));
  }, [inputs]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, message } = inputs;

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Поля не повинні бути порожніми");
      return;
    }

    toast.success("Інформація успішно відправлена! Дякуємо.");

    setInputs({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="w-full card p-2 lg:p-6 bg-base-300 shadow-2xl">
      <h1 className="card-title mx-auto mb-2 lg:mb-10 uppercase">
        Форма зв&apos;язку
      </h1>
      <form
        className="flex flex-col gap-2 w-full max-w-md mx-auto"
        onSubmit={handleFormSubmit}
      >
        <label className="flex flex-col gap-1 justify-start">
          Ім&apos;я
          <input
            type="text"
            name="name"
            value={inputs.name}
            onChange={handleChange}
            className="input input-bordered w-full max-w-md"
          />
        </label>

        <label className="flex flex-col gap-1 justify-start">
          Email
          <input
            type="text"
            name="email"
            value={inputs.email}
            onChange={handleChange}
            className="input input-bordered w-full max-w-md"
          />
        </label>

        <label className="flex flex-col gap-1 justify-start">
          Повідомлення:
          <textarea
            className="textarea w-full max-w-md textarea-bordered"
            name="message"
            value={inputs.message}
            onChange={handleChange}
            placeholder="Залиште свій коментар..."
          ></textarea>
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary w-full max-w-md mt-0 lg:mt-10"
        >
          {isSubmitting && <span className="loading loading-spinner"></span>}
          Надіслати
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
