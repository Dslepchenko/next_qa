"use client";

import { useState } from "react";
import { GoldButton } from "./gold_button";

export function Form() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    agreedToTerms: true,
    honeypot: "", // антиспам поле
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot проверка - если поле заполнено, это спам
    if (formData.honeypot !== "") {
      console.log("Спам обнаружен, форма не отправлена");
      return;
    }

    try {
      const response = await fetch(
        "https://hook.eu1.make.com/5tw94wecxv3fs7qsz4o7afj4b1oy04bj",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            phone: formData.phone,
            agreedToTerms: formData.agreedToTerms,
            timestamp: new Date().toISOString(),
          }),
        }
      );

      if (response.ok) {
        console.log("Форма успешно отправлена на вебхук");
        // Очищаем форму после успешной отправки
        setFormData({
          name: "",
          phone: "",
          agreedToTerms: false,
          honeypot: "",
        });
      } else {
        console.error("Ошибка при отправке формы:", response.status);
      }
    } catch (error) {
      console.error("Ошибка при отправке формы:", error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const isFormValid =
    formData.name.trim() !== "" &&
    formData.phone.trim() !== "" &&
    formData.agreedToTerms;

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 text-right w-full max-w-[1000px] mx-auto"
    >
      {/* Honeypot поле - скрытое от пользователей */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={handleInputChange}
        tabIndex={-1}
        autoComplete="off"
        className="absolute top-0 left-0 w-0 h-0 opacity-0 overflow-hidden border-0 p-0 m-0"
        aria-hidden="true"
      />

      {/* DESKTOP: horizontal layout */}
      <div className="hidden lg:flex lg:flex-row-reverse gap-4 mb-4">
        <GoldButton
          type="submit"
          disabled={!isFormValid}
          className="h-[60px] text-[20px] flex-1"
        >
          לשיחת ייעוץ ללא התחייבות
        </GoldButton>

        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="טלפון"
          className="flex-1 h-[60px] px-4 border outline-none bg-white text-right"
          required
        />

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="שם מלא"
          className="flex-1 h-[60px] px-4 border outline-none bg-white text-right"
          required
        />
      </div>

      {/* MOBILE/TABLET: vertical layout */}
      <div className="flex flex-col gap-4 lg:hidden">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="שם מלא"
          className="w-full h-[40px] px-4 border outline-none bg-white text-right"
          required
        />

        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="טלפון"
          className="w-full h-[40px] px-4 border outline-none bg-white text-right"
          required
        />

        <label className="flex flex-row items-center gap-2 text-[16px] font-[600] text-black cursor-pointer">
          <input
            type="checkbox"
            name="agreedToTerms"
            checked={formData.agreedToTerms}
            onChange={handleInputChange}
            required
            className="w-4 h-4 appearance-none border-2 border-black bg-white checked:bg-yellow-400 checked:border-black focus:outline-none"
          />
          בהרשמתך הינך מסכימ/ה עם מדיניות הפרטיות של האתר
        </label>

        <GoldButton
          type="submit"
          disabled={!isFormValid}
          className="w-full h-[40px] text-[20px]"
        >
          לשיחת ייעוץ ללא התחייבות
        </GoldButton>

        <span className="text-[16px] font-[600] text-black text-center">
          המנהל שלנו יצור איתך קשר תוך 10 דקות.
        </span>
      </div>

      {/* DESKTOP: bottom text and checkbox */}
      <div className="hidden lg:flex flex-row-reverse justify-between items-center text-[16px] font-[600] text-black">
        <span>המנהל שלנו יצור איתך קשר תוך 10 דקות.</span>
        <label className="flex flex-row items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            name="agreedToTerms"
            checked={formData.agreedToTerms}
            onChange={handleInputChange}
            required
            className="w-4 h-4 appearance-none border-2 border-black bg-white checked:bg-yellow-400 checked:border-black focus:outline-none"
          />
          בהרשמתך הינך מסכימ/ה עם מדיניות הפרטיות של האתר
        </label>
      </div>
    </form>
  );
}
