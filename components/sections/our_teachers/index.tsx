import { Form } from "@/components/ui/form";
import { FormContainer } from "@/components/ui/form_container";
import { TeachersSlider } from "./teachers_slider";

export function OurTeachers() {
  return (
    <section
      id="our-teachers"
      className="min-h-screen"
      style={{
        background:
          'url("/images/our_teachers/bg.webp"), linear-gradient(90deg, #000 5.63%, #008571 96.9%)',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
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
