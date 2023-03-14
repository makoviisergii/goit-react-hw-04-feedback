import styled from 'styled-components';
import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increment = prevSteate => prevSteate + 1;

  const mapState = {
    good: setGood,
    neutral: setNeutral,
    bad: setBad,
  };

  const onLeaveFeedback = option => {
    mapState[option](increment);
  };

  // const onLeaveFeedback = option => {
  //   console.log(option);
  //   switch (option) {
  //     case 'good':
  //       setGood(prevSteat => prevSteat + 1);
  //       break;
  //     case 'neutral':
  //       setNeutral(prevSteat => prevSteat + 1);
  //       break;
  //     case 'bad':
  //       setBad(prevSteat => prevSteat + 1);
  //       break;
  //     default:
  //       return;
  //   }
  // };

  const total = good + neutral + bad;
  const positivePercentage = !total ? 0 : Math.round((good / total) * 100);

  return (
    <div>
      <Section>
        <h2>Please leave feedback</h2>
        <FeedbackOptions onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section>
        <h2>Statistics</h2>
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </div>
  );
};

const Section = styled.section`
  margin-top: 10px;
  margin-left: 10px;
`;
