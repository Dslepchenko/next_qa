import Image from "next/image";

export function Header() {
  return (
    <div className="flex justify-between items-center w-full px-4">
      <Image
        src="/icons/hero/next_logo.svg"
        alt="logo"
        width={80}
        height={40}
        className="w-[80px] h-[40px] md:w-[100px] md:h-[50px]"
      />

      <Image
        src="/icons/hero/logo_group.svg"
        alt="logo"
        width={300}
        height={100}
        className="w-[200px] h-[auto] md:w-[300px] md:h-[auto]"
      />
    </div>
  );
}
