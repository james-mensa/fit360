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

export const UImage: React.FC<iconProps> = ({source, uri, sx}) => {
  return <Image source={source ?? {uri}} style={{...style.image, ...sx}} />;
};

const style = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
