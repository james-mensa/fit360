import {StyleSheet, View} from 'react-native';
import {PageBase} from '@models/pageBase';
import {UIResponsive} from '@layout/ResponsiveUi';
import React from 'react';
import {Palette} from '@styles/BaseColor';

import {SwitchTab} from '@models/SwitchTab';
import {VectorIcons} from '@common/VectorIcons';
import {GapVertical} from '@models/gap';
import {Overview} from './Overview';
import {Daily} from './Daily';

export const Progress = () => {
  const category = [
    {
      label: 'Overview',
      icon: VectorIcons.Dumbell,
      onPress: () => {},
      id: 2,
      component: <Overview />,
    },
    {
      label: 'Today Analysis',
      icon: VectorIcons.Dumbell,
      onPress: () => {},
      id: 1,
      component: <Daily />,
    },
  ];
  return (
    <PageBase
      topNav={{
        right: {profile: {onPress: () => {}}},
      }}>
      <View style={styles.container}>
        <View style={styles.layout}>
          <SwitchTab items={category} />
        </View>
        <GapVertical h={70} />
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
    height: '100%',
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
