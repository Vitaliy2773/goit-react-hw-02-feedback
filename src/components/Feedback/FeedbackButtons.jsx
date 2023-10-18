import css from './Feedback.module.css';

export default function FeedbackButtons({ btn__good, btn__neutral, btn__bad }) {
  return (
    <div>
      <button
        onClick={() => this.handleOption('good')}
        className={css.button__statistics}
      >
        Good
      </button>
      <button
        onClick={() => this.handleOption('neutral')}
        className={css.button__statistics}
      >
        Neutral
      </button>
      <button
        onClick={() => this.handleOption('bad')}
        className={css.button__statistics}
      >
        Bad
      </button>
    </div>
  );
}
