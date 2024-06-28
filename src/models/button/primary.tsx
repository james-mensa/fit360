import {UIResponsive} from '@layout/ResponsiveUi';
import {Label, LabelVarient} from '@models/label';
import {Palette} from '@styles/BaseColor';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
interface buttonProps {
  size?: 'large' | 'small' | 'medium';
  theme: buttonTheme;
  onPress?: () => void;
  title: string;
  loadingState?: boolean;
  active?: boolean;
}

interface buttonTheme {
  backgroundColor: string;
  color: string;
  boxShadow?: string;
  loaderColor?: string;
}

export const ButtonThemes = {
  Default: {
    backgroundColor: Palette.background.light[150],
    color: Palette.text.dark[100],
    loaderColor: Palette.background.light[550],
  },
  Primary: {
    backgroundColor: Palette.Button[200],
    color: Palette.text.dark[100],
    loaderColor: Palette.ColorsFromImage.view1[150],
  },
  Light: {
    backgroundColor: Palette.Button[300],
    color: Palette.text.dark[100],
    loaderColor: Palette.background.light[550],
  },
  Dark: {
    backgroundColor: Palette.background.dark[200],
    color: Palette.text.light[200],
    loaderColor: Palette.background.light[550],
  },
};
const PrimaryButton: React.FC<buttonProps> = ({
  theme = ButtonThemes.Default,
  size = 'large',
  onPress,
  title,
  loadingState,
  active = true,
}) => {
  const width =
    size === 'large'
      ? UIResponsive.Body.width - 100
      : size === 'medium'
      ? UIResponsive.Body.width / 2
      : UIResponsive.Body.width / 4;
  const opacity = {
    opacity: active ? 1 : 0.4,
  };
  return (
    <TouchableOpacity onPress={() => active && onPress && onPress()}>
      <View
        style={{
          ...styles.button,
          width: width,
          backgroundColor: theme.backgroundColor,
          ...opacity,
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
