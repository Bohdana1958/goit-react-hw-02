export const getDataFromLocalStorage = () => {
  const savedData = window.localStorage.getItem('feedbackData');
  return savedData !== null ? JSON.parse(savedData) : { good: 0, bad: 0, neutral: 0 };
};
