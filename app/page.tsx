import { HeroSection } from "@/components/sections/hero";
import { AnswersQuestions } from "@/components/sections/answers_questions";
import { WhyChooseUs } from "@/components/sections/why_choose_us";
import { OurTeachers } from "@/components/sections/our_teachers";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <WhyChooseUs />
        <AnswersQuestions />
        <OurTeachers />
      </main>
    </>
  );
}
