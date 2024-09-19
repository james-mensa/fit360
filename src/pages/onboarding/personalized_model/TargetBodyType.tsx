import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Base} from './base';
import {Label, LabelVariant} from '@models/label';
import {Icons} from '@assets/register';
import {AnimateView} from '@models/animation';
import {useNavigation} from '@react-navigation/native';
import {Navigation} from '@common/type';
import CheckCard from '@models/CheckCard/CheckCard';
import {getLocalResponse, setLocalData} from '@core/utils';
import {LocalStoreKeys} from '@core/data-types';
import {BaseStyles} from './BaseStyles';
type BodyType = 'skinny' | 'cut' | 'bulk' | 'normal' | 'bulk' | 'mascular man';

const pageContent = {
  title: 'Please Choose your target Body Type',
  Cards: [
    {
      title: 'slim fit',
      description: '',
      icon: Icons.skinny_1,
      type: 'skinny' as BodyType,
    },
    {title: 'cut', description: '', icon: Icons.cut, type: 'cut' as BodyType},
    {
      title: 'bulk',
      description: '',
      icon: Icons.bulk_1,
      type: 'bulk' as BodyType,
    },
    {
      title: 'normal',
      description: '',
      icon: Icons.normal_body,
      type: 'normal' as BodyType,
    },
    {
      title: 'mascular Man',
      description: '',
      icon: Icons.muscular_body,
      type: 'mascular man' as BodyType,
    },
  ],
};

export const TargetBodyType = () => {
  const navigation = useNavigation<Navigation>();

  const goBack = () => {
    navigation.goBack();
  };

  const [response, setResponse] = useState<BodyType | undefined>(undefined);
  const [bodyType, setBodyType] = useState<string>('');

  const retrieveData = async () => {
    try {
      const local_response = await getLocalResponse(LocalStoreKeys.BodyType);
      if (local_response) {
        setBodyType(local_response);
      }
    } catch (error) {
    }
  };

  useEffect(() => {
    retrieveData();
  }, []);

  const handleUserResponse = (value: BodyType) => {
    setResponse(value === response ? undefined : value);
  };

  const goNext = () => {
    setLocalData(LocalStoreKeys.BodyTarget, response);
    navigation.navigate('BodyTargetZones');
  };
  useEffect(() => {
    const localResponse = async () => {
      const previousResponse = await getLocalResponse(
        LocalStoreKeys.BodyTarget,
      );
      setResponse(previousResponse as BodyType);
    };
    localResponse();
  }, []);

  return (
    <Base
      canGoNext={response !== undefined}
      goNext={goNext}
      goPrevious={goBack}
      progress={40}>
      <View style={BaseStyles.container}>
        <Label
          variant={LabelVariant.H3.TInterface}
          title={pageContent.title}
          align="center"
          fullWidth
        />
        {pageContent.Cards.map((card, index) => (
          <AnimateView key={index} order={index * 0.2}>
            <CheckCard
              title={card.title}
              height={70}
              description={card.description}
              img={card.icon}
              isChecked={response === card.type}
              onPress={() => handleUserResponse(card.type)}
            />
          </AnimateView>
        ))}
      </View>
    </Base>
  );
};
