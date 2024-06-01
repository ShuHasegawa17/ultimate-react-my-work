import { useState } from 'react';

export default function DateCounter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  // console.log(date.toISOString());
  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <>
      <div>
        <button onClick={() => setStep((s) => s - 1)}>-</button>Step : {step}
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>Count :{' '}
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
      <p>{date.toISOString()}</p>
    </>
  );
}
