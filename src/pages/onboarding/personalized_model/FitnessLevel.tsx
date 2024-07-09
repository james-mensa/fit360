import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Base} from './base';
import {Label, LabelVariant} from '@models/label';
import {AnimateView} from '@models/animation';
import {useNavigation} from '@react-navigation/native';
import {Navigation} from '@common/type';

import {FitnessLevelTypes, LocalStoreKeys} from '@core/data-types';
import {BasicCheckCard} from '@models/CheckCard';
import {UIResponsive} from '@layout/ResponsiveUi';
import {BaseStyles} from './BaseStyles';
import {getLocalResponse, setLocalData} from '@core/utils';

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

  const goNext = () => {
    setLocalData(LocalStoreKeys.FitnessLevel, response);
    navigation.navigate('WorkingHour');
  };
  useEffect(() => {
    const localResponse = async () => {
      const previousResponse = await getLocalResponse(
        LocalStoreKeys.FitnessLevel,
      );
      setResponse(previousResponse as FitnessLevelTypes);
    };
    localResponse();
  }, []);
  return (
    <Base
      canGoNext={response !== undefined}
      goNext={goNext}
      goPrevious={goBack}
      progress={60}>
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
