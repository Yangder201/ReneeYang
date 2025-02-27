import React from 'react';
import SplitText from './SplitText';

function TextAnimation() {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center', fontSize: '24px' }}>
      <SplitText
        text="Hello, Animation in React!"
        className="text-2xl font-semibold"
        delay={150}
        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
        threshold={0}
        rootMargin="0px"
        onLetterAnimationComplete={handleAnimationComplete}
      />
    </div>
  );
}

export default TextAnimation;7