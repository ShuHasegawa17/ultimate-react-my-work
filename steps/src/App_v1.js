import { useState } from 'react';
import DateCounter from './DateCounter';
import DateCounter2 from './DateCounter2';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

export default function App() {
  return (
    <div>
      <Steps />
      <DateCounter />
      <DateCounter2 />
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  // const [test, setTest] = useState({ name: 'Shu' });

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
      // setStep((s) => s + 1);
    }
    // BAD PRACTICE!!
    // test.name = 'Fred';
    // BETTER
    // setTest({ name: 'Fred' });
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
            {/* {test.name} */}
          </p>

          <div className="buttons">
            <button
              onClick={handlePrevious}
              style={{ backgroundColor: '#7950f2', color: '#fff' }}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              style={{ backgroundColor: '#7950f2', color: '#fff' }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
