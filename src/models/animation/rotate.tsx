import React from 'react';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
const duration = 2000;
const easing = Easing.bezier(0.25, -0.5, 0.25, 1);

export default function RotationView({children}: {children: React.ReactNode}) {
  const sv = useSharedValue<number>(0);

  React.useEffect(() => {
    sv.value = withRepeat(withTiming(1, {duration, easing}), 1);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{rotate: `${sv.value * 360}deg`}],
  }));

  return <Animated.View style={animatedStyle}>{children}</Animated.View>;
}
