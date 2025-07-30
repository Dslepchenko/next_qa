import { Form } from "@/components/shared/form";
import Image from "next/image";
import { Rating } from "./rating";
import { RatingDesc } from "./rating_desc";
import { Header } from "./header";
import { FormContainer } from "@/components/shared/form_container";

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen bg-black bg-[url('/images/hero/mobile_bg.webp')] lg:bg-[url('/images/hero/bg.webp')] bg-cover bg-center bg-no-repeat flex items-center justify-center relative overflow-hidden"
    >
      <div className="min-h-screen mx-auto pt-5 lg:pt-10 relative z-10 h-full flex flex-col justify-between items-center max-w-[1200px]">
        <Header />
        <div className="space-y-4 py-10">
          <h1 className="font-arimo text-[32px] md:text-[64px] lg:text-[80px] leading-tight text-primary text-center font-bold ">
            לימודי הנהלת חשבונות
            <br />
            וחשבות שכר אונליין
          </h1>
        </div>

        <Image
          src="/icons/hero/misrad_avoda_group.svg"
          alt="logo"
          width={500}
          height={100}
          priority
          className="w-[200px] h-[55px]  md:w-[350px] md:h-[100px] lg:w-[500px] lg:h-[100px]"
        />

        <div className="flex gap-2 lg:gap-6  flex-col-reverse items-center lg:flex-row-reverse lg:justify-between lg:items-center">
          <div className="flex-[0.8] mt-8 lg:mt-0">
            <RatingDesc />
          </div>
          <Rating />
        </div>

        <FormContainer id="contact-form">
          <Form />
        </FormContainer>
      </div>
    </section>
  );
}
