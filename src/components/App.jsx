import { useState, useEffect } from 'react';
import { Options } from './Options';
import { Description } from './Description';
import { Notification } from './Notification';
import { Feedback } from './Feedback';
import { getDataFromLocalStorage } from './GetDataFromLocalStorage';

export const App = () => {
  const { good, bad, neutral } = getDataFromLocalStorage();
  const [count, setCount] = useState(() => good || 0);
  const [click, setClick] = useState(() => bad || 0);
  const [push, setPush] = useState(() => neutral || 0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleClicksBad = () => {
    setClick(click + 1);
  };

  const handleClickNeutral = () => {
    setPush(push + 1);
  };

  const handleReset = () => {
    setCount(0);
    setClick(0);
    setPush(0);
  };

  useEffect(() => {
    window.localStorage.setItem(
      'feedbackData',
      JSON.stringify({ good: count, bad: click, neutral: push })
    );
  }, [count, click, push]);

  const hasFeedback = count + click + push > 0;

  return (
    <div>
      <Description />
      <Options
        onUpdate={handleClick}
        onUpdateBad={handleClicksBad}
        onUpdateNeutral={handleClickNeutral}
        onReset={handleReset}
        hasFeedback={hasFeedback}
      />
      {hasFeedback ? (
        <Feedback good={count} bad={click} neutral={push} onReset={handleReset} />
      ) : (
        <Notification />
      )}
    </div>
  );
};
