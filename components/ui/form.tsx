"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Form() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    agreedToTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // There will be form submission logic
    console.log("Форма отправлена:", formData);
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
      {/* DESKTOP: horizontal layout */}
      <div className="hidden lg:flex lg:flex-row-reverse gap-4 mb-4">
        <Button
          type="submit"
          disabled={!isFormValid}
          className={`h-[60px] text-[20px] text-black shadow font-bold flex-1 transition-all ${
            isFormValid
              ? "bg-yellow-300 hover:bg-yellow-300/90 cursor-pointer"
              : "bg-yellow-300 hover:bg-yellow-300/90 cursor-not-allowed opacity-90"
          }`}
        >
          לשיחת ייעוץ ללא התחייבות
        </Button>

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

        <Button
          type="submit"
          disabled={!isFormValid}
          className={`w-full h-[40px] text-[20px] text-black shadow font-bold transition-all ${
            isFormValid
              ? "bg-yellow-300 hover:bg-yellow-300/90 cursor-pointer"
              : "bg-yellow-300 hover:bg-yellow-300/90 cursor-not-allowed opacity-90"
          }`}
        >
          לשיחת ייעוץ ללא התחייבות
        </Button>

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
