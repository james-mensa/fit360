import {Palette} from '@styles/BaseColor';
import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {useSharedValue, withTiming} from 'react-native-reanimated';
import Svg, {Circle, Text as SvgText} from 'react-native-svg';

interface CircularProgressProps {
  backgroundColor?: string;
  progressColor?: string;
  Cprogress?: number;
  handler?: () => void;
  size?: number;
  textColor?: string;
  textSize?: number;
  itemslist?: string[];
  showItems?: boolean;
  showPercent?: boolean;
}
const CircularProgress: React.FC<CircularProgressProps> = ({
  backgroundColor,
  progressColor,
  Cprogress,
  handler,
  size = 80,
  textColor,
  textSize,
  itemslist,
  showPercent = true,
}) => {
  const [progress, setProgress] = useState<number>(0);
  const [done, setDone] = useState<boolean>(false);
  const radius = size;
  const strokeWidth = 5;
  const circumference = 2 * Math.PI * radius;
  const animatedStroke = useSharedValue(0);

  const default_items = [
    'initialization',
    'onboarding',
    'personalized model',
    'creating personalized model..',
    'basic_check',
    'complete',
  ];
  const items = itemslist ?? default_items;

  const currentItem = items[Math.floor(progress * (items.length - 1))];

  useEffect(() => {
    if (!done) {
      const interval = setInterval(() => {
        setProgress(prevProgress => {
          if (prevProgress >= 1) {
            clearInterval(interval);
            setDone(true);
            return 1;
          }
          return prevProgress + 0.01; // Adjust the increment as needed
        });
      }, 100); // Adjust the interval duration as needed

      return () => clearInterval(interval); // Clean up the interval
    } else {
      handler && handler();
    }
  }, [done, handler]);

  useEffect(() => {
    animatedStroke.value = withTiming(Cprogress ?? progress * circumference, {
      duration: 100,
    });
  }, [progress, animatedStroke, circumference, Cprogress]);

  return (
    <View
      style={[styles.container, {backgroundColor: backgroundColor ?? 'none'}]}>
      <Svg width={radius * 2} height={radius * 2}>
        <Circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          stroke="transparent"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <AnimatedCircle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          stroke={
            progressColor
              ? progressColor
              : progress === 1
              ? Palette.ColorsFromImage.view1[100]
              : Palette.ColorsFromImage.view1[250]
          }
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - animatedStroke.value}
          strokeLinecap="round"
          fill="none"
        />
        <SvgText
          x={radius}
          y={radius}
          textAnchor="middle"
          dy=".3em"
          fontSize={textSize ?? '9'}
          fill={textColor ?? Palette.text.dark[400]}>
          {currentItem}
        </SvgText>
        <SvgText
          x={radius}
          y={radius + 20}
          textAnchor="middle"
          dy=".1em"
          fontSize="12"
          fill={textColor ?? Palette.text.dark[400]}>
          { showPercent && `${Math.round(progress * 100)}%`}
        </SvgText>
      </Svg>
    </View>
  );
};

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressText: {
    color: 'blue',
    fontSize: 18,
    marginTop: 10,
  },
});

export default CircularProgress;
