import { TextContent } from "./text_content";
import { VideoSlider } from "./video_reviews_slider";

export function VideoReviews() {
  return (
    <section
      id="success-story"
      className="min-h-[80vh] bg-[url('/images/success_story/bg_mobile.webp')] lg:bg-[url('/images/success_story/bg.webp')] bg-contain bg-no-repeat bg-bottom bg-white"
    >
      <div className="min-h-[80vh] flex flex-col mx-auto w-full justify-between items-center max-w-[1300px]">
        <div className="text-center mb-4">
          <h2 className="text-[32px] lg:text-[64px] font-bold text-black mb-2">
            וידאו ביקורות לקוחות
          </h2>
        </div>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 px-4">
          <TextContent />
          <VideoSlider />
        </div>
      </div>
    </section>
  );
}
