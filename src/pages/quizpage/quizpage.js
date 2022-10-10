
import { Navigation } from "../../components/navigation/Navigation";
import "./quizpage.css"
import { Question } from "../../components/question/question";
import { useQuizzContext } from "../../contexts/quiz-context";
const Quizzpage = () => {
    const {quizzState} = useQuizzContext();
    const {questionData, currentQue} = quizzState;
  return (
    <>
      <Navigation/>
      <main className="quiz__main">
        <Question/>
      </main>
    </>
  );
};

export { Quizzpage };