import { useQuiz } from '../contexts/QuizContext';

function Options({ question }) {
  const { answer, dispatch } = useQuiz();
  const hasAnswerd = answer !== null;

  return (
    <div>
      <div className="options">
        {question.options.map((option, index) => (
          <button
            className={`btn btn-option ${index === answer ? 'answer' : ''} ${
              hasAnswerd
                ? index === question.correctOption
                  ? 'correct'
                  : 'wrong'
                : ''
            }`}
            key={option}
            disabled={answer !== null}
            onClick={() => dispatch({ type: 'newAnswer', payload: index })}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Options;
