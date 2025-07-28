import { Form } from "@/components/shared/form";
import { FormContainer } from "@/components/shared/form_container";
import { TeachersSlider } from "./teachers_slider";

export function OurTeachers() {
  return (
    <section id="our-teachers" className="min-h-screen our-teachers-bg">
      <div className="min-h-screen flex flex-col mx-auto w-full items-center justify-end pt-10 lg:pt-20">
        <div className="flex-1 flex items-end">
          <TeachersSlider />
        </div>
        <FormContainer>
          <Form />
        </FormContainer>
      </div>
    </section>
  );
}
