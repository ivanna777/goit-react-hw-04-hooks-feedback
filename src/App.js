import { useState } from "react";
import Statistics from "./Components/Statistics";
import FeedbackOptions from "./Components/FeedbackOptions";
import Section from "./Components/Section";
import Notification from "./Components/Notification";

export default function App() {
  const [goodFeedback, setGoodFeedback] = useState(0);
  const [neutralFeedback, setNeutralFeedback] = useState(0);
  const [badFeedback, setBadFeedback] = useState(0);

  const leaveFeedback = (e) => {
    const feedback = e.currentTarget.name;

    switch (feedback) {
      case "goodFeedback":
        setGoodFeedback(goodFeedback + 1);

        break;
      case "neutralFeedback":
        setNeutralFeedback(neutralFeedback + 1);

        break;
      case "badFeedback":
        setBadFeedback(badFeedback + 1);

        break;

      default:
        alert("Try again");
        break;
    }
  };

  const countTotalFeedback = () => goodFeedback + neutralFeedback + badFeedback;

  const countPositiveFeedbackPercentage = () => {
    if (!countTotalFeedback()) return null;
    return Math.floor((goodFeedback / countTotalFeedback()) * 100);
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={["goodFeedback", "neutralFeedback", "badFeedback"]}
          onLeaveFeedback={leaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={goodFeedback}
            neutral={neutralFeedback}
            bad={badFeedback}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </div>
  );
}
