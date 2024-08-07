import { useQuiz } from '../contexts/QuizContext';

function FinishScreen() {
  const { points, highscore, dispatch, maxPoints } = useQuiz();
  const percentage = (points / maxPoints) * 100;

  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPoints}(
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(HighScore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: 'restart' })}
      >
        Restart
      </button>
    </>
  );
}

export default FinishScreen;
