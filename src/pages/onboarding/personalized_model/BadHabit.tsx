import React, {useState} from 'react';
import {View} from 'react-native';
import {Base} from './base';
import {Label, LabelVarient} from '@models/label';
import {AnimateView} from '@models/animation';
import {useNavigation} from '@react-navigation/native';
import {Navigation} from '@common/type';

import {BadHabitsType, BadHabitsTypes} from '@core/data-types';
import {BasicCheckCard} from '@models/CheckCard';
import {UImage} from '@models/Icon';
import {Icons} from '@assets/register';
import {UIResponsive} from '@layout/ResponsiveUi';
import {BaseStyles} from './BaseStyles';

const pageContent = {
  title: 'Please Choose your  common daily bad eating habits',
  Cards: [
    {
      title: BadHabitsTypes.Burgers,
      name: BadHabitsTypes.Burgers,
    },
    {title: BadHabitsTypes.EnergyDrinks, name: BadHabitsTypes.EnergyDrinks},
    {
      title: BadHabitsTypes.FriedChicken,

      name: BadHabitsTypes.FriedChicken,
    },
    {
      title: BadHabitsTypes.IceCream,

      name: BadHabitsTypes.IceCream,
    },
    {
      title: BadHabitsTypes.Noodles,
      name: BadHabitsTypes.Noodles,
    },

    {
      title: BadHabitsTypes.Pepperoni,
      name: BadHabitsTypes.Pepperoni,
    },
    {
      title: BadHabitsTypes.Sausages,
      name: BadHabitsTypes.Sausages,
    },
    {
      title: BadHabitsTypes.Soda,
      name: BadHabitsTypes.Soda,
    },
    {
      title: BadHabitsTypes.SweetenedFruitJuices,
      name: BadHabitsTypes.SweetenedFruitJuices,
    },
    {
      title: BadHabitsTypes.SweetenedYogurt,
      name: BadHabitsTypes.SweetenedYogurt,
    },
  ],
};

export const BadHabits = () => {
  const navigation = useNavigation<Navigation>();
  const navigationBack = useNavigation();
  const goNext = () => {
    navigation.navigate('TermsAgreeMent');
  };

  const goBack = () => {
    navigationBack.goBack();
  };

  const [responses, setResponse] = useState<BadHabitsType[]>([]);

  const handleUserOnPress = (value: BadHabitsType) => {
    if (responses.includes(value)) {
      setResponse(responses.filter(item => item !== value));
    } else {
      setResponse(previous => [...previous, value]);
    }
  };

  return (
    <Base
      canGoNext={responses.length > 0}
      goNext={goNext}
      goPrevious={goBack}
      progress={93}>
      <View style={BaseStyles.container}>
        <Label
          varient={LabelVarient.H2.Roboto}
          title={pageContent.title}
          align="center"
          fullWidth
        />
        <UImage
          source={Icons.bad_habit}
          width={UIResponsive.Body.width - 50}
          height={UIResponsive.Body.height / 2.3}
        />
        <View style={BaseStyles.stackRow}>
          {pageContent.Cards.map((card, index) => (
            <AnimateView key={index} order={index * 0.1}>
              <BasicCheckCard
                title={card.title}
                isChecked={responses.includes(card.name)}
                onPress={() => handleUserOnPress(card.name)}
              />
            </AnimateView>
          ))}
        </View>
      </View>
    </Base>
  );
};
