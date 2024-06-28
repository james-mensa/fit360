import React, {useState} from 'react';
import {View} from 'react-native';
import {Base} from './base';
import {Label, LabelVarient} from '@models/label';
import {AnimateView} from '@models/animation';
import {useNavigation} from '@react-navigation/native';
import {Navigation} from '@common/type';

import {FitnessLevelTypes} from '@core/data-types';
import {BasicCheckCard} from '@models/CheckCard';
import {UIResponsive} from '@layout/ResponsiveUi';
import {BaseStyles} from './BaseStyles';

const pageContent = {
  title: 'Please Select your fitness level',
  Cards: [
    {
      title: 'Beginner',
      value: FitnessLevelTypes.Beginner,
      description: 'I am new to fitness and looking to get started.',
    },
    {
      title: 'Intermediate',
      value: FitnessLevelTypes.Intermediate,
      description: 'I have some experience and want to improve my fitness.',
    },
    {
      title: 'Advanced',
      value: FitnessLevelTypes.Advanced,
      description: 'I am experienced and looking for challenging workouts.',
    },
  ],
};

export const FitnessLevel = () => {
  const navigation = useNavigation<Navigation>();
  const navigationBack = useNavigation();
  const goNext = () => {
    navigation.navigate('WorkingHour');
  };

  const goBack = () => {
    navigationBack.goBack();
  };

  const [response, setResponse] = useState<FitnessLevelTypes | undefined>(
    undefined,
  );

  const handleUserResponse = (value: FitnessLevelTypes) => {
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
      progress={60}>
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
                description={card.description}
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
