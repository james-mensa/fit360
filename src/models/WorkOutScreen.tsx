import {Icons} from '@assets/register';
import {AppStyles} from '@common/common-ui';
import {VectorIcons} from '@common/VectorIcons';
import {UIResponsive} from '@layout/ResponsiveUi';
import CircularProgress from '@models/progress/CircularProgress';
import {VideoPlayer} from '@models/VideoPlayer';
import {VideoProgressIndicator} from '@models/VideoProgressIndicator';
import {Palette} from '@styles/BaseColor';
import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
interface WorkOutProps {
  playlist: string;
}
const WorkOutScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.card}>
            <View style={styles.indicator_container}>
              {VectorIcons.Close({onPress: () => {}})}
              <View style={styles.indicator}>
                <VideoProgressIndicator progress={50} />
                <VideoProgressIndicator progress={50} active />
                <VideoProgressIndicator />
                <VideoProgressIndicator />
                <VideoProgressIndicator />
                <VideoProgressIndicator />
                <VideoProgressIndicator />
                <VideoProgressIndicator />
                <VideoProgressIndicator />
                <VideoProgressIndicator />
                <VideoProgressIndicator />
                <VideoProgressIndicator />
              </View>
            </View>
            <VideoPlayer file={Icons.push_ups} />
            <View style={styles.controllers}>
              <View style={styles.controller_button}>
                {VectorIcons.previous({})}
              </View>
              <View style={styles.progress}>
                <CircularProgress
                  progressColor={Palette.background.light[500]}
                  textSize={70}
                  showPercent={false}
                  textColor={Palette.background.light[500]}
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
                {VectorIcons.next({})}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WorkOutScreen;
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
    justifyContent: 'space-around',
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
