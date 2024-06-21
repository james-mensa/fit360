import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {PageBase} from '@models/pageBase';
import {UIResponsive} from '@layout/ResponsiveUi';
import React from 'react';
import {Palette} from '@styles/BaseColor';
import {Label, LabelVarient} from '@models/label';
import {PrimaryCard} from '@models/cards/primary';
import {Icons} from '@assets/register';
import {StatusCard} from '@models/cards/status';
import {GapHorizontal, GapVertical} from '@models/gap';
import {statusData} from '@store/dummy';
import {TabNav} from '@models/tabnav';
export const Home = () => {
  return (
    <PageBase
      topNav={{
        left: {onPress: () => {}},
        right: {profile: {onPress: () => {}}},
      }}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.layout}>
            <Label
              title="Today Challenges"
              varient={LabelVarient.H3_Bold.large.TInterface}
            />
            <PrimaryCard
              title="Upper body"
              description="Simple Chect Workout only 5 mins"
              onPress={() => {}}
              bgColor={Palette.ColorsFromImage.fitness_1}
            />
            <PrimaryCard
              title="Hand muscle"
              description="4 Ways To Improve your Hand Muscle "
              onPress={() => {}}
              image={Icons.muscle_1}
              bgColor={Palette.ColorsFromImage.muscle_1}
            />
            <Label
              title="All Workouts"
              varient={LabelVarient.H3_Bold.small.Roboto}
            />
            <TabNav
              items={[
                {
                  label: 'All Workouts',
                  active: true,
                  component: (
                    <ScrollView
                      style={styles.horizontalScrollContainer}
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      directionalLockEnabled={true}
                      alwaysBounceVertical={false}>
                      {statusData.map((item, index) => (
                        <>
                          <StatusCard
                            key={index}
                            title={item.title}
                            rate={item.rate}
                            unit={item.unit}
                            icon={item.icon}
                            onPress={() => {}}
                            status={item.status}
                          />
                          {index !== statusData.length - 1 && <GapHorizontal />}
                        </>
                      ))}
                    </ScrollView>
                  ),
                },
                {
                  label: 'Jumping',
                  active: true,
                  component: (
                    <View>
                      <Text>2</Text>
                    </View>
                  ),
                },
                {
                  label: 'Chest',
                  active: true,
                  component: (
                    <View>
                      <Text>3</Text>
                    </View>
                  ),
                },
              ]}
            />
            <PrimaryCard
              title="Hand muscle"
              description="4 Ways To Improve your Hand Muscle "
              onPress={() => {}}
              image={Icons.muscle_1}
              bgColor={Palette.ColorsFromImage.muscle_1}
            />
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
});
