import React, {useEffect} from 'react';
import Animated, {
  FadeOut,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

const DURATION = 1000;
const DELAY = 500;

interface AnimateViewProps {
  children: React.ReactNode;
  order: number;
}

export default function AnimateView({children, order}: AnimateViewProps) {
  const opacity = useSharedValue<number>(0);

  // prettier-ignore

  useEffect(()=>{
    opacity.value = withDelay( order * DELAY, withTiming(1, { duration: DURATION }));
},[])

  return (
    <Animated.View exiting={FadeOut} style={{opacity: opacity}}>
      {children}
    </Animated.View>
  );
}
