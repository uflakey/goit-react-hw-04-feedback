import React from 'react';

const FeedbackOptions = ({ options = [], onLeaveFeedback }) => {
  return options.map(option => (
    <>
      <button
        key={option}
        type="button"
        name={option}
        onClick={onLeaveFeedback}
        
      >
        {option}
      </button>
    </>
  ));
};
export default FeedbackOptions;
