import css from './Feedback.module.css';

export default function FeedbackButtons({ FeedbackFunction }) {
  return (
    <div>
      {['good', 'neutral', 'bad'].map(type => (
        <button
          key={type}
          onClick={() => FeedbackFunction(type)}
          className={css.button__statistics}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </button>
      ))}
    </div>
  );
}
