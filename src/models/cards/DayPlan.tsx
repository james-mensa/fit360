import {UIResponsive} from '@layout/ResponsiveUi';
import React from 'react';
import {Image, ImageBackground, StyleSheet, View} from 'react-native';
import {CardIcons} from '../../assets/register';
import {Label, LabelVariant} from '@models/label';
import {useProvider} from '@store/provider';
import {BodyZonesTypes, GenderType} from '@core/data-types';
import {Palette} from '@styles/BaseColor';
import {getToolImg} from '@core/utils';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {AppStyles} from '@common/common-ui';
import {Icons} from '@assets/register';
import {Navigation} from '@common/type';
import {useNavigation} from '@react-navigation/native';
import {DayPlanModelTy, WorkoutModelTy} from '@core/db/types';
import {WorkoutModel} from '@core/db/models';
import {List} from 'realm';
interface PlanProps {
  title: string;
  count: number;
  type: string;
  index: number;
  item: DayPlanModelTy;
}
export const DayPlan: React.FC<PlanProps> = ({
  title,
  count,
  type,
  index,
  item,
}) => {
  const {user, setPlayList} = useProvider();
  const gender = user ? user.gender : 'female';
  const path = CardIcons[gender as GenderType][type as BodyZonesTypes];
  const toolPath = getToolImg();
  const PageNav = useNavigation<Navigation>();
  const list = item.playlist;
  const handleOnPress = () => {
    setPlayList(list);
    PageNav.navigate('Player');
  };
  return (
    <TouchableOpacity onPress={handleOnPress}>
      <ImageBackground
        source={Icons.card_background}
        resizeMode="cover"
        style={styles.container_image}>
        <View style={styles.container_image_cover}>
          <View
            style={{
              ...styles.container,
              backgroundColor: Palette.cardColors[index],
            }}>
            <View style={styles.content}>
              <Label title={title} variant={LabelVariant.Sub1.Extra} />
              <View style={styles.detailContainer}>
                <View style={styles.tool}>
                  <Image source={toolPath} style={styles.toolImg} />
                </View>
                <View style={styles.label_container}>
                  <Label title={count} variant={LabelVariant.Sub3.TInterface} />
                  <Label
                    title={count === 1 ? 'Exercise' : 'Exercises'}
                    variant={LabelVariant.Sub3.TInterface}
                  />
                </View>
              </View>
              <View style={styles.detailContainer}>
                <View style={styles.tool}>
                  <Image source={Icons.calender} style={styles.calenderImg} />
                </View>
                <View style={styles.label_container}>
                  <Label
                    title={'Day 1'}
                    variant={LabelVariant.Sub3.TInterface}
                  />
                </View>
              </View>
            </View>
            <View style={styles.dropHover}>
              <Image source={path} style={styles.image} />
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container_image: {
    display: 'flex',
    ...UIResponsive.Card.medium,
  },
  container_image_cover: {
    backgroundColor: Palette.background.light[130],
  },
  container: {
    display: 'flex',
    ...UIResponsive.Card.medium,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
  },
  content: {
    padding: 10,
    width: UIResponsive.Card.medium.width - 130,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },

  detailContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    gap: 5,
  },
  dropHover: {
    ...AppStyles.shadow,
  },
  tool: {
    height: 27,
    width: 27,
    borderRadius: 10,
    backgroundColor: Palette.background.light[120],

    justifyContent: 'center',
    alignItems: 'center',
  },
  toolImg: {
    resizeMode: 'center',
    width: 25,
  },
  calenderImg: {
    resizeMode: 'center',
    width: 20,
  },
  image: {
    height: UIResponsive.Card.medium.height,
    width: 130,
    resizeMode: 'center',
  },
  label_container: {
    display: 'flex',
    flexDirection: 'row',

    gap: 5,
  },
});
// @assets/icons/zones/back/female/BarbellDeadlift.webp
