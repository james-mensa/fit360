import React from 'react';
import {Label, LabelVarient} from '@models/label';
import {Palette} from '@styles/BaseColor';
import {StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native';

interface CardProps {
  isChecked: boolean;
  onPress?: () => void;
  height?: number;
  title: string;
  description?: string;
  width?: number;
  borderRadius?: number;
}

const BasicCheckCard: React.FC<CardProps> = ({
  isChecked,
  onPress,
  height = 30,
  title,
  width,
  borderRadius = 50,
  description,
}) => {
  const imgstyle = width
    ? {
        height,
        width,
        borderRadius,
      }
    : {
        height,
        borderRadius,
      };

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          ...styles.card,
          ...imgstyle,
          backgroundColor: isChecked
            ? Palette.ColorsFromImage.view1[100]
            : Palette.background.dark[300],
          ...directionLayout(description ? true : false).contentLayout,
        }}>
        <Label
          color={isChecked ? Palette.text.light[100] : Palette.text.light[100]}
          title={title}
          varient={LabelVarient.Sub1.TInterface}
        />
        <Label
          color={isChecked ? Palette.text.light[500] : Palette.text.light[500]}
          title={description}
          varient={LabelVarient.Sub4.TInterface}
        />
      </View>
    </TouchableOpacity>
  );
};

export default BasicCheckCard;
const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
});
const directionLayout = (show: boolean) => {
  return StyleSheet.create({
    contentLayout: {
      flexDirection: show ? 'column' : 'row',
    },
  });
};
