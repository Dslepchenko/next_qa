import { Form } from "@/components/ui/form";
import { FeaturesList } from "./features_list";
import { FormContainer } from "@/components/ui/form_container";

export function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="min-h-screen bg-why-choose-us bg-[url('/images/why_choose_us/bg_mobile.webp')] lg:bg-[url('/images/why_choose_us/bg.webp')] bg-black bg-contain bg-center bg-no-repeat "
    >
      <div className="mx-auto  min-h-screen pt-10 lg:pt-20 flex flex-col items-center justify-between gap-4 h-full">
        <h2 className="text-[32px] lg:text-[64px] font-bold text-primary">
          למה לבחור בנו?
        </h2>
        <h3 className="text-[16px] lg:text-[24px] font-normal text-white text-center">
          קורסים פרקטיים, תמיכה אישית, ותוצאות <br />
          אמיתיות – זה מה שמייחד אותנו.
        </h3>
        <FeaturesList />
        <FormContainer>
          <Form />
        </FormContainer>
      </div>
    </section>
  );
}
