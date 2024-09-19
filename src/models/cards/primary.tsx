import {Icons} from '@assets/register';
import {UIResponsive} from '@layout/ResponsiveUi';
import {Avater} from '@models/Avater';
import {Palette} from '@styles/BaseColor';
import Feather from 'react-native-vector-icons/Feather';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Label, LabelVariant} from '@models/label';
import {PrimaryCardProps} from './common';
import {GapVertical} from '@models/gap';
import {useNavigation} from '@react-navigation/native';
import {Navigation} from '@common/type';
import {useProvider} from '@store/provider';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {BaseAnimationView} from '@models/animation';

const cardColors = [Palette.ColorsFromImage.muscle_1, '#0e041c', '#160133'];
export const PrimaryCard: React.FC<PrimaryCardProps> = ({
  items,
  title,
  description,
  image,
  index,
}) => {
  const {setPlayList} = useProvider();
  const PageNav = useNavigation<Navigation>();
  const handleOnPress = () => {
    setPlayList(items);
    PageNav.navigate('Player');
  };
  const _index = index % cardColors.length;
  const styles = getstyles(_index);
  const bgColor = cardColors[_index];
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <BaseAnimationView order={0.6}>
            <Image style={styles.cardImage} source={image ?? Icons.fitness_1} />
          </BaseAnimationView>
        </View>

        <View style={styles.label}>
          <View style={styles.labelBox}>
            <View style={styles.labelCard}>
              <Label
                variant={LabelVariant.H3_Bold.small.extra}
                title={`${title} routine`}
                color={Palette.text.light[700]}
              />
              <GapVertical h={15} />
              <Label
                variant={LabelVariant.H3_Bold.small.extra}
                title={` ${description}`}
                color={Palette.text.light[100]}
              />
            </View>
          </View>
          <View style={styles.labelRight}>
            <View style={styles.labelRightSpace}>
              <View
                style={{
                  ...styles.labelRightBg,
                  backgroundColor: bgColor,
                }}
              />
            </View>
          </View>
        </View>
        <View style={styles.actionBox}>
          <View style={{...styles.boxTop, backgroundColor: bgColor}} />
          <View style={styles.boxBottom}>
            <View style={{backgroundColor: bgColor}}>
              <View style={styles.boxBottomSpace}>
                <TouchableOpacity onPress={handleOnPress}>
                  <View style={styles.icon}>
                    <Avater
                      icon={
                        <Feather
                          name="arrow-up-right"
                          size={20}
                          color={Palette.background.light[100]}
                        />
                      }
                      bg={Palette.Button[100]}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const getstyles = (index: number) => {
  return StyleSheet.create({
    imageContainer: {
      position: 'absolute',
      marginLeft: 100,
    },
    cardImage: {
      resizeMode: 'contain',
      height: UIResponsive.Card.primary.height,
      width: 220,
    },

    container: {
      borderRadius: 30,
      ...UIResponsive.Card.primary,
      overflow: 'hidden',
    },
    card: {
      ...UIResponsive.Card.primary,
      height: UIResponsive.Card.primary.height,
      flexDirection: 'row',
      alignItems: 'flex-end',
      backgroundColor: cardColors[index],
      // zIndex: 1001,
    },
    label: {
      height: 180,
      width: UIResponsive.Card.primary.width * (0.85 / 1),
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    actionBox: {
      height: 100,
      backgroundColor: Palette.background.light[100],
      width: UIResponsive.Card.primary.width * (0.15 / 1),
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    },
    boxTop: {
      height: 50,
      width: UIResponsive.Card.primary.width * (0.15 / 1),
      borderBottomRightRadius: 20,
    },
    boxBottom: {
      height: 50,
      width: UIResponsive.Card.primary.width * (0.15 / 1),
    },
    boxBottombBg: {},
    boxBottomSpace: {
      height: 30,
      width: UIResponsive.Card.primary.width * (0.15 / 1),
      backgroundColor: Palette.background.light[100],
      borderTopLeftRadius: 50,
    },
    labelBox: {
      height: 200,
      width: UIResponsive.Card.primary.width * (0.75 / 1),
      flexDirection: 'column',
      justifyContent: 'center',
      padding: 20,
    },

    labelCard: {
      height: 100,
      width: UIResponsive.Card.primary.width * (0.54 / 1),
      flexDirection: 'column',
      justifyContent: 'flex-end',
    },
    labelRight: {
      height: 180,
      width: UIResponsive.Card.primary.width * (0.1 / 1),
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    },
    labelRightSpace: {
      height: 30,
      width: UIResponsive.Card.primary.width * (0.1 / 1),
      backgroundColor: Palette.background.light[100],
    },
    labelRightBg: {
      height: 30,
      width: UIResponsive.Card.primary.width * (0.1 / 1),
      borderBottomRightRadius: 25,
    },
    icon: {
      width: 60,
      height: 50,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
};
