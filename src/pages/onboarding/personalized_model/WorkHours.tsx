import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Base} from './base';
import {Label, LabelVariant} from '@models/label';
import {AnimateView} from '@models/animation';
import {useNavigation} from '@react-navigation/native';
import {Navigation} from '@common/type';

import {LocalStoreKeys, WorkingHourResponseType} from '@core/data-types';
import {BasicCheckCard} from '@models/CheckCard';
import {UIResponsive} from '@layout/ResponsiveUi';
import {BaseStyles} from './BaseStyles';
import {getLocalResponse, setLocalData} from '@core/utils';

const pageContent = {
  title: 'Does your work require you to sit for long hours?',
  Cards: [
    {
      title: 'Yes',
      value: WorkingHourResponseType.Yes,
      description: 'My job involves sitting for most of the day.',
    },
    {
      title: 'No',
      value: WorkingHourResponseType.No,
      description: 'My job does not require long hours of sitting.',
    },
  ],
};

export const WorkingHour = () => {
  const navigation = useNavigation<Navigation>();
  const navigationBack = useNavigation();

  const goBack = () => {
    navigationBack.goBack();
  };

  const [response, setResponse] = useState<WorkingHourResponseType | undefined>(
    undefined,
  );

  const handleUserResponse = (value: WorkingHourResponseType) => {
    if (value === response) {
      setResponse(undefined);
    } else {
      setResponse(value);
    }
  };

  const goNext = () => {
    setLocalData(LocalStoreKeys.SitLongHours, response);
    navigation.navigate('WalkingTime');
  };
  useEffect(() => {
    const localResponse = async () => {
      const previousResponse = await getLocalResponse(
        LocalStoreKeys.SitLongHours,
      );
      setResponse(previousResponse as WorkingHourResponseType);
    };
    localResponse();
  }, []);
  return (
    <Base
      canGoNext={response !== undefined}
      goNext={goNext}
      goPrevious={goBack}
      progress={65}>
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
                height={50}
                onPress={() => handleUserResponse(card.value)}
              />
            </AnimateView>
          ))}
        </View>
      </View>
    </Base>
  );
};
