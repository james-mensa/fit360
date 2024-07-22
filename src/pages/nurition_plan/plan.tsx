import {ScrollView, StyleSheet, View} from 'react-native';
import {PageBase} from '@models/pageBase';
import {UIResponsive} from '@layout/ResponsiveUi';
import React from 'react';
import {Palette} from '@styles/BaseColor';

import {SwitchTab} from '@models/SwitchTab';
import {VectorIcons} from '@common/VectorIcons';
import {GapVertical} from '@models/gap';
import {Workout} from './Workout';
export const Plan = () => {
  const category = [
    {
      label: 'Today workout plan',
      icon: VectorIcons.Dumbell,
      onPress: () => {},
      id: 1,
      component: <Workout />,
    },
    {
      label: 'Recommanded meal',
      icon: VectorIcons.Dumbell,
      onPress: () => {},
      id: 2,
      component: <View></View>,
    },
  ];
  return (
    <PageBase
      topNav={{
        // left: {onPress: () => {}},
        right: {profile: {onPress: () => {}}},
      }}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.layout}>
            <SwitchTab items={category} />
          </View>
          <GapVertical h={70} />
        </ScrollView>
      </View>
    </PageBase>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Palette.background.light[100],
    flexDirection: 'column',
    justifyContent: 'center',
    borderTopLeftRadius: UIResponsive.Radius.bodyTop,
    borderTopRightRadius: UIResponsive.Radius.bodyTop,
    padding: 20,
    overflow: 'hidden',
  },
  layout: {
    flexDirection: 'column',
    gap: 20,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
  horizontalScrollContainer: {
    gap: 10,
    flexDirection: 'row',
  },
  status_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
