import Image from "next/image";

export function Rating() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-end">
      <div className="flex flex-col items-center text-right gap-2">
        <p className="text-[20px] font-bold text-primary">
          מעל 1300+ תלמידים מרוצים
        </p>
        <div className="flex items-center gap-4 justify-end w-full">
          <Image
            src="/icons/hero/rating.svg"
            alt="rating"
            width={170}
            height={100}
          />
          <p className="text-[20px] font-bold text-white w-full">מעולה</p>
        </div>
      </div>
      <Image
        src="/icons/hero/avatars.svg"
        alt="avatars"
        width={140}
        height={100}
      />
    </div>
  );
}
