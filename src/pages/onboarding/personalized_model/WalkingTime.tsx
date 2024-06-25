import React, {useState} from 'react';
import {View} from 'react-native';
import {Base} from './base';
import {Label, LabelVarient} from '@models/label';
import {AnimateView} from '@models/animation';
import {useNavigation} from '@react-navigation/native';
import {Navigation} from '@common/type';

import {WalkingDurationType} from '@core/data-types';
import {BasicCheckCard} from '@models/CheckCard';
import {UIResponsive} from '@layout/ResponsiveUi';
import {BaseStyles} from './BaseStyles';

const pageContent = {
  title: 'How long do you spend walking a day?',
  Cards: [
    {
      title: WalkingDurationType.LessTheTenMinutes,
      value: WalkingDurationType.LessTheTenMinutes,
    },
    {
      title: WalkingDurationType.TenToTwenty,
      value: WalkingDurationType.TenToTwenty,
    },
    {
      title: WalkingDurationType.TwentyToFourty,
      value: WalkingDurationType.TwentyToFourty,
    },
    {
      title: WalkingDurationType.FourtyToOneHour,
      value: WalkingDurationType.FourtyToOneHour,
    },
    {
      title: WalkingDurationType.OneToTwoHours,
      value: WalkingDurationType.OneToTwoHours,
    },

    {
      title: WalkingDurationType.MoreThanTwoHours,
      value: WalkingDurationType.MoreThanTwoHours,
    },
  ],
};

export const WalkingTime = () => {
  const navigation = useNavigation<Navigation>();
  const navigationBack = useNavigation();
  const goNext = () => {
    navigation.navigate('SleepTime');
  };

  const goBack = () => {
    navigationBack.goBack();
  };

  const [response, setResponse] = useState<WalkingDurationType | undefined>(
    undefined,
  );

  const handleUserResponse = (value: WalkingDurationType) => {
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
      progress={20}>
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
