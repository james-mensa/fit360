import React from 'react';
import {VectorIcons} from '@common/VectorIcons';
import {UIResponsive} from '@layout/ResponsiveUi';
import {Label, LabelVariant} from '@models/label';
import {Palette} from '@styles/BaseColor';
import {Image, ImageSourcePropType, StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native';

interface CardProps {
  img: ImageSourcePropType | undefined;
  isChecked: boolean;
  onPress?: () => void;
  width?: number;
  height?: number;
  title: string;
  description?: string;
}

const CheckCard: React.FC<CardProps> = ({
  img,
  isChecked,
  onPress,
  width = UIResponsive.Body.width - 50,
  height = 110,
  title,
  description,
}) => {
  const imgstyle = {
    width: width,
    height: height,
  };

  return (
    <View
      style={{
        ...styles.avater_container,
        backgroundColor: isChecked
          ? Palette.ColorsFromImage.view1[100]
          : Palette.background.dark[300],
      }}>
      <TouchableOpacity onPress={onPress}>
        <View style={{...styles.card, ...imgstyle}}>
          {title && description ? (
            <View style={styles.labelContainer}>
              <Label
                color={
                  isChecked ? Palette.text.light[100] : Palette.text.light[100]
                }
                title={title}
                variant={LabelVariant.H3_Bold.small.extra}
              />
              <Label
                color={
                  isChecked ? Palette.text.light[100] : Palette.text.light[100]
                }
                title={description}
                variant={LabelVariant.Sub3.Roboto}
              />
            </View>
          ) : (
            <View style={styles.title}>
              <Label
                color={
                  isChecked ? Palette.text.light[100] : Palette.text.light[100]
                }
                title={title}
                variant={LabelVariant.H3_Bold.small.extra}
              />
            </View>
          )}

          <View style={{...styles.image_container, height: imgstyle.height}}>
            <Image source={img} style={styles.image} />
          </View>
        </View>
      </TouchableOpacity>
      {isChecked && (
        <View style={styles.check}>{VectorIcons.CheckedLight}</View>
      )}
    </View>
  );
};

export default CheckCard;
const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    paddingVertical: 15,
    paddingHorizontal: 20,
    gap: 20,
  },
  card: {
    width: UIResponsive.Body.width,
    height: 350,
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  avater_container: {
    borderRadius: 20,
    padding: 2,
  },
  labelContainer: {
    padding: 10,
    width: 200,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 10,
  },
  image_container: {
    overflow: 'hidden',
  },
  image: {
    width: 160,
    height: 80,
    paddingRight: 40,
    resizeMode: 'contain',
  },
  check: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: Palette.ColorsFromImage.view1[100],
    borderWidth: 1,
    borderColor: Palette.background.light[100],
    position: 'absolute',

    right: -12,
    top: -10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    paddingLeft: 10,
  },
});
