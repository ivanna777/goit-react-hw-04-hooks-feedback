import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from "./Statistics.module.css"

class Statistics extends Component {
    render() {
        const { good, neutral, bad, total, positivePercentage } = this.props;
        return (
            <div>
                <div>
                    <span className={styles["feedback-type"]}>Good: </span>
                    <span>{good}</span>
                </div>
                <div>
                    <span className={styles["feedback-type"]}>Neutral: </span>
                    <span>{neutral}</span>
                </div>
                <div>
                    <span className={styles["feedback-type"]}>Bad: </span>
                    <span>{bad}</span>
                </div>
                <div>
                    <span className={styles["feedback-type"]}>Total: </span>
                    <span>{total}</span>
                </div>
                <div>
                    <span className={styles["feedback-type"]}>Positive feedback: </span>
                    <span>{positivePercentage} %</span>
                </div>
            </div >
        )
    }
}

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number
}
export default Statistics;
