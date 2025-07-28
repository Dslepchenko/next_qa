import { AnimatedButton } from "@/components/animated-button";
import Image from "next/image";

const videoReviewsData = [
  {
    id: 1,
    title: (
      <>
        קורס במספר
        <br />
        חודשים בודדים
      </>
    ),
    icon: "/icons/video_reviews/calendar-time.svg",
  },
  {
    id: 2,
    title: (
      <>
        פוטנציאל שכר
        <br />
        9K-12K
      </>
    ),
    icon: "/icons/video_reviews/briefcase.svg",
  },
  {
    id: 3,
    title: (
      <>
        סיוע בהשמה ע״י
        <br />
        מחלקת ההשמה שלנו
      </>
    ),
    icon: "/icons/video_reviews/businessplan.svg",
  },
];

export function TextContent() {
  return (
    <div className="flex flex-col items-center lg:items-start justify-start gap-4 lg:gap-10  pb-8 lg:pb-20">
      <p className="text-[16px] lg:text-[20px]  text-black mb-2">
        תלמדו איך להפוך למנהלי חשבונות וחשבי שכר שמבוקשים בשוק —
        <br />
        דרך שיעורים ממוקדים, תרגול מעשי וליווי אישי צמוד לאורך כל הדרך.
        <br />
        הסטודנטים שלנו מגיעים מכל רחבי ישראל ומגיעים למשרד בכל עיר בישראל
      </p>
      <div className="flex flex-row  lg:flex-col  items-right gap-4 lg:gap-10">
        {videoReviewsData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col lg:flex-row  items-center lg:items-start justify-start gap-4 lg:gap-6"
          >
            <Image
              src={item.icon}
              alt="icon"
              width={56}
              height={56}
              className="w-[48px] h-[48px] lg:w-[56px] lg:h-[56px]"
            />
            <p className="text-[16px] lg:text-[24px] font-bold text-black mb-2 text-center lg:text-right">
              {item.title}
            </p>
          </div>
        ))}
      </div>
      <AnimatedButton className="bg-primary bg-[url('/images/common/bg_button_green.png')] bg-contain bg-no-repeat text-black px-8 py-2  lg:py-4 font-semibold transition-colors min-w-[300px]">
        לשיחת ייעוץ ללא התחייבות
      </AnimatedButton>
    </div>
  );
}
