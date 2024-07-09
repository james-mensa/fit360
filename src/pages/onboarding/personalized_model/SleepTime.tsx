import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Base} from './base';
import {Label, LabelVariant} from '@models/label';
import {AnimateView} from '@models/animation';
import {useNavigation} from '@react-navigation/native';
import {Navigation} from '@common/type';

import {LocalStoreKeys, SleepTimeTypes} from '@core/data-types';
import {BasicCheckCard} from '@models/CheckCard';
import {UIResponsive} from '@layout/ResponsiveUi';
import {BaseStyles} from './BaseStyles';
import {getLocalResponse, setLocalData} from '@core/utils';

const pageContent = {
  title: 'How long do you sleep on a typical day?',
  Cards: [
    {
      title: SleepTimeTypes.LessThenFourHours,
      value: SleepTimeTypes.LessThenFourHours,
    },
    {
      title: SleepTimeTypes.FourTwoSixHours,
      value: SleepTimeTypes.FourTwoSixHours,
    },
    {
      title: SleepTimeTypes.SixToSevenHours,
      value: SleepTimeTypes.SixToSevenHours,
    },
    {
      title: SleepTimeTypes.SevenToEightHours,
      value: SleepTimeTypes.SevenToEightHours,
    },
    {
      title: SleepTimeTypes.MoreThanEight,
      value: SleepTimeTypes.MoreThanEight,
    },
  ],
};

export const SleepTime = () => {
  const navigation = useNavigation<Navigation>();
  const navigationBack = useNavigation();

  const goBack = () => {
    navigationBack.goBack();
  };

  const [response, setResponse] = useState<SleepTimeTypes | undefined>(
    undefined,
  );

  const handleUserResponse = (value: SleepTimeTypes) => {
    if (value === response) {
      setResponse(undefined);
    } else {
      setResponse(value);
    }
  };

  const goNext = () => {
    setLocalData(LocalStoreKeys.SleepTimePerDay, response);
    navigation.navigate('WaterConsumption');
  };
  useEffect(() => {
    const localResponse = async () => {
      const previousResponse = await getLocalResponse(
        LocalStoreKeys.SleepTimePerDay,
      );
      setResponse(previousResponse as SleepTimeTypes);
    };
    localResponse();
  }, []);
  return (
    <Base
      canGoNext={response !== undefined}
      goNext={goNext}
      goPrevious={goBack}
      progress={75}>
      <View style={BaseStyles.container}>
        <Label
          variant={LabelVariant.H2.Roboto}
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
