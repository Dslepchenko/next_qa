interface TextBlockProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function FeatureItem({ title, description, icon }: TextBlockProps) {
  return (
    <div className="flex flex-row-reverse lg:flex-col  items-start lg:items-end justify-start  gap-4 w-full max-w-[90%] lg:max-w-[300px] text-center">
      <div className="flex flex-col items-end gap-4">{icon}</div>
      <div className="flex-1 gap-4 flex flex-col items-end justify-start">
        <h2 className="text-[20px] md:text-[28px] lg:text-[32px] font-bold text-white leading-tight text-right">
          {title}
        </h2>

        <p className="text-[14px] md:text-[16px] lg:text-[24px] font-normal text-white leading-relaxed text-right">
          {description}
        </p>
      </div>
    </div>
  );
}
