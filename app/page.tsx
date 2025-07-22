import { HeroSection } from "@/components/sections/hero";
import { AnswersQuestions } from "@/components/sections/answers_questions";
import { WhyChooseUs } from "@/components/sections/why_choose_us";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <WhyChooseUs />
        <AnswersQuestions />
      </main>
    </>
  );
}
