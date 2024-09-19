import {AppStyles} from '@common/common-ui';
import {UIResponsive} from '@layout/ResponsiveUi';
import {Palette} from '@styles/BaseColor';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {GapVertical} from '@models/gap';

const LinearGradientBase = () => {
  return (
    <View>
      <LinearGradient
        colors={[
          Palette.cardColors[3],
          'lightblue',
          Palette.background.light[400],
        ]}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 0}}
        style={styles().frame}>
        <View style={styles().button}>
          <View style={styles(80).skeleton} />
        </View>
      </LinearGradient>
    </View>
  );
};

export const SettingsLoading = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles().container}>
          <LinearGradientBase />
          <View style={styles().image}>
            <View style={styles().skeletonIcon} />
          </View>
          <GapVertical h={30} />
          <View style={styles().skeleton} />
          <GapVertical h={10} />
          <View style={styles().content}>
            <View style={styles().skeleton} />
            <View style={styles().indicator_line} />
            <View style={styles(50).skeleton} />
          </View>
          <GapVertical h={10} />
          <View style={styles().card} />

          <GapVertical h={30} />
          <View style={styles().skeleton} />
          <GapVertical h={10} />
          <View style={styles(250).skeleton} />
          <View style={styles().card}>
            <GapVertical h={30} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = (width?: number) => {
  return StyleSheet.create({
    container: {
      backgroundColor: 'white',
      width: UIResponsive.Body.width,
      height: UIResponsive.FullScreen.height,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    skeleton: {
      height: 30,
      width: width ?? 200,
      backgroundColor: '#f2f0f2',
      marginLeft: 10,
      borderRadius: 10,
    },
    skeletonIcon: {
      width: 130,
      height: 130,
      backgroundColor: '#f2f0f2',
      borderRadius: 80,
      marginLeft: 10,
    },
    frame: {
      width: UIResponsive.FullScreen.width,
      height: UIResponsive.FullScreen.height / 4,
      backgroundColor: 'red',
      ...AppStyles.shadow,
    },
    image: {
      marginTop: -60,
      marginLeft: 20,
      ...AppStyles.shadow,
    },
    card: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingLeft: 10,
      paddingRight: 40,
      gap: 5,
    },
    content: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
    },
    indicator_line: {
      width: 1,
      height: 20,
      backgroundColor: 'lightgray',
      marginHorizontal: 10,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },

    button: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      paddingRight: 10,
      paddingTop: 10,
    },
  });
};
