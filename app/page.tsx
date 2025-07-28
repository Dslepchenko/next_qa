import { HeroSection } from "@/components/sections/hero";
import { AnswersQuestions } from "@/components/sections/answers_questions";
import { WhyChooseUs } from "@/components/sections/why_choose_us";
import { OurTeachers } from "@/components/sections/our_teachers";
import { SuccessStory } from "@/components/sections/success_story";
import { VideoReviews } from "@/components/sections/video_reviews";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <VideoReviews />
        <WhyChooseUs />
        <SuccessStory />
        <OurTeachers />
        <AnswersQuestions />
      </main>
    </>
  );
}
