import {UIResponsive} from '@layout/ResponsiveUi';
import {Label, LabelVarient} from '@models/label';
import {Pallete} from '@styles/BaseColor';
import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
interface buttonProps {
  size?: 'large' | 'small' | 'medium';
  theme: buttonTheme;
  onPress?: () => void;
  title: string;
  loadingState?: boolean;
}

interface buttonTheme {
  backgroundColor: string;
  color: string;
  boxShadow?: string;
  loaderColor?: string;
}

export const ButtonThemes = {
  Default: {
    backgroundColor: Pallete.background.light[150],
    color: Pallete.text.dark[100],
    loaderColor: Pallete.background.light[550],
  },
  Primary: {
    backgroundColor: Pallete.Button[200],
    color: Pallete.text.dark[100],
    loaderColor: Pallete.ColorsFromImage.view1[150],
  },
  Light: {
    backgroundColor: Pallete.Button[300],
    color: Pallete.text.dark[100],
    loaderColor: Pallete.background.light[550],
  },
  Dark: {
    backgroundColor: Pallete.background.dark[200],
    color: Pallete.text.light[200],
    loaderColor: Pallete.background.light[550],
  },
};
const PrimaryButton: React.FC<buttonProps> = ({
  theme = ButtonThemes.Default,
  size = 'large',
  onPress,
  title,
  loadingState,
}) => {
  const width =
    size === 'large'
      ? UIResponsive.Body.width - 100
      : size === 'medium'
      ? UIResponsive.Body.width / 2
      : UIResponsive.Body.width / 4;
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          ...styles.button,
          width: width,
          backgroundColor: theme.backgroundColor,
        }}>
        {loadingState ? (
          <ActivityIndicator color={theme.loaderColor} />
        ) : (
          <Label
            varient={LabelVarient.H3_Bold.small.extra}
            color={theme?.color}
            title={title}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
