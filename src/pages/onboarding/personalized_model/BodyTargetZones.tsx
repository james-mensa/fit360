import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Base} from './base';
import {Label, LabelVariant} from '@models/label';
import {AnimateView} from '@models/animation';
import {useNavigation} from '@react-navigation/native';
import {Navigation} from '@common/type';

import {BodyZonesTypes, LocalStoreKeys} from '@core/data-types';
import {BasicCheckCard} from '@models/CheckCard';
import {UImage} from '@models/Icon';
import {Icons} from '@assets/register';
import {UIResponsive} from '@layout/ResponsiveUi';
import {BaseStyles} from './BaseStyles';
import {
  convertArrayToString,
  convertStringToArray,
  getLocalResponse,
  setLocalData,
} from '@core/utils';

const pageContent = {
  title: 'Please Choose your target Body Zones',
  Cards: [
    {
      title: 'Neck',
      name: BodyZonesTypes.Neck,
    },
    {title: 'Arms', name: BodyZonesTypes.Forearms},
    {
      title: 'Belly',

      name: BodyZonesTypes.Belly,
    },
    {
      title: 'Back',

      name: BodyZonesTypes.Back,
    },
    {
      title: 'Legs',
      name: BodyZonesTypes.Legs,
    },

    {
      title: 'Pecs',
      name: BodyZonesTypes.Pecs,
    },
    {
      title: 'Inner and Front thighs',
      name: BodyZonesTypes.Thighs,
    },
    {
      title: 'Triceps',
      name: BodyZonesTypes.Triceps,
    },
    {
      title: 'Biceps',
      name: BodyZonesTypes.Biceps,
    },
  ],
};

export const TargetBodyZones = () => {
  const navigation = useNavigation<Navigation>();
  const navigationBack = useNavigation();

  const goBack = () => {
    navigationBack.goBack();
  };

  const [responses, setResponse] = useState<BodyZonesTypes[]>([]);

  const handleUserOnPress = (value: BodyZonesTypes) => {
    if (responses.includes(value)) {
      setResponse(responses.filter(item => item !== value));
    } else {
      setResponse(previous => [...previous, value]);
    }
  };

  const goNext = () => {
    setLocalData(
      LocalStoreKeys.TargetBodyZones,
      convertArrayToString(responses),
    );
    navigation.navigate('WorkOutPerWeek');
  };
  useEffect(() => {
    const localResponse = async () => {
      const previousResponse = await getLocalResponse(
        LocalStoreKeys.TargetBodyZones,
      );
      if (previousResponse) {
        const stringToArray = convertStringToArray(previousResponse);
        setResponse(stringToArray as BodyZonesTypes[]);
      }
    };
    localResponse();
  }, []);

  return (
    <Base
      canGoNext={responses.length > 0}
      goNext={goNext}
      goPrevious={goBack}
      progress={45}>
      <View style={BaseStyles.container}>
        <Label
          variant={LabelVariant.H2.Roboto}
          title={pageContent.title}
          align="center"
          fullWidth
        />
        <UImage
          source={Icons.bodyZone}
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
