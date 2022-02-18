import { useState, useEffect } from 'react';
import { animated, useSpring } from 'react-spring';

const Boop = ({ rotation = 0, timing = 150, children }) => {
  const [isBooped, setIsBooped] = useState(false);

  const style = useSpring({
    display: 'inline-block',
    backfaceVisibility: 'hidden',
    transform: isBooped ? `rotate(${rotation}deg)` : `rotate(0deg)`,
    config: {
      tension: 300,
      friction: 10,
    },
  });

  useEffect(() => {
    setIsBooped(true);
  }, []);

  useEffect(() => {
    if (!isBooped) return;

    const timeoutId = setTimeout(() => {
      setIsBooped(false);
    }, timing);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isBooped, timing]);

  const trigger = () => setIsBooped(true);

  return (
    <animated.span onMouseEnter={trigger} style={style}>
      {children}
    </animated.span>
  );
};

export default Boop;
