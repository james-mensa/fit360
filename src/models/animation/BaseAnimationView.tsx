import React, {useEffect} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import Animated, {
  useSharedValue,
  withDelay,
  withTiming,
  useAnimatedStyle,
} from 'react-native-reanimated';

const DURATION = 1000;
const DELAY = 500;

interface AnimateViewProps {
  children: React.ReactNode;
  order: number;
  sx?: StyleProp<ViewStyle>;
  isScale?: boolean;
}

export default function BaseAnimationView({
  children,
  order,
  sx,
  isScale = true, // Default to true if not specified
}: AnimateViewProps) {
  const opacity = useSharedValue<number>(0);
  const scale = useSharedValue<number>(0.98); // Start with a smaller scale
  const translateY = useSharedValue<number>(30); // Start with a downward translation

  useEffect(() => {
    opacity.value = withDelay(
      order * DELAY,
      withTiming(1, {duration: DURATION}),
    );
    scale.value = withDelay(
      order * DELAY,
      withTiming(1, {duration: DURATION}), // Animate scale to normal size
    );
    translateY.value = withDelay(
      order * DELAY,
      withTiming(0, {duration: DURATION}), // Animate to the original position
    );
  }, [opacity, scale, translateY, order]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [
        {scale: isScale ? scale.value : 1},
        {translateY: translateY.value},
      ],
    };
  });

  return (
    <View style={sx}>
      <Animated.View style={animatedStyle}>{children}</Animated.View>
    </View>
  );
}
