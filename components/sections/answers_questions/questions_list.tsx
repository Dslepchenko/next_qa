import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/ui/accordion";
import Image from "next/image";

const questionsData = [
  {
    id: "1",
    question: "האם צריך רקע קודם להירשם לקורס?",
    answer:
      "לא, הקורס מתאים לכל המתעניינים ללא רקע מקצועי קודם. אנו נדאג לתת בסיס חזק ותמיכה מלאה.",
  },
  {
    id: "2",
    question: "האם תלמידי הקב וגם מבוגר אישי?",
    answer:
      "הקורס מתאים לכל הגילאים - צעירים ומבוגרים כאחד. אנו מתאימים את השיטה לכל משתתף.",
  },
  {
    id: "3",
    question: "האם תקבלו תעודה בסיום הקורס?",
    answer:
      "כן, בסיום הקורס תקבלו תעודה מוכרת שתעזור לכם בחיפוש עבודה ובהשתלבות בשוק העבודה.",
  },
  {
    id: "4",
    question: "באיזה זמנות נוחל לסימנתנה?",
    answer:
      "הקורס מתקיים בימים ושעות גמישים, כולל אפשרות לשיעורים בערב ובסופי שבוע, בהתאם לצרכים שלכם.",
  },
  {
    id: "5",
    question: "האם יש תמיכה במהלך הקורס?",
    answer:
      "כמובן! נוכחת תמיכה מלאה לאורך כל הקורס, כולל ליווי אישי, מענה לשאלות וסיוע בהשמה.",
  },
  {
    id: "6",
    question: "כמה זמן נמשך הקורס?",
    answer:
      "משך הקורס משתנה בהתאם למסלול שתבחרו, בדרך כלל בין 3-6 חודשים עם גמישות בקצב הלמידה.",
  },
];

export function QuestionsList() {
  return (
    <Accordion type="single" collapsible className="w-full space-y-4">
      {questionsData.map((item) => (
        <AccordionItem
          key={item.id}
          value={item.id}
          className="bg-gray-100 border-0 overflow-hidden"
        >
          <AccordionTrigger className="px-4 lg:px-6 py-4 lg:py-8 text-right hover:no-underline hover:bg-gray-100 transition-colors [&[data-state=open]]:bg-gray-100 group [&>svg]:hidden">
            <div className="flex items-center justify-between w-full">
              <Image
                src="/icons/answers_qeustions/question-mark.svg"
                alt="question mark"
                width={24}
                height={24}
                className="w-[24px] h-[auto] lg:w-[32px] lg:h-[auto]"
              />
              <h2 className="text-[18px] font-heebo  lg:text-[24px] font-semibold text-black text-right flex-1 mx-4">
                {item.question}
              </h2>
              <div className="flex items-center gap-3">
                <Image
                  src="/icons/answers_qeustions/arrow_down.svg"
                  alt="arrow"
                  width={17}
                  height={17}
                  className="group-data-[state=open]:hidden transition-all w-[12px] h-[auto] lg:w-[17px] lg:h-[auto]"
                />
                <Image
                  src="/icons/answers_qeustions/arrow_up.svg"
                  alt="arrow"
                  width={17}
                  height={17}
                  className="hidden group-data-[state=open]:block transition-all"
                />
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4 lg:px-6 pb-4 bg-gray-100">
            <p className="text-[16px] lg:text-[20px] text-black text-right leading-relaxed pr-10">
              {item.answer}
            </p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
