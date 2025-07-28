import { AnimatedButton } from "@/components/animated-button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FormContainer } from "@/components/ui/form_container";
import Image from "next/image";

const successStoriesData = [
  {
    id: 1,
    image: "/images/success_story/tel.webp",
    owner: {
      icon: "/icons/success_story/avatar.svg",
      title: "ויולה קוניאדיר",
      description: "רואה חשבון ראשי של חברת ורשינה",
    },
    sections: [
      {
        id: 1,
        icon: "/icons/success_story/target.svg",
        title: "מטרה בלימודים",
        description:
          "אחרי תקופה ארוכה של חיפוש עבודה, החלטתי להשתתף בקורס נהלת חשבונות עם חיי משפחה תובעניים.",
      },
      {
        id: 2,
        icon: "/icons/success_story/question-mark.svg",
        title: "איך בניתי רצתי ללמוד",
        description:
          "לא היה לי ידע מקצועי והחלטתי שאני רוצה לרכוש רצתי לרכוש. החלטתי ללמוד עם אמצעים המתקדמים ביותר. לקחתי ביטחון עצמי, ולזהות הזדמנות לעבוד בהכנת חשבוניות.",
      },
      {
        id: 3,
        icon: "/icons/success_story/circle-check.svg",
        title: "תוצאות הלימודים",
        description:
          "הקורס נתן לי ידע בסיסי בהשגה בתחום המחשבים סיפק, אבל מתולים סדירים הם ג׳ים הקובצה ואגב הוראות וחוב להחזרת לאורך כל הדרך.",
      },
    ],
    quote:
      "הקורס שינה לי את החיים! קיבלתי לא רק ידע מקצועי אלא גם ביטחון בעצמי. המורים היו תמיד זמינים לעזרה ולתמיכה.",
  },
  {
    id: 2,
    image: "/images/success_story/tel.webp",
    owner: {
      icon: "/icons/success_story/avatar.svg",
      title: "ויולה קוניאדיר",
      description: "רואה חשבון ראשי של חברת ורשינה",
    },
    sections: [
      {
        id: 1,
        icon: "/icons/success_story/circle-check.svg",
        title: "אתגר מקצועי",
        description:
          "עבדתי שנים בעבודות פיזיות קשות וחיפשתי משהו יותר יציב ומכובד למשפחתי.",
      },
      {
        id: 2,
        icon: "/icons/success_story/circle-check.svg",
        title: "החלטה ללמוד",
        description:
          "הקורס בחישוב שכר פתח לי דלתות חדשות ונתן לי מקצוע מכובד עם יכולת התפתחות.",
      },
      {
        id: 3,
        icon: "/icons/success_story/circle-check.svg",
        title: "השתלבות בתפקיד",
        description:
          "השתלבתי במשרד יעוץ כלכלי וכיום אני ראש צוות בחישובי שכר עם משכורת הגונה.",
      },
    ],
    quote:
      "התחלתי מאפס ובתוך שנה כבר הייתי עצמאי. הקורס נתן לי את הכלים והביטחון להתחיל דרך חדשה בחיים.",
  },
];

export function SuccessStorySlider() {
  return (
    <div className="w-full max-w-8xl mx-auto px-4">
      <Carousel
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {successStoriesData.map((story) => (
            <CarouselItem key={story.id}>
              <div className="flex flex-col max-w-[1200px] mx-auto relative my-4 lg:my-5 bg-gray-100">
                <div className="lg:grid lg:grid-cols-2 gap-10 lg:gap-20 min-h-[55vh] lg:min-h-[600px] py-10 lg:py-0 pr-2 lg:pr-10">
                  {/* Текст */}
                  <div className="space-y-6 px-4 md:px-8 lg:px-0 text-center lg:text-right flex flex-col justify-center w-full max-w-full lg:max-w-[700px]">
                    {/* Секции с иконками */}
                    <div className="space-y-4">
                      <>
                        <div className="flex items-start gap-4 text-right pr-2">
                          <Image
                            src={story.owner.icon}
                            alt={story.owner.title}
                            width={32}
                            height={32}
                          />

                          <div className="flex-1">
                            <h4 className="text-[16px] lg:text-[18px] font-bold text-black mb-2">
                              {story.owner.title}
                            </h4>
                            <p className="text-[14px] lg:text-[16px] text-black leading-relaxed">
                              {story.owner.description}
                            </p>
                          </div>
                        </div>
                        {story.sections.map((section) => (
                          <div
                            key={section.id}
                            className="flex items-start gap-4 text-right"
                          >
                            <Image
                              src={section.icon}
                              alt={section.title}
                              width={40}
                              height={40}
                            />

                            <div className="flex-1">
                              <h4 className="text-[18px] lg:text-[24px] font-semibold text-black mb-2">
                                {section.title}
                              </h4>
                              <p className="text-[14px] lg:text-[20px] text-black leading-relaxed">
                                {section.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </>
                    </div>
                  </div>

                  {/* Кнопка предыдущий слева */}
                  <CarouselPrevious className="flex absolute left-[5px] lg:left-[-80px] top-[65%] lg:top-1/2 -translate-y-1/2 z-10 text-primary border-primary hover:bg-primary hover:text-white w-10 h-10 lg:w-12 lg:h-12 rounded-full">
                    <Image
                      src="/icons/our_teachers/arrow_left.svg"
                      alt="arrow-left"
                      width={40}
                      height={40}
                      className="lg:w-[50px] lg:h-[50px]"
                    />
                  </CarouselPrevious>

                  {/* Кнопка следующий справа */}
                  <CarouselNext className="flex absolute right-[5px] lg:right-[-80px] top-[65%] lg:top-1/2 -translate-y-1/2 z-10 text-primary border-primary hover:bg-primary hover:text-white w-10 h-10 lg:w-12 lg:h-12 rounded-full">
                    <Image
                      src="/icons/our_teachers/arrow_right.svg"
                      alt="arrow-right"
                      width={40}
                      height={40}
                      className="lg:w-[50px] lg:h-[50px]"
                    />
                  </CarouselNext>

                  {/* Изображение */}
                  <div className="hidden lg:flex justify-center lg:justify-start items-center absolute top-10 left-10">
                    <Image
                      src={story.image}
                      alt="icon"
                      width={200}
                      height={700}
                      className="lg:w-[auto] lg:h-[700px] object-cover"
                    />
                  </div>
                </div>
                {/* Зеленая секция внизу */}
                <FormContainer>
                  <div className="w-full flex flex-col lg:flex-row items-center justify-start py-8 px-10  gap-4 lg:gap-16">
                    <div className="flex flex-row items-center gap-8">
                      <Image
                        src="/images/success_story/diploma.png"
                        alt="diploma"
                        width={120}
                        height={140}
                      />
                      <p className="text-black text-[16px] lg:text-[20px] font-semibold">
                        תעודה עם סיום
                        <br /> ההכשרה
                      </p>
                    </div>

                    <AnimatedButton className="bg-accent bg-[url('/images/common/bg_button_gold.png')] bg-contain bg-no-repeat text-black px-8 py-2  lg:py-4 font-semibold transition-colors min-w-[300px]">
                      אני רוצה להתחיל
                    </AnimatedButton>
                  </div>
                </FormContainer>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
