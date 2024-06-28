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
  resizeMode?: 'center' | 'cover' | 'contain' | 'stretch';
}

export const UImage: React.FC<iconProps> = ({
  source,
  uri,
  sx,
  width,
  height,
  resizeMode = 'contain',
}) => {
  const customStyles = {
    width: width ?? 40,
    height: height ?? 40,
    resizeMode: resizeMode,
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
  },
});
