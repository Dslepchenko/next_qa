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
    description: (
      <>
        מרצה מנוסה, בת 28, בעלת ניסיון של מעל ל-7 שנים בתחום ביקורת ודיווחים
        כספיים.
        <br />
        היא בוגרת האוניברסיטה העברית ובעלת תעודות מקצועיות בתחום הביקורת הפנימית
        ויעוץ עסקי.
        <br />
        במהלך קריירתה ליוותה מעל ל-400 תלמידים וסטודנטים, ומתמחה בהכנה לבחינות
        מקצועיות ולשוק העבודה
      </>
    ),
    fullDescription: (
      <>
        היא מתמחה בהעברת חומר מורכב בצורה פשוטה ומובנה, עם דגש על הבנה עמוקה
        ויישום מעשי.
        <br />
        התלמידים שלה זוכים ללמידה אינטראקטיבית, כלים דיגיטליים מתקדמים, תרגולים
        מותאמים אישית וליווי צמוד עד להשמה בעבודה.
      </>
    ),
    quote: (
      <>
        אני מאמינה שכל תלמיד יכול להצליח – צריך רק למצוא את הדרך הנכונה ללמד
        אותו ולתת לו את הביטחון שהוא צריך.
      </>
    ),
    image: "/images/our_teachers/teacher_1.webp",
  },
];

export function TeachersSlider() {
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
          {teachersData.map((teacher) => (
            <CarouselItem key={teacher.id}>
              <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-20 min-h-[600px]">
                {/* Изображение справа (в RTL первый элемент) */}
                <div className="flex justify-center lg:justify-end items-end">
                  <div className="relative">
                    <Image
                      src={teacher.image}
                      alt="teacher"
                      width={550}
                      height={650}
                      className="rounded-lg w-[400px] h-[500px] lg:w-[550px] lg:h-[650px] object-cover"
                    />

                    {/* Кнопки навигации поверх картинки */}
                    <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 text-primary border-primary hover:bg-primary hover:text-white w-12 h-12 rounded-full">
                      <Image
                        src="/icons/our_teachers/arrow_left.svg"
                        alt="arrow-left"
                        width={50}
                        height={50}
                      />
                    </CarouselPrevious>
                    <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 text-primary border-primary hover:bg-primary hover:text-white w-12 h-12 rounded-full">
                      <Image
                        src="/icons/our_teachers/arrow_right.svg"
                        alt="arrow-right"
                        width={50}
                        height={50}
                      />
                    </CarouselNext>
                  </div>
                </div>

                {/* Текст слева (в RTL второй элемент) */}
                <div className="space-y-6 px-4 md:px-8 lg:px-0 text-center lg:text-right flex flex-col  justify-start w-full max-w-[full]   lg:max-w-[700px]">
                  <div>
                    <h1 className="text-[32px] md:text-[48px] lg:text-[64px] font-bold text-primary mb-2">
                      המורים שלנו
                    </h1>
                  </div>

                  <div className="text-[16px] md:text-[20px] lg:text-[20px] line-clamp-[28px] text-white leading-relaxed">
                    {teacher.description}
                  </div>

                  <p className="text-[16px] md:text-[20px] lg:text-[20px] line-clamp-[28px] text-white leading-relaxed">
                    {teacher.fullDescription}
                  </p>

                  <div className="bg-accent text-black p-4 lg:p-8 max-w-[full]">
                    <p className="text-[18px] lg:text-[23px]  font-semibold text-right">
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
