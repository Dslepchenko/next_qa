import Image from "next/image";
import { FeatureItem } from "./feature_item";

const features = [
  {
    title: "קורסים אפשרויות קידום מגוונות",
    description:
      "קורסים פרקטיים, תמיכה אישית, ותוצאות אמיתיות – זה מה שמייחד מניהול חשבונות עצמאי ועד משרות בכירות במחלקות כספים.",
    icon: (
      <Image
        src="/icons/why_choose_us/chart-pie.svg"
        alt="icon1"
        width={50}
        height={50}
        className="w-[32px] h-auto lg:w-[50px] lg:h-auto"
      />
    ),
  },
  {
    title: "פוטנציאל שכר גבוה כבר מהיום הראשון",
    description: "לפי טבלאות השכר ברשת מדובר בשכר התחלתי של 9,000-12,000 ₪.",
    icon: (
      <Image
        src="/icons/why_choose_us/businessplan.svg"
        alt="icon1"
        width={50}
        height={50}
        className="w-[32px] h-auto lg:w-[50px] lg:h-auto"
      />
    ),
  },
  {
    title: "ביקוש גבוה בשוק העבודה",
    description:
      "כל ארגון, חברה ובית עסק צריכים חשבי שכר או מנהלי חשבונות מוסמכים, בייחוד היום בעידן של רגולציות פיננסיות מתחדשות.",
    icon: (
      <Image
        src="/icons/why_choose_us/users.svg"
        alt="icon1"
        width={50}
        height={50}
        className="w-[32px] h-auto lg:w-[50px] lg:h-auto"
      />
    ),
  },
  {
    title: "הכשרה ממוקדת ומעשית",
    description: "בקורס תקבלו כלים מעשיים ותלמדו רק את החומר ההכרחי לעבודה.",
    icon: (
      <Image
        src="/icons/why_choose_us/student.svg"
        alt="icon1"
        width={50}
        height={50}
        className="w-[32px] h-auto lg:w-[50px] lg:h-auto"
      />
    ),
  },
  {
    title: "מסלול הכשרה גמיש ונוח",
    description:
      "הקורס שלנו מתאים לאנשים שרוצים להשתלב במהירות בשוק ולקבל ליווי אישי במציאת עבודה.",
    icon: (
      <Image
        src="/icons/why_choose_us/git-fork.svg"
        alt="icon1"
        width={50}
        height={50}
        className="w-[32px] h-auto lg:w-[50px] lg:h-auto"
      />
    ),
  },
];

export function FeaturesList() {
  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-start justify-between gap-4 lg:gap-8 w-full max-w-[90%] lg:max-w-[80%] mx-auto py-8">
      {features.map((feature) => (
        <FeatureItem key={feature.title} {...feature} />
      ))}
    </div>
  );
}
