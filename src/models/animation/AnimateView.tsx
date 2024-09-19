import React, {useEffect} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import Animated, {
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

const DURATION = 1000;
const DELAY = 500;

interface AnimateViewProps {
  children: React.ReactNode;
  order: number;
  sx?: StyleProp<ViewStyle>;
  isScale?: boolean;
}

export default function AnimateView({
  children,
  order,
  sx,
  isScale,
}: AnimateViewProps) {
  const opacity = useSharedValue<number>(0);
  const scale = useSharedValue<number>(0.98); // Start with a smaller scale

  useEffect(() => {
    opacity.value = withDelay(
      order * DELAY,
      withTiming(1, {duration: DURATION}),
    );
    scale.value = withDelay(order * DELAY, withTiming(1, {duration: DURATION}));
  }, [opacity, scale, order]);

  return (
    <View style={sx}>
      <Animated.View
        style={{
          opacity,
          transform: [{scale: isScale ? scale : 1}],
        }}>
        {children}
      </Animated.View>
    </View>
  );
}
