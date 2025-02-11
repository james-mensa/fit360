import {UIResponsive} from '@layout/ResponsiveUi';
import {Label, LabelVariant} from '@models/label';
import {Palette} from '@styles/BaseColor';
import React from 'react';
import {
  GestureDetector,
  Gesture,
  Directions,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, {
  Easing,
  FadeIn,
  FadeInLeft,
  FadeOut,
} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
import {Navigation} from '@common/type';

interface dataType {
  title: string;
  details: string;
  icon: ImageSourcePropType | undefined;
}

interface onboardingProps {
  data: dataType;
  previousPage?: string;
  nextPage: string;
  step: number;
}
export const OnBoardingUI: React.FC<onboardingProps> = ({
  data,
  nextPage,
  step,
}) => {
  const PageNav = useNavigation<Navigation>();
  const navigation = useNavigation();
  const handleNext = () => {
    PageNav.navigate(nextPage);
  };
  const handlePrevious = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };
  const flingNext = Gesture.Fling()
    .direction(Directions.LEFT)
    .onEnd(handleNext);
  const flingPrevious = Gesture.Fling()
    .direction(Directions.RIGHT)
    .onEnd(handlePrevious);
  const compose = Gesture.Race(flingNext, flingPrevious);
  const AnimetedView = Animated.createAnimatedComponent(View);

  return (
    <AnimetedView entering={FadeIn}>
      <ImageBackground source={data.icon} style={styles.container}>
        <GestureHandlerRootView style={{flex: 1}}>
          <GestureDetector gesture={compose}>
            <View style={styles.container}>
              <View style={styles.topIcon}>
                <TouchableOpacity>
                  <MaterialIcons
                    name={'arrow-back-ios-new'}
                    size={UIResponsive.Card.icon}
                    color={Palette.ColorsFromImage.view1[100]}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <View style={styles.center} />
                <View style={styles.center}>
                  <View style={styles.bottomContainer}>
                    <Animated.View
                      entering={FadeInLeft.springify()
                        .damping(10)
                        .mass(1)
                        .stiffness(50)
                        .restDisplacementThreshold(0.1)
                        .restSpeedThreshold(5)}
                      exiting={FadeOut}>
                      <Label
                        variant={LabelVariant.H2_Bold.Roboto}
                        title={data.title}
                        color={Palette.text.light[100]}
                        align="center"
                      />
                    </Animated.View>
                    <Animated.View
                      style={{width: UIResponsive.Body.width - 50}}
                      entering={FadeIn.duration(500).easing(Easing.ease)}>
                      <Label
                        variant={LabelVariant.H3_Bold.small.extra}
                        color={Palette.text.light[300]}
                        title={data.details}
                        align="center"
                      />
                    </Animated.View>
                    <Controls step={step} handleNext={handleNext} />
                  </View>
                </View>
              </View>
            </View>
          </GestureDetector>
        </GestureHandlerRootView>
      </ImageBackground>
    </AnimetedView>
  );
};

const Controls = ({
  step,
  handleNext,
}: {
  step: number;
  handleNext: () => void;
}) => {
  return (
    <View style={styles.controller}>
      <View style={styles.indicatorContainer}>
        <View
          style={[styles.indicator, step === 0 && styles.active_indicator]}
        />
        <View
          style={[styles.indicator, step === 1 && styles.active_indicator]}
        />
        <View
          style={[styles.indicator, step === 2 && styles.active_indicator]}
        />
      </View>
      <Animated.View
        entering={FadeInLeft.duration(500).easing(Easing.ease)}
        exiting={FadeInLeft.duration(500).easing(Easing.ease)}>
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Label title={'Next'} variant={LabelVariant.H3_Bold.small.extra} />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...UIResponsive.FullScreen,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  topIcon: {padding: 15},
  center: {
    width: UIResponsive.Body.width,
    height: 200,
    shadowColor: 'red',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Shadow property for Android
    elevation: 100,
  },
  bottomContainer: {
    width: UIResponsive.Body.width,
    height: 200,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  controller: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: UIResponsive.Body.width,
    height: 70,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  indicatorContainer: {
    width: 100,
    flexDirection: 'row',
    alignItems: 'center',

    gap: 10,
  },

  active_indicator: {
    width: 15,
    height: 7,
    backgroundColor: Palette.ColorsFromImage.view1[100],
  },
  indicator: {
    width: 5,
    height: 5,
    backgroundColor: Palette.background.light[400],
    borderRadius: 5,
  },
  button: {
    backgroundColor: Palette.background.light[200],
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
  },
});
