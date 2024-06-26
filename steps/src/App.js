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
      <StepMessage step={1}>
        <p>pass in content</p>
      </StepMessage>
      <StepMessage step={2}>
        <p>Read children props</p>
      </StepMessage>
      <DateCounter />
      <DateCounter2 />
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
    }
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

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>

          <div className="buttons">
            <Button bgColor="#7950f2" color="#fff" onClick={handlePrevious}>
              <span>✊</span>Previous
            </Button>
            <Button bgColor="#7950f2" color="#fff" onClick={handleNext}>
              Next<span>✊</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <p>
        <h3>Step {step}</h3>
        {children}
      </p>
    </div>
  );
}

function Button({ bgColor, color, onClick, children }) {
  return (
    <button onClick={onClick} style={{ backgroundColor: bgColor, color }}>
      {children}
    </button>
  );
}
