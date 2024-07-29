import {bodyZones, Icons} from '@assets/register';
import {AppStyles} from '@common/common-ui';
import {Navigation} from '@common/type';
import {VectorIcons} from '@common/VectorIcons';
import {BodyZonesTypes, GenderType} from '@core/data-types';
import {formatTime} from '@core/utils';
import {UIResponsive} from '@layout/ResponsiveUi';
import CircularProgress from '@models/progress/CircularProgress';
import {VideoPlayer} from '@models/VideoPlayer';
import {VideoProgressIndicator} from '@models/VideoProgressIndicator';
import {useNavigation} from '@react-navigation/native';
import {useProvider} from '@store/provider';
import {Palette} from '@styles/BaseColor';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
const Player = () => {
  const PageNav = useNavigation<Navigation>();
  const {playList, getFirstIncompleteExercise, user} = useProvider();
  const handleOnPress = () => {
    PageNav.goBack();
  };

  const current = getFirstIncompleteExercise();
  const duration = current ? current.duration : 120;
  const path = current ? current.path : 'belly';
  const gender = user ? user.gender : 'female';
  const instruction = bodyZones[path as BodyZonesTypes][gender][current?.link];
  console.log({instruction});
  const [count, setCount] = useState<number>();
  const [progress, setProgress] = useState<number>(0);
  useEffect(() => {
    let timerId: NodeJS.Timeout | null = null;
    if (count) {
      console.log({count});
      if (count > 0) {
        timerId = setInterval(() => {
          setCount(count - 1);
          setTimeout(() => {
            setProgress(duration);
          }, 1000);
        }, 1000);
      }
    }

    return () => {
      if (timerId) {
        clearInterval(timerId);
      }
    };
  }, [count, duration]);
  useEffect(() => {
    let timerId: NodeJS.Timeout | null = null;
    if (progress) {
      if (progress > 0) {
        timerId = setInterval(() => {
          setProgress(progress - 1);
        }, 1000);
      }
    }

    return () => {
      if (timerId) {
        clearInterval(timerId);
      }
    };
  }, [progress]);

  const handleStartCountDown = () => {
    console.log('handleStartCountDown');
    setCount(10); // Reset countdown to 10 seconds
  };
  const circumference = 2 * Math.PI * 80;
  const progressPercentage =
    circumference - (progress / duration) * circumference;
  console.log({progress});
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.card}>
            <View style={styles.indicator_container}>
              {VectorIcons.Close({onPress: handleOnPress})}
              <View style={styles.indicator}>
                {playList.map((ex, index) => {
                  return <VideoProgressIndicator key={index} progress={50} />;
                })}
              </View>
            </View>
            <VideoPlayer
              name={current?.name}
              playNow={handleStartCountDown}
              duration={current?.duration}
              description={getFirstIncompleteExercise()?.description}
              file={instruction}
            />
            {count !== undefined && (
              <View style={styles.controllers}>
                <View style={styles.controller_button}>
                  {VectorIcons.previous({onPress: () => {}})}
                </View>
                <View style={styles.progress}>
                  <CircularProgress
                    Cprogress={count !== 0 ? 0 : progressPercentage}
                    progressColor={Palette.background.light[500]}
                    textSize={count === 0 ? 15 : 70}
                    showPercent={false}
                    textColor={Palette.background.light[500]}
                    countDown={count === 0 ? formatTime(progress, true) : count}
                    itemslist={[
                      '10',
                      '9',
                      '8',
                      '7',
                      '6',
                      '5',
                      '4',
                      '3',
                      '2',
                      '1',
                    ]}
                    handler={() => {}}
                  />
                </View>
                <View style={styles.controller_button}>
                  {VectorIcons.next({onPress: handleStartCountDown})}
                </View>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Player;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: UIResponsive.Body.width,
    height: UIResponsive.FullScreen.height,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  card: {
    width: UIResponsive.Body.width,
    height: UIResponsive.FullScreen.height - 100,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 20,
    marginTop: 10,
  },
  indicator_container: {
    gap: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  indicator: {
    width: UIResponsive.Body.width - 50,
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  controllers: {
    width: UIResponsive.Body.width - 50,
    height: 200,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
  },
  controller_button: {
    padding: 10,
    backgroundColor: Palette.background.light[100],
    ...AppStyles.shadow,
    borderRadius: 50,
  },
  next: {},
  progress: {
    ...AppStyles.shadow,
    width: 150,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 80,
    backgroundColor: Palette.background.light[100],
  },
});
