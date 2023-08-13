```javascript
import { useSpring, animated } from 'react-spring';

export const fadeIn = () => {
  return useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 }
  });
};

export const slideInFromLeft = () => {
  return useSpring({
    from: { transform: 'translate3d(-100%,0,0)' },
    to: { transform: 'translate3d(0%,0,0)' },
    config: { mass: 1, tension: 280, friction: 60 }
  });
};

export const slideInFromRight = () => {
  return useSpring({
    from: { transform: 'translate3d(100%,0,0)' },
    to: { transform: 'translate3d(0%,0,0)' },
    config: { mass: 1, tension: 280, friction: 60 }
  });
};

export const slideInFromTop = () => {
  return useSpring({
    from: { transform: 'translate3d(0,-100%,0)' },
    to: { transform: 'translate3d(0,0%,0)' },
    config: { mass: 1, tension: 280, friction: 60 }
  });
};

export const slideInFromBottom = () => {
  return useSpring({
    from: { transform: 'translate3d(0,100%,0)' },
    to: { transform: 'translate3d(0,0%,0)' },
    config: { mass: 1, tension: 280, friction: 60 }
  });
};

export const AnimatedComponent = animated;
```