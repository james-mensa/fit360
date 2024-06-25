import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  StyleSheetProperties,
} from 'react-native';
interface iconProps {
  source?: ImageSourcePropType;
  width?: number;
  height?: number;
  uri?: string;
  sx?: StyleSheetProperties;
}

export const UImage: React.FC<iconProps> = ({
  source,
  uri,
  sx,
  width,
  height,
}) => {
  const customStyles = {
    width: width ?? 40,
    height: height ?? 40,
  };
  return (
    <Image
      source={source ?? {uri}}
      style={{...style.image, ...sx, ...customStyles}}
    />
  );
};

const style = StyleSheet.create({
  image: {
    borderRadius: 20,
    resizeMode: 'contain',
  },
});
