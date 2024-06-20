import {UIResponsive} from '@layout/ResponsiveUi';
import Onboarding from '@pages/onboarding';
import React from 'react';
import {StyleSheet, View} from 'react-native';

export const InitializationStage = () => {
  return (
    <View style={styles.container}>
      <Onboarding />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...UIResponsive.FullScreen,
  },
});
