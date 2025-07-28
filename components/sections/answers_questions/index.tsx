import { FormContainer } from "@/components/shared/form_container";
import { QuestionsList } from "./questions_list";
import { Form } from "@/components/shared/form";

export function AnswersQuestions() {
  return (
    <section
      id="answers-questions"
      className="min-h-screen bg-[url('/images/answers_questions/bg_mobile.webp')] lg:bg-[url('/images/answers_questions/bg.webp')] bg-contain bg-no-repeat bg-bottom bg-white"
    >
      <div className="min-h-screen flex flex-col mx-auto  w-full items-center justify-between pt-10 lg:pt-20">
        <h2 className="text-[32px] lg:text-[48px] font-bold text-black mb-4">
          שאלות נפוצות
        </h2>
        <div className="w-full max-w-[1200px] mx-auto py-10 px-4">
          <QuestionsList />
        </div>
        <FormContainer>
          <Form />
        </FormContainer>
      </div>
    </section>
  );
}
