import { useQuiz } from '../contexts/QuizContext';
import Options from './Options';

export default function Questions() {
  const { index, questions } = useQuiz();
  const question = questions[index];
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} />
    </div>
  );
}
