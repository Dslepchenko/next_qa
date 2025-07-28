import { SuccessStorySlider } from "./success_story_slider";

export function SuccessStory() {
  return (
    <section
      id="success-story"
      className="min-h-screen bg-[url('/images/success_story/bg_mobile.webp')] lg:bg-[url('/images/success_story/bg.webp')] bg-contain bg-no-repeat bg-bottom bg-white"
    >
      <div className="min-h-screen flex flex-col mx-auto w-full items-center justify-between py-10 lg:py-20">
        <div className="text-center mb-4">
          <h2 className="text-[32px] lg:text-[64px] font-bold text-black mb-2">
            סיפורי הצלחה
          </h2>
        </div>
        <div className="flex-1 flex items-center w-full">
          <SuccessStorySlider />
        </div>
      </div>
    </section>
  );
}
