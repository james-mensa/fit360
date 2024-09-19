import {ScrollView, StyleSheet, View} from 'react-native';
import {UIResponsive} from '@layout/ResponsiveUi';
import React from 'react';
import {Palette} from '@styles/BaseColor';
import {GapVertical} from '@models/gap';
import {BarChart, LineChart, ProgressChart} from 'react-native-chart-kit';
import {useProvider} from '@store/provider';
import {AnalysisLabel} from './placehoder';
import {Label, LabelVariant} from '@models/label';

const chartConfig = {
  backgroundGradientFrom: Palette.background.light[100],
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: Palette.background.light[300],
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => `rgba(32, 22, 64, ${opacity})`, // Primary color customization
  strokeWidth: 1, // Increase stroke width for more prominent lines
  barPercentage: 0.5,
  useShadowColorFromDataset: false,
  propsForDots: {
    r: '5', // Size of the dots on the line chart
    strokeWidth: '2',
  },
  propsForLabels: {
    fontSize: 10,
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Regular',
  },
};

export const Overview = () => {
  const {progressSummary} = useProvider();

  if (!progressSummary || !progressSummary.general) {
    return null; // Return null instead of undefined for better React practice
  }

  const general = progressSummary?.general;
  const data = {
    labels: ['Phase 1', 'Phase 2', 'Phase 3', 'Phase 4', 'Phase 5', 'Phase 6'],
    datasets: [
      {
        data: [
          general.phase1.total,
          general.phase2.total,
          general.phase3.total,
          general.phase4.total,
          general.phase5.total,
          general.phase6.total,
        ],
        color: (opacity = 1) => `rgba(102, 107, 204, ${opacity})`, // Custom color for "total" data
        strokeWidth: 3, // Enhance stroke width
      },
      {
        data: [
          general.phase1.completed,
          general.phase2.completed,
          general.phase3.completed,
          general.phase4.completed,
          general.phase5.completed,
          general.phase6.completed,
        ],
        color: (opacity = 1) => `rgba(3, 6, 55, ${opacity})`, // Custom color for "completed" data
        strokeWidth: 3,
      },
    ],
    legend: ['Total Tasks', 'Completed Tasks'], // Updated legend for clarity
  };

  const dataProgress = {
    labels: [
      'Phase 1 - ',
      'Phase 2 - ',
      'Phase 3 -',
      'Phase 4 -',
      'Phase 5 -',
      'Phase 6 -',
    ],
    data: [
      general.phase1.progress,
      general.phase2.progress,
      general.phase3.progress,
      general.phase4.progress,
      general.phase5.progress,
      general.phase6.progress,
    ],
  };
  const BarChartCaloriesData = {
    labels: ['Phase 1', 'Phase 2', 'Phase 3', 'Phase 4', 'Phase 5', 'Phase 6'],
    datasets: [
      {
        data: [
          general.phase1.calories,
          general.phase2.calories,
          general.phase3.calories,
          general.phase4.calories,
          general.phase5.calories,
          general.phase6.calories,
        ],
      },
    ],
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Label
          title={'Personalized plan overview'}
          variant={LabelVariant.Sub1.Extra}
        />
        <GapVertical h={20} />
        <View style={styles.layout}>
          <LineChart
            style={styles.chart}
            data={data}
            width={UIResponsive.Body.width}
            height={220}
            chartConfig={chartConfig}
            withInnerLines={false}
            bezier
          />

          <AnalysisLabel
            title={
              'Track your progress across six phases with a detailed line chart, highlighting total tasks and completion rates for each phase. This provides a clear visualization of your overall progress and accomplishments.'
            }
          />
        </View>
        <GapVertical h={40} />
        <View style={styles.layout}>
          <ProgressChart
            data={dataProgress}
            width={UIResponsive.Body.width - 50}
            height={220}
            strokeWidth={10}
            radius={32}
            chartConfig={chartConfig}
            hideLegend={false}
          />
          <AnalysisLabel
            title={
              'Visualize your workout progress with a progress chart, showing the completion percentage for each phase. This helps you quickly assess your overall progress and identify areas for improvement.'
            }
          />
        </View>
        <GapVertical h={40} />
        <View style={styles.layout}>
          <BarChart
            data={BarChartCaloriesData}
            width={UIResponsive.Body.width - 50}
            height={220}
            chartConfig={barChartConfig}
            yAxisLabel="🔥 "
            yAxisSuffix=""
            style={styles.chart}
            showValuesOnTopOfBars={true}
          />
          <AnalysisLabel
            title={
              'Examine your calorie burn across six phases with a bar chart, providing insight into your energy expenditure throughout your workout plan.'
            }
          />
        </View>

        <GapVertical h={40} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: 15,
  },
  layout: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },

  chart: {
    backgroundColor: Palette.background.light[200],
    borderRadius: 20,
    width: '100%',
    paddingBottom: 2,
  },
});

const barChartConfig = {
  backgroundGradientFrom: Palette.background.light[100],
  backgroundGradientFromOpacity: 1,
  backgroundGradientTo: Palette.background.dark[100],
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => `rgba(32, 22, 64, ${opacity})`, // Primary color customization
  strokeWidth: 1, // Increase stroke width for more prominent lines
  barPercentage: 0.8,
  useShadowColorFromDataset: false,
  propsForLabels: {
    fontSize: 8,
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Regular',
  },
};
