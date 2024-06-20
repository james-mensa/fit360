import {Icons} from '@assets/register';
import {UIResponsive} from '@layout/ResponsiveUi';
import {Avater} from '@models/Avater';
import {Pallete} from '@styles/BaseColor';
import Feather from 'react-native-vector-icons/Feather';
import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {Label, LabelVarient} from '@models/label';
import {PrimaryCardProps} from './common';

export const PrimaryCard: React.FC<PrimaryCardProps> = ({
  title,
  description,
  image,
  onPress,
  bgColor,
}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image ?? Icons.fitness_1}
        resizeMode="cover"
        style={styles.card}>
        <View style={styles.label}>
          <View style={styles.labelBox}>
            <View style={styles.labelCard}>
              <Label
                varient={LabelVarient.H3_Bold.small.Roboto}
                title={title}
                color={Pallete.text.light[800]}
              />
              <Label
                varient={LabelVarient.H3_Bold.extra}
                title={description ?? ''}
                color={Pallete.text.light[100]}
              />
            </View>
          </View>
          <View style={styles.labelRight}>
            <View style={styles.labelRightSpace}>
              <View
                style={{
                  ...styles.labelRightBg,
                  backgroundColor: bgColor,
                }}></View>
            </View>
          </View>
        </View>
        <View style={styles.actionBox}>
          <View style={{...styles.boxTop, backgroundColor: bgColor}}></View>
          <View style={styles.boxBottom}>
            <View style={{backgroundColor: bgColor}}>
              <View style={styles.boxBottomSpace}>
                <View style={styles.icon}>
                  <Avater
                    icon={
                      <Feather
                        name="arrow-up-right"
                        size={20}
                        color={Pallete.background.light[100]}
                      />
                    }
                    bg={Pallete.Button[100]}
                    onPress={onPress}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    ...UIResponsive.Card.primary,
    overflow: 'hidden',
  },
  card: {
    ...UIResponsive.Card.primary,
    height: 180,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  label: {
    height: 180,
    width: UIResponsive.Card.primary.width * (0.85 / 1),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionBox: {
    height: 100,
    backgroundColor: Pallete.background.light[100],
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
    backgroundColor: Pallete.background.light[100],
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
    backgroundColor: Pallete.background.light[100],
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
