import PropTypes from 'prop-types';
import styles from "./FeedbackOptions.module.css"

export default function FeedbackOptions({ good, neutral, bad, onLeaveGoodFeedback, onLeaveNeutralFeedback, onLeaveBadFeedback }) {
  
    return (
          <div className={styles["options-wrapper"]}>
          <button className={styles["option-btn"]}  type="button" onClick={ onLeaveGoodFeedback} name ={good}>Good {good}</button>
          <button className={styles["option-btn"]} type="button" onClick={ onLeaveNeutralFeedback} name ={neutral}>Neutral {neutral}</button>
          <button className={styles["option-btn"]} type="button" onClick={ onLeaveBadFeedback} name ={bad}>Bad {bad}</button>
            
      </div> 
        )
    }


FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func
}
