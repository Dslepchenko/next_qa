export function FormContainer({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <div
      id={id}
      className="bg-[#00D3C3] lg:bg-[url('/images/hero/form_bg.webp')] bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center w-full"
    >
      {children}
    </div>
  );
}
