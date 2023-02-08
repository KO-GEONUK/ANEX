import React, { memo } from 'react';

const Ball = memo(({ number }) => {
  let background;
  if (number <= 10) {
    background = 'yellow';
  } else if (number <= 20) {
    background = 'skyblue';
  } else if (number <= 30) {
    background = 'tomato';
  } else if (number <= 40) {
    background = 'gray';
  } else {
    background = 'yellowgreen';
  }

  return (
    <div className="ball" style={{ background }}>{number}</div>
  )
});
Ball.displayName = 'Ball';

export default Ball;
