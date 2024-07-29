import {} from 'react-native-video';
import React, {useState} from 'react';
import {Image, ImageSourcePropType, StyleSheet, View} from 'react-native';
import {UIResponsive} from '@layout/ResponsiveUi';
import {AppStyles} from '@common/common-ui';
import {Palette} from '@styles/BaseColor';
import {Label, LabelVariant} from './label';
import {formatTime, getToolImg} from '@core/utils';
import {Icons} from '@assets/register';
import {TouchableOpacity} from 'react-native-gesture-handler';
interface PlayerProps {
  file: ImageSourcePropType;
  description?: string;
  name?: string;
  duration?: number;
  playNow?: () => void;
}
export const VideoPlayer = ({
  file,
  description,
  name,
  playNow,
  duration,
}: PlayerProps) => {
  const toolPath = getToolImg();
  const [play, setplay] = useState<boolean>(false);
  const onPlayPress = () => {
    playNow && playNow();
    setTimeout(() => {
      setplay(true);
    }, 10000);
  };
  return (
    <View style={styles.container}>
      <View style={styles.image_container}>
        <Image source={file} style={styles.image} />
      </View>
      {!play && (
        <View style={styles.description_container}>
          <View style={styles.detailContainer}>
            <View style={styles.tool}>
              <Image source={toolPath} style={styles.toolImg} />
            </View>
            <View style={styles.label_container}>
              <Label title={name} variant={LabelVariant.Sub3.TInterface} />
            </View>
            <View style={styles.tool}>
              <Image source={Icons.clock} style={styles.toolImg} />
            </View>
            <View style={styles.label_container}>
              <Label
                title={formatTime(duration!)}
                variant={LabelVariant.Sub3.TInterface}
              />
            </View>
          </View>

          <Label title={description} variant={LabelVariant.Sub2.TInterface} />
          <View style={styles.playButtonContainer}>
            <View style={styles.playButton}>
              <TouchableOpacity onPress={onPlayPress}>
                <View style={styles.play}>
                  <Image source={Icons.play} style={styles.playImg} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // padding: 20,
  },

  detailContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    gap: 5,
  },
  image_container: {
    borderRadius: 20,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: Palette.background.light[300],
    width: UIResponsive.Body.width - 30,
    height: UIResponsive.Body.height / 2,
    overflow: 'hidden',
    ...AppStyles.shadow,
  },
  tool: {
    height: 30,
    width: 30,
    borderRadius: 10,
    backgroundColor: Palette.background.light[550],
    justifyContent: 'center',
    alignItems: 'center',
  },
  toolImg: {
    resizeMode: 'center',
    width: 30,
  },

  play: {
    height: 40,
    width: 40,
    borderRadius: 10,
    backgroundColor: Palette.background.light[120],

    justifyContent: 'center',
    alignItems: 'center',
  },
  playImg: {
    resizeMode: 'center',
    width: 40,
  },
  label_container: {
    display: 'flex',
    flexDirection: 'row',

    gap: 5,
  },
  description_container: {
    borderRadius: 20,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: Palette.background.light[300],
    backgroundColor: Palette.background.light[560],
    width: UIResponsive.Body.width - 30,
    height: UIResponsive.Body.height / 2,
    overflow: 'hidden',
    ...AppStyles.shadow,
    position: 'absolute',
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  playButtonContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  playButton: {
    width: '80%',
    height: 150,
    borderRadius: 20,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: Palette.background.light[300],
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
