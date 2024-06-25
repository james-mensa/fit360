import React, {useState} from 'react';
import {View} from 'react-native';
import {Base} from './base';
import {Label, LabelVarient} from '@models/label';
import {AnimateView} from '@models/animation';
import {useNavigation} from '@react-navigation/native';
import {Navigation} from '@common/type';

import {WorkOutPerWeekType} from '@core/data-types';
import {BasicCheckCard} from '@models/CheckCard';
import {UIResponsive} from '@layout/ResponsiveUi';
import {BaseStyles} from './BaseStyles';

const pageContent = {
  title: 'How many times do you workout per week ?',
  Cards: [
    {
      title: 'None',
      value: WorkOutPerWeekType.None,
    },
    {title: WorkOutPerWeekType.OneOrTwo, value: WorkOutPerWeekType.OneOrTwo},
    {
      title: WorkOutPerWeekType.Two,

      value: WorkOutPerWeekType.Two,
    },
    {
      title: WorkOutPerWeekType.Three,

      value: WorkOutPerWeekType.Three,
    },
    {
      title: WorkOutPerWeekType.ThreeToFour,
      value: WorkOutPerWeekType.ThreeToFour,
    },

    {
      title: WorkOutPerWeekType.Four,
      value: WorkOutPerWeekType.Four,
    },
    {
      title: WorkOutPerWeekType.FourToFive,
      value: WorkOutPerWeekType.FourToFive,
    },
    {
      title: WorkOutPerWeekType.FiveToSix,
      value: WorkOutPerWeekType.FiveToSix,
    },
  ],
};

export const WorkOutPerWeek = () => {
  const navigation = useNavigation<Navigation>();
  const navigationBack = useNavigation();
  const goNext = () => {
    navigation.navigate('FitnessLevel');
  };

  const goBack = () => {
    navigationBack.goBack();
  };

  const [response, setResponse] = useState<WorkOutPerWeekType | undefined>(
    undefined,
  );

  const handleUserResponse = (value: WorkOutPerWeekType) => {
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
