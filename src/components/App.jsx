import { useState, useEffect } from 'react';
import { Options } from './Options';
import { Description } from './Description';
import { Notification } from './Notification';
import { Feedback } from './Feedback';
import { getDataFromLocalStorage } from './GetDataFromLocalStorage';

export const App = () => {
  const { good, bad, neutral } = getDataFromLocalStorage();
  const [feedback, setFeedback] = useState({ good, bad, neutral });

  const handleUpdate = type => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  const handleReset = () => {
    setFeedback({ good: 0, bad: 0, neutral: 0 });
  };

  useEffect(() => {
    window.localStorage.setItem('feedbackData', JSON.stringify(feedback));
  }, [feedback]);

  const hasFeedback = feedback.good + feedback.bad + feedback.neutral > 0;

  return (
    <div>
      <Description />
      <Options
        onUpdate={() => handleUpdate('good')}
        onUpdateBad={() => handleUpdate('bad')}
        onUpdateNeutral={() => handleUpdate('neutral')}
        onReset={handleReset}
        hasFeedback={hasFeedback}
      />
      {hasFeedback ? (
        <Feedback good={feedback.good} bad={feedback.bad} neutral={feedback.neutral} />
      ) : (
        <Notification />
      )}
    </div>
  );
};
