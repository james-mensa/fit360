import {} from 'react-native-video';
import React from 'react';
import {Image, ImageSourcePropType, StyleSheet, View} from 'react-native';
import {UIResponsive} from '@layout/ResponsiveUi';
import {AppStyles} from '@common/common-ui';
interface PlayerProps {
  file: ImageSourcePropType;
}
export const VideoPlayer = ({file}: PlayerProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.image_container}>
        <Image source={file} style={styles.image} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  image_container: {
    borderRadius: 20,
    width: UIResponsive.Body.width - 50,
    height: UIResponsive.Body.height / 3,
    overflow: 'hidden',
    ...AppStyles.shadow,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
