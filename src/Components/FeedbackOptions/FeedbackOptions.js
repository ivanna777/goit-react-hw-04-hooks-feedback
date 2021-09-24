import PropTypes from 'prop-types';
import styles from "./FeedbackOptions.module.css"

export default function FeedbackOptions({ options, onLeaveFeedback}) {
  
    return (
          <div className={styles["options-wrapper"]}>
          {options.map((option) => (
          <button className={styles["option-btn"]} key={ option} type="button" onClick={onLeaveFeedback} name ={option}>
            {option}
          </button>
            ))}
            
      </div> 
        )
    }


FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func
}
