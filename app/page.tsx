import { HeroSection } from "@/components/sections/hero";
import dynamic from "next/dynamic";

const VideoReviews = dynamic(
  () =>
    import("@/components/sections/video_reviews").then((mod) => ({
      default: mod.VideoReviews,
    })),
  {
    loading: () => <div className="min-h-[80vh] bg-gray-100 animate-pulse" />,
  }
);

const WhyChooseUs = dynamic(
  () =>
    import("@/components/sections/why_choose_us").then((mod) => ({
      default: mod.WhyChooseUs,
    })),
  {
    loading: () => <div className="min-h-screen bg-gray-100 animate-pulse" />,
  }
);

const SuccessStory = dynamic(
  () =>
    import("@/components/sections/success_story").then((mod) => ({
      default: mod.SuccessStory,
    })),
  {
    loading: () => <div className="min-h-screen bg-gray-100 animate-pulse" />,
  }
);

const OurTeachers = dynamic(
  () =>
    import("@/components/sections/our_teachers").then((mod) => ({
      default: mod.OurTeachers,
    })),
  {
    loading: () => <div className="min-h-screen bg-gray-100 animate-pulse" />,
  }
);

const AnswersQuestions = dynamic(
  () =>
    import("@/components/sections/answers_questions").then((mod) => ({
      default: mod.AnswersQuestions,
    })),
  {
    loading: () => <div className="min-h-screen bg-gray-100 animate-pulse" />,
  }
);

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
