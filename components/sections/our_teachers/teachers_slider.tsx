import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const teachersData = [
  {
    id: 1,
    description: (
      <>
        מרצה שלנו, בן 32, בעל ניסיון של מעל ל-9 שנים בתחום הנהלת חשבונות וחישוב
        שכר.
        <br />
        הוא בוגר אוניברסיטת בר אילן ובעל תעודות מקצועיות של לשכת רואי החשבון ושל
        לשכת יועצי המס בישראל.
        <br />
        לאורך השנים ליווה מעל ל-600 תלמידים בלמידה מקוונת, ורבים מהם השתלבו בשוק
        העבודה מיד עם סיום הקורס
      </>
    ),
    fullDescription: (
      <>
        הוא מעביר את השיעורים בצורה מקצועית, ברורה וממוקדת, עם דגש על תרגול מעשי
        והכנה לעבודה אמיתית.
        <br />
        במהלך הקורס התלמידים מקבלים גישה למצגות, חומרי תרגול, הקלטות של
        השיעורים, ליווי אישי, מענה מקצועי לשאלות ותרגולים אונליין עם משוב פרטני.
      </>
    ),
    quote: (
      <>
        המטרה שלי היא לא רק ללמד את החומר, אלא לתת כלים אמיתיים שמכינים אתכם
        לעבודה – כבר מהיום הראשון.
      </>
    ),
    image: "/images/our_teachers/teacher_1.webp",
  },
  {
    id: 2,
    name: "שרה כהן",
    title: "מרצה בכירה",
    description: "מרצה מנוסה בתחום הנהלת חשבונות עם ניסיון של מעל 15 שנה.",
    fullDescription:
      "בוגרת האוניברסיטה העברית עם תואר שני בכלכלה וחשבונאות. מתמחה בחשבות שכר ומערכות מידע חשבונאיות.",
    quote: "החשבונאות היא שפה, ואני מלמדת אתכם לדבר בה בשטף.",
    experience: "עבדה במשרדי רואי חשבון מובילים לפני שעברה להוראה.",
    results: "מעל 500 בוגרים מצאו עבודה בתחום תוך 3 חודשים מסיום הקורס.",
    image: "/images/our_teachers/teacher_1.webp",
  },
];

export function TeachersSlider() {
  return (
    <div className="w-full max-w-8xl mx-auto px-4">
      <Carousel className="w-full">
        <CarouselContent>
          {teachersData.map((teacher) => (
            <CarouselItem key={teacher.id}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 min-h-[600px]">
                {/* Изображение справа (в RTL первый элемент) */}
                <div className="flex justify-center lg:justify-end items-end">
                  <div className="relative flex items-center gap-2">
                    {/* Кнопка Next слева от изображения */}
                    <CarouselNext
                      className="text-primary border-primary hover:bg-primary hover:text-white w-12 h-12 rounded-full z-10 p-0 flex items-center justify-center"
                      style={{ fontSize: 0 }}
                    >
                      <Image
                        src="/icons/our_teachers/arrow_right.svg"
                        alt="next"
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                      <span className="sr-only">Next</span>
                    </CarouselNext>

                    <div className="relative">
                      <Image
                        src={teacher.image}
                        alt="teacher"
                        width={550}
                        height={650}
                        className="rounded-lg w-[400px] h-[500px] lg:w-[550px] lg:h-[650px] object-cover"
                      />
                      <div className="absolute bottom-4 right-4 bg-black/70 rounded-full p-2 flex items-center gap-2">
                        <Image
                          src="/icons/s/verified.svg"
                          alt="verified"
                          width={24}
                          height={24}
                          className="w-6 h-6"
                        />
                        <span className="text-white text-sm font-semibold">
                          {teacher.title}
                        </span>
                      </div>
                    </div>

                    {/* Кнопка Previous справа от изображения */}
                    <CarouselPrevious
                      className="text-primary border-primary hover:bg-primary hover:text-white w-12 h-12 rounded-full z-10 p-0 flex items-center justify-center"
                      style={{ fontSize: 0 }}
                    >
                      <Image
                        src="/icons/our_teachers/arrow_left.svg"
                        alt="previous"
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                      <span className="sr-only">Previous</span>
                    </CarouselPrevious>
                  </div>
                </div>

                {/* Текст слева (в RTL второй элемент) */}
                <div className="space-y-6 text-right flex flex-col justify-start w-full max-w-[700px]">
                  <div>
                    <h1 className="text-[32px] lg:text-[64px] font-bold text-primary mb-2">
                      המורים שלנו
                    </h1>
                  </div>

                  <div className="text-[16px] lg:text-[20px] line-clamp-[28px] text-white leading-relaxed">
                    {teacher.description}
                  </div>

                  <p className="text-[16px] lg:text-[20px] line-clamp-[28px] text-white leading-relaxed">
                    {teacher.fullDescription}
                  </p>

                  <div className="bg-accent text-black p-8">
                    <p className="text-[16px] lg:text-[23px]  font-semibold text-right">
                      {teacher.quote}
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
