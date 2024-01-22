export const Feedback = ({ good, bad, neutral }) => {
  const totalFeedback = bad + good + neutral;
  const positivePercentage = Math.round(((good + neutral) / totalFeedback) * 100);
  return (
    <div>
      <p>Good: {good}</p>
      <p>Bad: {bad}</p>
      <p>Neutral: {neutral}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive Percentage: {positivePercentage}%</p>
    </div>
  );
};
