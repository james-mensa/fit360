import {ScrollView, StyleSheet, View} from 'react-native';
import {PageBase} from '@models/pageBase';
import {UIResponsive} from '@layout/ResponsiveUi';
import React from 'react';
import {Palette} from '@styles/BaseColor';
import {Label, LabelVariant} from '@models/label';
import {PrimaryCard} from '@models/cards/primary';
import {CardIcons} from '@assets/register';
import {StatusCard} from '@models/cards/status';
import {GapVertical} from '@models/gap';
import {TabNav} from '@models/tabnav';
import {useProvider} from '@store/provider';
import {VectorIcons} from '@common/VectorIcons';
import {
  calculateWeightLoss,
  dailyChallenge,
  generateKeyId,
} from '@common/utils';
import {BodyZonesTypes, GenderType} from '@core/data-types';
import {WorkoutModel} from '@core/db/models';
export const Home = () => {
  const {plan, user, getDayChallenge} = useProvider();
  const {progressSummary} = useProvider();
  if (!progressSummary || !progressSummary.general) {
    return null; //
  }

  const day = plan[0].day;
  const progress = progressSummary?.day;
  const bodyZones = progress.label;
  const collection = progress.data;
  const tabItems = bodyZones.map((item, index) => ({
    label: item || 'Jumping', // Adjust according to the actual structure of `item`
    active: index === 0, // Assuming the first tab should be active
    component: (
      <ScrollView
        key={generateKeyId()}
        style={styles.horizontalScrollContainer}
        horizontal
        showsHorizontalScrollIndicator={false}
        directionalLockEnabled
        alwaysBounceVertical={false}>
        {[0, 1].map((_status, _index) => {
          const calories = collection.get(item)?.calories || 5;
          const value =
            _status === 0 ? calories : calculateWeightLoss(calories);
          const unit = _status === 0 ? 'kcal' : 'pound';
          const icon = _status === 0 ? VectorIcons.fire : VectorIcons.weight;

          return (
            <StatusCard
              key={generateKeyId()}
              index={0.6}
              title={_status === 0 ? 'Calories' : 'Weight'}
              rate={value}
              unit={unit}
              icon={icon}
              onPress={() => {}}
            />
          );
        })}
      </ScrollView>
    ),
  }));

  const gender = user ? user.gender : 'female';

  const randomChallenge = dailyChallenge(bodyZones);
  const cardIcon = (index: number) =>
    CardIcons[gender as GenderType][
      randomChallenge.items[index] as BodyZonesTypes
    ];
  const ChallengeData = getDayChallenge(randomChallenge.uniqueId);
  return (
    <PageBase
      topNav={{
        // left: {onPress: () => {}},
        right: {profile: {onPress: () => {}}},
      }}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.layout}>
            <Label
              title="Today Challenges"
              variant={LabelVariant.H3_Bold.large.TInterface}
            />
            {randomChallenge.items.map((item, index) => {
              const filteredChallengeData = ChallengeData?.filter(
                planItem => planItem.playlist[0].type === item,
              );
              return filteredChallengeData?.map((target, __index) => (
                <PrimaryCard
                  key={generateKeyId()}
                  index={index}
                  items={target.playlist as unknown as WorkoutModel[]}
                  title={`${target.playlist[0].type || ''}`}
                  description={target.title}
                  image={cardIcon(index)}
                />
              ));
            })}
            <GapVertical h={10} />
            {/* <VerticalDivider /> */}
            <Label
              title={`Day ${day}`}
              variant={LabelVariant.H3_Bold.large.TInterface}
            />
            <TabNav items={tabItems} />
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
    gap: 20,
    flexDirection: 'row',
  },
  status_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
