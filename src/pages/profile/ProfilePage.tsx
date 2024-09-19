import {AppStyles} from '@common/common-ui';
import {VectorIcons} from '@common/VectorIcons';
import {UIResponsive} from '@layout/ResponsiveUi';
import {UImage} from '@models/Icon';
import {Label, LabelVariant} from '@models/label';
import {useProvider} from '@store/provider';
import {Palette} from '@styles/BaseColor';
import LinearGradient from 'react-native-linear-gradient';
import React, {useEffect, useMemo} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {GapVertical} from '@models/gap';
import {ScrollViewHorizontal} from '@models/ScrollView';
import {ButtonThemes, PrimaryButton} from '@models/button';
import {SettingsLoading} from './loading';
const LinearGradientBase = () => {
  const {logout} = useProvider();

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
        style={styles.frame}>
        <View style={styles.button}>
          <PrimaryButton
            title="Logout"
            theme={ButtonThemes.Dark}
            size="small"
            onPress={logout}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export const ProfilePage = () => {
  const {user, refreshUser} = useProvider();
  useEffect(() => {
    refreshUser();
  }, []);
  const userImage = useMemo(() => user?.user_image_url, [user]);
  if (!userImage) {
    return <SettingsLoading />;
  }
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <LinearGradientBase />
          <View style={styles.image}>
            <UImage
              source={{uri: userImage}}
              resizeMode="cover"
              height={130}
              width={130}
            />
          </View>
          <GapVertical h={30} />
          <View style={styles.card}>
            <Label
              title={user?.user_name}
              variant={LabelVariant.H2_Bold.TInterface}
            />
          </View>
          <View style={styles.content}>
            <View style={styles.indicator}>
              <Label
                title={user?.fitness_level}
                variant={LabelVariant.H3_Bold.small.extra}
              />
            </View>
            <View style={styles.indicator_line} />
            <View style={styles.card}>
              {VectorIcons.gender}
              <Label
                title={user?.gender}
                variant={LabelVariant.H3_Bold.small.extra}
              />
            </View>
          </View>
          <GapVertical h={30} />
          <View style={styles.card}>
            {VectorIcons.plan}
            <Label
              title={'3 months plan (6 phases) '}
              variant={LabelVariant.H3_Bold.small.extra}
            />
          </View>
          <GapVertical h={10} />
          <View style={styles.card}>
            <Label
              title={'Target body zones'}
              variant={LabelVariant.H3_Bold.small.extra}
            />
          </View>
          <View style={styles.card}>
            <GapVertical h={30} />
            <ScrollViewHorizontal>
              {user?.target_body_zones.map((zone, index) => (
                <View key={index} style={styles.label}>
                  {VectorIcons.circleDot}
                  <Label
                    key={index}
                    title={zone}
                    variant={LabelVariant.H3_Bold.small.extra}
                  />
                </View>
              ))}
            </ScrollViewHorizontal>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: UIResponsive.Body.width,
    height: UIResponsive.FullScreen.height,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
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
  indicator: {
    backgroundColor: Palette.background.light[550],
    width: 130,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginLeft: 10,
  },
  controllers: {
    width: UIResponsive.Body.width - 50,
    height: 200,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
  },
  controller_button: {
    padding: 10,
    backgroundColor: Palette.background.light[100],
    ...AppStyles.shadow,
    borderRadius: 50,
  },
  next: {},
  progress: {
    ...AppStyles.shadow,
    width: 150,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 80,
    backgroundColor: Palette.background.light[100],
  },
  label: {
    marginRight: 10,
    display: 'flex',
    flexDirection: 'row',
    gap: 3,
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
