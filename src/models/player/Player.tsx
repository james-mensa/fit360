import React, {useEffect, useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useProvider} from '@store/provider';
import {VectorIcons} from '@common/VectorIcons';
import CircularProgress from '@models/progress/CircularProgress';
import {VideoPlayer} from '@models/VideoPlayer';
import {VideoProgressIndicator} from '@models/VideoProgressIndicator';
import {Palette} from '@styles/BaseColor';
import {UIResponsive} from '@layout/ResponsiveUi';
import {Navigation} from '@common/type';
import {AppStyles} from '@common/common-ui';
import UseWorkoutStatus from './UseWorkoutStatus';
import UseWorkoutProgress from './UseWorkoutProgress';
import Animated, {
  LinearTransition,
  ZoomInDown,
  ZoomOutDown,
} from 'react-native-reanimated';

const Player = () => {
  const PageNav = useNavigation<Navigation>();
  const {
    playList,
    getFirstIncompleteExercise,
    hasPreviousExercise,
    hasNextExercise,
  } = useProvider();
  const currentWorkout = useMemo(
    () => getFirstIncompleteExercise(),

    [getFirstIncompleteExercise],
  );

  const {workout, instruction, previousExercise, nextExercise} =
    UseWorkoutStatus(currentWorkout);
  const {
    status,
    setStatus,
    handleStartCountDown,
    progressPercentage,
    timerPercentage,
    indicatorLabel,
    indicatorFontSize,
  } = UseWorkoutProgress(workout);

  useEffect(() => {
    if (!currentWorkout) {
      setStatus(prev => ({...prev, hasPendinng: false}));
    }
  }, [currentWorkout, setStatus]);

  const handleOnPress = () => {
    PageNav.goBack();
  };

  if (!workout) {
    return;
  }

  const enablePreviousBtn =
    !['INITIALING', 'PLAYING'].includes(status.state) &&
    hasPreviousExercise(workout._id);
  const enableNextBtn =
    !['INITIALING', 'PLAYING'].includes(status.state) &&
    hasNextExercise(workout._id);

  const onPressNextButton = () => {
    if (enableNextBtn) {
      setStatus(prev => ({...prev, count: 0, progress: 0, state: 'NOT_YET'}));
      nextExercise();
    }
  };
  const onPressPreviousButton = () => {
    if (enablePreviousBtn) {
      setStatus(prev => ({...prev, count: 0, progress: 0, state: 'NOT_YET'}));
      previousExercise();
    }
  };
  return (
    <Animated.View
      entering={ZoomInDown.duration(400)}
      exiting={ZoomOutDown.duration(500)}
      layout={LinearTransition}
      style={styles.container}>
      <Animated.View style={styles.card}>
        <View style={styles.indicator_container}>
          {VectorIcons.Close({onPress: handleOnPress})}
          <View style={styles.indicator}>
            {playList.map((ex, index) => (
              <VideoProgressIndicator
                key={index}
                progress={ex._id === workout._id ? timerPercentage : 0}
                active={ex._id === workout._id}
                completed={ex.completed === true}
                isPlaying={status.state === 'PLAYING'}
              />
            ))}
          </View>
        </View>
        <VideoPlayer
          progress={status.progress}
          name={workout.name}
          playNow={handleStartCountDown}
          duration={workout.duration}
          description={workout.description}
          isCompleted={status.state === 'FINISHED'}
          file={instruction}
        />
        {!status.hasPendinng && (
          <View style={styles.controllers}>
            <View style={styles.controller_button}>
              {VectorIcons.previous({
                onPress: onPressPreviousButton,
                color: enablePreviousBtn
                  ? undefined
                  : Palette.background.light[510],
              })}
            </View>
            <View style={styles.progress}>
              <CircularProgress
                size={80}
                cProgress={status.count !== 0 ? 0 : progressPercentage}
                progressColor={Palette.background.light[500]}
                textSize={indicatorFontSize}
                showPercent={false}
                textColor={Palette.background.light[500]}
                countDown={indicatorLabel}
                itemslist={['10', '9', '8', '7', '6', '5', '4', '3', '2', '1']}
                handler={() => {}}
              />
            </View>
            <View style={styles.controller_button}>
              {VectorIcons.next({
                onPress: onPressNextButton,
                color: enableNextBtn
                  ? undefined
                  : Palette.background.light[510],
              })}
            </View>
          </View>
        )}
        {status.hasPendinng &&
          ['INITIALING', 'PLAYING'].includes(status.state) && (
            <View style={styles.controllers}>
              <View style={styles.controller_button}>
                {VectorIcons.previous({
                  onPress: onPressPreviousButton,
                  color: enablePreviousBtn
                    ? undefined
                    : Palette.background.light[510],
                })}
              </View>
              <View style={styles.progress}>
                <CircularProgress
                  cProgress={status.count !== 0 ? 0 : progressPercentage}
                  progressColor={Palette.background.light[500]}
                  textSize={indicatorFontSize}
                  showPercent={false}
                  textColor={Palette.background.light[500]}
                  countDown={indicatorLabel}
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
                {VectorIcons.next({
                  onPress: onPressNextButton,
                  color: enableNextBtn
                    ? undefined
                    : Palette.background.light[510],
                })}
              </View>
            </View>
          )}
      </Animated.View>
    </Animated.View>
  );
};

export default Player;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: UIResponsive.Body.width,
    height: UIResponsive.FullScreen.height - 50,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
