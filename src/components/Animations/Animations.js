```javascript
import React from 'react';
import { useSpring, animated } from 'react-spring';

const Animations = () => {
  const fade = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  });

  return (
    <animated.div style={fade}>
      {/* Your content goes here */}
    </animated.div>
  );
};

export default Animations;
```