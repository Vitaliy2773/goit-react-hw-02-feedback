import React from 'react';

export default function FeedbackTitle({ title, children }) {
  return (
    <div>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
}
