import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import StarRating from './components/StarRating';
import TextExpanderList from './components/TextExpanderList';
import './index.css';
import App from './App';

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>This Movie was rated {movieRating} starts</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* movie list app */}
    <App />

    {/* star rating component */}
    {/* <StarRating
      maxRating={5}
      messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amaging']}
    />
    <StarRating size={24} color="red" className="test" defaultRating={3} />
    <Test /> */}

    {/* text expander app */}
    {/* <TextExpanderList /> */}
  </React.StrictMode>
);
