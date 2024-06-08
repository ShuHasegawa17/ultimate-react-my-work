import { useState } from 'react';

export default function DateCounter2() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  // console.log(date.toISOString());
  const date = new Date();
  date.setDate(date.getDate() + count);

  const handleReset = () => {
    setStep(1);
    setCount(0);
  };

  return (
    <div
      style={{
        width: 'fit-content',
        margin: '40px auto',
      }}
    >
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>{step}</span>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        {count}
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <span>
        {count === 0
          ? '今日は'
          : count > 0
          ? `${count}日後は`
          : `${Math.abs(count)}日前は`}
      </span>
      <p>{date.toDateString()}</p>
      {(count !== 0 || step !== 1) && (
        <div>
          <button onClick={handleReset}>reset</button>
        </div>
      )}
    </div>
  );
}
