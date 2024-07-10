import {UIResponsive} from '@layout/ResponsiveUi';
import {ButtonThemes, PrimaryButton} from '@models/button';
import {Palette} from '@styles/BaseColor';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

interface BaseProps {
  children: React.ReactNode;
  goPrevious?: () => void;
  goNext?: () => void;
  progress?: number;
  canGoNext?: boolean;
}

export const Base: React.FC<BaseProps> = ({
  children,
  goNext,
  goPrevious,
  progress = 10,
  canGoNext,
}) => {
  const progressValue = useSharedValue(progress);

  useEffect(() => {
    progressValue.value = withTiming(progress, {duration: 500});
  }, [progress, progressValue]);

  const animatedProgressStyle = useAnimatedStyle(() => ({
    width: `${progressValue.value}%`,
  }));

  return (
    <View style={styles.layout}>
      <View style={styles.container}>
        <View style={styles.progress_bar_container}>
          <View>
            <View style={styles.progress_bar}>
              <Animated.View
                style={[styles.progress_indicator, animatedProgressStyle]}
              />
            </View>
          </View>
        </View>
        {children}
        <View
          style={{
            ...styles.bottom_container,
            justifyContent: goPrevious ? 'space-between' : 'center',
          }}>
          {goPrevious && (
            <View>
              <PrimaryButton
                theme={ButtonThemes.Primary}
                size="small"
                title="Previous"
                onPress={goPrevious}
              />
            </View>
          )}
          {goNext && (
            <View>
              <PrimaryButton
                theme={ButtonThemes.Primary}
                size={goPrevious ? 'small' : 'large'}
                title={'Next'}
                onPress={goNext}
                active={canGoNext}
              />
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    width: UIResponsive.FullScreen.width,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    backgroundColor: Palette.background.light[250],
  },

  container: {
    width: UIResponsive.Body.width,
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: UIResponsive.FullScreen.height,
  },

  progress_bar_container: {
    width: UIResponsive.Body.width,
    height: 50,
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  progress_bar: {
    backgroundColor: Palette.background.light[200],
    height: 3,
    width: UIResponsive.Body.width - 50,
    borderRadius: 50,
    overflow: 'hidden',
  },
  bottom_container: {
    width: UIResponsive.Body.width,
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  progress_indicator: {
    width: 0,
    backgroundColor: Palette.Button[200],
    height: 8,
  },
});
