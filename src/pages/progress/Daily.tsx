import {ScrollView, StyleSheet, View} from 'react-native';
import {UIResponsive} from '@layout/ResponsiveUi';
import React from 'react';
import {Palette} from '@styles/BaseColor';
import {GapVertical} from '@models/gap';
import {BarChart, LineChart, PieChart} from 'react-native-chart-kit';
import {useProvider} from '@store/provider';
import {AnalysisLabel} from './placehoder';
const chartConfig = {
  backgroundGradientFrom: Palette.background.light[100],
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: Palette.background.light[300],
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => `rgba(32, 22, 64, ${opacity})`,
  strokeWidth: 1,
  barPercentage: 0.5,
  useShadowColorFromDataset: false,
  propsForDots: {
    r: '5',
    strokeWidth: '2',
  },
  propsForLabels: {
    fontSize: 10,
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Regular',
  },
};

export const Daily = () => {
  const {progressSummary} = useProvider();

  if (!progressSummary || !progressSummary.general) {
    return null; //
  }

  const progress = progressSummary?.day;
  const collection = progress.data;
  const labels = progress.label;

  const data = {
    labels: progress.label,
    datasets: [
      {
        data: [
          ...Array.from({length: labels.length}, (_, i) => {
            const metaData = collection.get(labels[i]);
            if (!metaData) {
              return 0;
            }

            return metaData.workout.total;
          }),
        ],
        color: (opacity = 1) => `rgba(102, 107, 204, ${opacity})`, // Custom color for "total" data
        strokeWidth: 3, // Enhance stroke width
      },
      {
        data: [
          ...Array.from({length: labels.length}, (_, i) => {
            const metaData = collection.get(labels[i]);
            if (!metaData) {
              return 0;
            }

            return metaData.workout.completed;
          }),
        ],
        color: (opacity = 1) => `rgba(3, 6, 55, ${opacity})`, // Custom color for "completed" data
        strokeWidth: 3,
      },
    ],
    legend: ['Total Tasks', 'Completed Tasks'], // Updated legend for clarity
  };

  const dataPopulation = [
    ...Array.from({length: labels.length}, (_, i) => {
      const metaData = collection.get(labels[i]);
      if (!metaData) {
        return 0;
      }
      const result = {
        name: labels[i],
        population: metaData.calories,
        color: Palette.PieColors[i],
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
      };
      return result;
    }),
  ];
  const BarChartCaloriesData = {
    labels,
    datasets: [
      {
        data: [
          ...Array.from({length: labels.length}, (_, i) => {
            const metaData = collection.get(labels[i]);
            if (!metaData) {
              return 0;
            }
            return metaData.calories;
          }),
        ],
      },
    ],
  };
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
              'overview of your daily progress, highlighting key metrics such as total tasks and completion rates. By visualizing these data points, you gain valuable insights into your daily performance and areas where you can improve.'
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
          />
          <AnalysisLabel
            title={
              "An in-depth analysis of your caloric expenditure across daily activities. It helps you track how effectively you're burning calories, enabling you to make informed decisions about your fitness routine."
            }
          />
        </View>
        <GapVertical h={40} />
        <View style={styles.layout}>
          <PieChart
            data={dataPopulation}
            width={UIResponsive.Body.width - 50}
            height={220}
            chartConfig={chartConfig}
            accessor={'population'}
            backgroundColor={'transparent'}
            paddingLeft={'15'}
          />
          <AnalysisLabel
            title={
              'Detailed calorie distribution across daily activities. Each slice of the pie represents the calories burned, offering a visual breakdown of your daily workout impact.'
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
