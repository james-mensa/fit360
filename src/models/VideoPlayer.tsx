import {} from 'react-native-video';
import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Image,
  ImageSourcePropType,
  StyleSheet,
  View,
} from 'react-native';
import {UIResponsive} from '@layout/ResponsiveUi';
import {AppStyles} from '@common/common-ui';
import {Palette} from '@styles/BaseColor';
import {Label, LabelVariant} from './label';
import {formatTime, getToolImg} from '@core/utils';
import {Icons} from '@assets/register';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {AnimateView} from './animation';
interface PlayerProps {
  file: ImageSourcePropType;
  description?: string;
  name?: string;
  duration?: number;
  playNow?: () => void;
  progress: number;
  isCompleted: boolean;
}
export const VideoPlayer = ({
  file,
  description,
  name,
  playNow,
  duration,
  progress,
  isCompleted,
}: PlayerProps) => {
  const toolPath = getToolImg();
  const [state, setState] = useState<{play: boolean; finish: boolean}>({
    play: false,
    finish: false,
  });
  const [isLoading, setLoading] = useState(false);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const fadeButton = useRef(new Animated.Value(1)).current;
  const fadeCountdown = useRef(new Animated.Value(1)).current;

  const onPlayPress = () => {
    playNow && playNow();
    Animated.timing(fadeButton, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      setLoading(true);
      setTimeout(() => {
        Animated.timing(fadeCountdown, {
          toValue: 0,
          duration: 1000, // Adjust the fade-out duration as needed
          useNativeDriver: true,
        }).start(() => {
          setTimeout(() => {
            Animated.timing(fadeCountdown, {
              toValue: 1,
              duration: 1000, // Adjust the fade-out duration as needed
              useNativeDriver: true,
            }).start();
          }, 5000);
        });
      }, 10000);
    });
    setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true,
      }).start(() => {
        setState({play: true, finish: false});
        Animated.timing(fadeButton, {
          toValue: 1,
          duration: 3000,
          useNativeDriver: true,
        }).start();
      });
    }, 12000);
  };
  useEffect(() => {
    if (progress === 1 && state.play === true) {
      setState({play: false, finish: true});
      setLoading(false);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }
  }, [progress, state.play]);

  return (
    <View style={styles.container}>
      <View style={styles.image_container}>
        <Image source={file} style={styles.image} />
      </View>
      {!state.play && !isCompleted && (
        <Animated.View
          style={[styles.description_container, {opacity: fadeAnim}]}>
          <View style={styles.contentLayout}>
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
            <AnimateView order={0.5}>
              <Label
                title={description}
                variant={LabelVariant.Sub2.TInterface}
              />
            </AnimateView>
          </View>

          <AnimateView order={0.7}>
            <View style={styles.playButtonContainer}>
              {isLoading ? (
                <AnimateView order={0.3}>
                  <Animated.View style={{opacity: fadeCountdown}}>
                    <Image
                      source={Icons.figure_count_down}
                      style={styles.count_down}
                    />
                  </Animated.View>
                </AnimateView>
              ) : (
                <Animated.View
                  style={[styles.playButton, {opacity: fadeButton}]}>
                  <TouchableOpacity onPress={onPlayPress}>
                    <View style={styles.play}>
                      <Image source={Icons.play} style={styles.playImg} />
                    </View>
                  </TouchableOpacity>
                </Animated.View>
              )}
            </View>
          </AnimateView>
        </Animated.View>
      )}
      {isCompleted && (
        <View style={styles.description_container}>
          <AnimateView order={0.3}>
            <View style={styles.description_layout}>
              <View style={styles.contentLayout}>
                <View style={styles.detailContainer}>
                  <View style={styles.tool}>
                    <Image source={toolPath} style={styles.toolImg} />
                  </View>
                  <View style={styles.label_container}>
                    <Label
                      title={name}
                      variant={LabelVariant.Sub3.TInterface}
                    />
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
                <AnimateView order={0.5}>
                  <Label
                    title={description}
                    variant={LabelVariant.Sub2.TInterface}
                  />
                </AnimateView>
              </View>
            </View>
          </AnimateView>

          <AnimateView order={0.5}>
            <View style={styles.playButtonContainer}>
              <Image source={Icons.congrats} style={styles.congrats} />
              <Label
                title={'Finished. Great!!'}
                variant={LabelVariant.Sub2.TInterface}
              />
              <TouchableOpacity onPress={onPlayPress}>
                <View style={styles.replay}>
                  <Image source={Icons.play} style={styles.playImg} />
                </View>
              </TouchableOpacity>
            </View>
          </AnimateView>
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
    gap: 10,
  },
  contentLayout: {
    display: 'flex',
    flexDirection: 'column',
    gap: 30,
  },
  image_container: {
    borderRadius: 20,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: Palette.background.light[300],
    width: UIResponsive.Body.width - 30,
    height: UIResponsive.Body.height / 1.8,
    overflow: 'hidden',
    ...AppStyles.shadow,
  },
  congrats: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
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
  replay: {
    marginTop: 10,
    height: 40,
    width: 40,
    borderRadius: 10,
    backgroundColor: Palette.background.light[300],
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
    height: UIResponsive.Body.height / 1.8,
    overflow: 'hidden',
    ...AppStyles.shadow,
    position: 'absolute',
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    justifyContent: 'space-between',
    paddingBottom: 50,
  },
  description_layout: {
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
  count_down: {
    height: 150,
    width: 150,
    resizeMode: 'contain',
    borderRadius: 30,
  },
});
