import {Icons} from '@assets/register';
import {Navigation} from '@common/type';
import {UIResponsive} from '@layout/ResponsiveUi';
import {AnimateView} from '@models/animation';
import RotationView from '@models/animation/rotate';
import {ButtonThemes, PrimaryButton} from '@models/button';
import {Label, LabelVariant} from '@models/label';
import {useNavigation} from '@react-navigation/native';
import {Palette} from '@styles/BaseColor';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
export const GetStarted = () => {
  const navigation = useNavigation<Navigation>();
  const getStartOnClick = () => {
    navigation.navigate('Gender');
  };
  return (
    <LinearGradient
      style={styles.container}
      colors={[
        Palette.ColorsFromImage.view1[200],
        Palette.ColorsFromImage.view1[250],
        Palette.ColorsFromImage.view1[200],
      ]}
      start={{x: 0.0, y: 0.25}}
      end={{x: 0.5, y: 1.0}}
      locations={[0, 0.5, 0.6]}>
      <View style={styles.container}>
        <RotationView>
          <Image style={styles.logo} source={Icons.logo} />
        </RotationView>
        <View style={styles.init_title}>
          <AnimateView order={0}>
            <Label
              title={'START'}
              variant={LabelVariant.H1_Bold_Large.TInterface}
            />
          </AnimateView>
          <AnimateView order={0.1}>
            <Image style={styles.init_title_icon} source={Icons.pressUp1} />
          </AnimateView>
        </View>

        <View style={styles.label}>
          <View style={styles.label_small}>
            <Label title={'YOUR'} variant={LabelVariant.H3_Bold.extra} />
          </View>
          <AnimateView order={0.2}>
            <Label
              title={'NEW DAY'}
              variant={LabelVariant.H1_Bold.TInterface}
            />
          </AnimateView>
        </View>
        <AnimateView order={0.3}>
          <View style={styles.label}>
            <Label
              title={'WITH'}
              variant={LabelVariant.H1_Bold_Large.TInterface}
            />
            <Label
              title={'US'}
              variant={LabelVariant.H1_Bold_Large.TInterface}
            />
          </View>
        </AnimateView>
      </View>
      <AnimateView order={0.4}>
        <PrimaryButton
          title="Getting Started"
          theme={ButtonThemes.Default}
          onPress={getStartOnClick}
        />
      </AnimateView>
      <AnimateView order={0.5}>
        <PrimaryButton
          title="I already have an account"
          theme={ButtonThemes.Primary}
        />
      </AnimateView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 10,
    padding: 50,
  },

  logo: {
    width: 100,
    height: 100,
  },
  init_title: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 20,
    width: UIResponsive.Body.width - 50,
  },

  init_title_icon: {width: 130, height: 50, borderRadius: 80},
  label: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: UIResponsive.Body.width - 50,
    alignItems: 'flex-end',
    gap: 20,
  },
  label_small: {
    marginBottom: 8,
  },
});
