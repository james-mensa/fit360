import React, {useState} from 'react';
import {View} from 'react-native';
import {Base} from './base';
import {Label, LabelVarient} from '@models/label';
import {AnimateView} from '@models/animation';
import {useNavigation} from '@react-navigation/native';
import {Navigation} from '@common/type';

import {WaterConsumptionType, WaterConsumptionTypes} from '@core/data-types';
import {BasicCheckCard} from '@models/CheckCard';
import {UIResponsive} from '@layout/ResponsiveUi';
import {BaseStyles} from './BaseStyles';

const pageContent = {
  title: 'Please what is your daily water consumption like ?',
  Cards: [
    {
      title: WaterConsumptionTypes.LessThenTwoGlasses,
      value: WaterConsumptionTypes.LessThenTwoGlasses,
    },
    {
      title: WaterConsumptionTypes.TwoToFiveGlasses,
      value: WaterConsumptionTypes.SixToTenGlasses,
    },
    {
      title: WaterConsumptionTypes.MoreThanTenGlasses,
      value: WaterConsumptionTypes.MoreThanTenGlasses,
    },
  ],
};

export const WaterConsumption = () => {
  const navigation = useNavigation<Navigation>();
  const navigationBack = useNavigation();
  const goNext = () => {
    navigation.navigate('BadHabits');
  };

  const goBack = () => {
    navigationBack.goBack();
  };

  const [response, setResponse] = useState<WaterConsumptionType | undefined>(
    undefined,
  );

  const handleUserResponse = (value: WaterConsumptionType) => {
    if (value === response) {
      setResponse(undefined);
    } else {
      setResponse(value);
    }
  };
  return (
    <Base
      canGoNext={response !== undefined}
      goNext={goNext}
      goPrevious={goBack}
      progress={90}>
      <View style={BaseStyles.container}>
        <Label
          varient={LabelVarient.H2.Roboto}
          title={pageContent.title}
          align="center"
          fullWidth
        />
        <View style={BaseStyles.stackColumn}>
          {pageContent.Cards.map((card, index) => (
            <AnimateView key={index} order={index * 0.1}>
              <BasicCheckCard
                title={card.title}
                isChecked={response === card.value}
                width={UIResponsive.Body.width - 50}
                borderRadius={10}
                height={40}
                onPress={() => handleUserResponse(card.value)}
              />
            </AnimateView>
          ))}
        </View>
      </View>
    </Base>
  );
};
