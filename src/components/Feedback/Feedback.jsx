import React, { Component } from 'react';
import css from './Feedback.module.css';
import FeedbackOptions from './FeedbackOptions';
import FeedbackButtons from './FeedbackButtons';
import FeedbackTitle from './FeedbackTitle';

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleOption = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    return total ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();

    return (
      <div className={css.container}>
        <FeedbackTitle className={css.title} title="Please leave feedback">
          <FeedbackButtons FeedbackFunction={this.handleOption} />
          <FeedbackOptions
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={totalFeedback}
            positiveFeedback={positiveFeedback}
          />
        </FeedbackTitle>
      </div>
    );
  }
}
