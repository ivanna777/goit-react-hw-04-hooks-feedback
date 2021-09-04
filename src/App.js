import  { useState } from 'react';
import Statistics from "./Components/Statistics";
import FeedbackOptions from "./Components/FeedbackOptions";
import Section from "./Components/Section";
import Notification from "./Components/Notification";

export default function App() {
  const [goodFeedback, setGoodFeedback] = useState(0);
  const [neutralFeedback, setNeutralFeedback] = useState(0);
  const [badFeedback, setBadFeedback] = useState(0);

  const leaveGoodFeedback = (e) => setGoodFeedback(prevGoodFeedback => prevGoodFeedback + 1);
  const leaveNeutralFeedback = (e) => setNeutralFeedback(prevNeutralFeedback => prevNeutralFeedback + 1);
  const leaveBadFeedback = (e) => setBadFeedback(prevBadFeedback => prevBadFeedback + 1);

  const countTotalFeedback = () => goodFeedback + neutralFeedback + badFeedback;

  const countPositiveFeedbackPercentage = () => {
    if (!countTotalFeedback()) return null;
    return (Math.floor((goodFeedback/countTotalFeedback())*100))
  }
  
  return (
    <div>
      <Section title="Please leave feedback">
      <FeedbackOptions 
        good={goodFeedback}
        neutral={neutralFeedback}
        bad={badFeedback}
        onLeaveGoodFeedback={ leaveGoodFeedback }
        onLeaveNeutralFeedback={ leaveNeutralFeedback }
        onLeaveBadFeedback={ leaveBadFeedback }
      />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ?
          <Statistics
            good={goodFeedback}
            neutral={neutralFeedback}
            bad={badFeedback}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          /> :
          <Notification message="No feedback given" />}
      </Section>
    </div>
  )
}
