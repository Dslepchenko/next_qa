export function FormContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#00D3C3] bg-[url('/images/hero/form_bg.svg')] bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center w-full">
      {children}
    </div>
  );
}
