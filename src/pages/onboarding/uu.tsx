import {Icons} from '@assets/register';
import {VectorIcons} from '@common/VectorIcons';
import {UIResponsive} from '@layout/ResponsiveUi';
import {Label, LabelVariant} from '@models/label';
import {Palette} from '@styles/BaseColor';
import React, {useState} from 'react';
import {
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

const onBoardingSteps = {
  view1: {
    title: 'Personalized Workout',
    details:
      'Engage in workout process that suits your goals with respect to your nutrition',
    icon: Icons.view1,
  },
  view2: {
    title: 'Community Motivation',
    details:
      'Connect with minded fitness enthusiasts to motivate your journey, challenges, and share your fitness plan',
    icon: Icons.view2,
  },
  view3: {
    title: 'Track your fitness',
    details:
      'Easily track your daily fitness analysis that suits your goals with respect to your nutrition',
    icon: Icons.view2,
  },
};

export const Onboarding = () => {
  const [step, setStep] = useState(0);
  const steps = Object.values(onBoardingSteps);

  const handleNext = () => {
    setStep(prevStep => (prevStep + 1) % steps.length);
  };

  return (
    <ImageBackground source={steps[step].icon} style={styles.container}>
      <View style={styles.topIcon}>
        <TouchableOpacity>{VectorIcons.backArrow}</TouchableOpacity>
      </View>
      <View>
        <View style={styles.center} />
        <View style={styles.center}>
          <View style={styles.bottomContainer}>
            <Label
              variant={LabelVariant.H2_Bold.Roboto}
              title={steps[step].title}
              color={Palette.text.light[100]}
            />
            <Label
              variant={LabelVariant.H3_Bold.small.extra}
              color={Palette.text.light[300]}
              title={steps[step].details}
            />
            <Controls step={step} handleNext={handleNext} />
          </View>
        </View>
      </View>
    </ImageBackground>
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
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Label title={'Next'} variant={LabelVariant.H3_Bold.small.extra} />
      </TouchableOpacity>
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

  active_indicator: {width: 15, height: 7},
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
