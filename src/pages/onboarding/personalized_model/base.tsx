import {UIResponsive} from '@layout/ResponsiveUi';
import {AnimateView} from '@models/animation';
import {ButtonThemes, PrimaryButton} from '@models/button';
import {Palette} from '@styles/BaseColor';
import React from 'react';
import {StyleSheet, View} from 'react-native';
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
  return (
    <View style={styles.container}>
      <View style={styles.progress_bar_container}>
        <AnimateView order={0.3}>
          <View style={styles.progress_bar}>
            <View
              style={{
                ...styles.progress_indicator,
                width: `${progress}%`,
              }}
            />
          </View>
        </AnimateView>
      </View>
      {children}
      <View
        style={{
          ...styles.bottom_container,
          justifyContent: goPrevious ? 'space-between' : 'center',
        }}>
        {goPrevious && (
          <AnimateView order={0.5}>
            <PrimaryButton
              theme={ButtonThemes.Primary}
              size="small"
              title="Previous"
              onPress={goPrevious}
            />
          </AnimateView>
        )}
        {goNext && (
          <AnimateView order={0.6}>
            <PrimaryButton
              theme={ButtonThemes.Primary}
              size="small"
              title="Next"
              onPress={goNext}
              active={canGoNext}
            />
          </AnimateView>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...UIResponsive.FullScreen,
    backgroundColor: Palette.background.light[250],
    flexDirection: 'column',
    justifyContent: 'space-between',
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
    height: 8,
    width: UIResponsive.Body.width - 50,
    borderRadius: 50,
    overflow: 'hidden',
  },
  bottom_container: {
    width: UIResponsive.Body.width,
    height: 80,

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
