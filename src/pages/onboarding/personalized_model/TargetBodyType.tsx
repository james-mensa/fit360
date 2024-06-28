import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Base} from './base';
import {Label, LabelVarient} from '@models/label';
import {Icons} from '@assets/register';
import {AnimateView} from '@models/animation';
import {useNavigation} from '@react-navigation/native';
import {Navigation} from '@common/type';
import CheckCard from '@models/CheckCard/CheckCard';
import {getLocalResponse} from '@core/utils';
import {LocalStoreKeys} from '@core/data-types';
import {BaseStyles} from './BaseStyles';
type BodyType = 'skinny' | 'cut' | 'bulk' | 'normal' | 'bulk' | 'mascular man';

const pageContent = {
  title: 'Please Choose your target Body Type',
  Cards: [
    {
      title: 'Skinny',
      description: '',
      icon: Icons.skinny_1,
      type: 'skinny' as BodyType,
    },
    {title: 'Cut', description: '', icon: Icons.cut, type: 'cut' as BodyType},
    {
      title: 'Bulk',
      description: '',
      icon: Icons.bulk_1,
      type: 'bulk' as BodyType,
    },
    {
      title: 'Normal',
      description: '',
      icon: Icons.normal_body,
      type: 'normal' as BodyType,
    },
    {
      title: 'Mascular Man',
      description: '',
      icon: Icons.muscular_body,
      type: 'mascular man' as BodyType,
    },
  ],
};

export const TargetBodyType = () => {
  const navigation = useNavigation<Navigation>();
  const goNext = () => {
    navigation.navigate('BodyTargetZones');
  };

  const goBack = () => {
    navigation.goBack();
  };

  const [response, setResponse] = useState<BodyType | undefined>(undefined);
  const [bodyType, setBodyType] = useState<string>('');

  const retrieveData = async () => {
    try {
      const local_response = await getLocalResponse(LocalStoreKeys.BodyType);
      console.log({local_respon: local_response});
      if (local_response) {
        setBodyType(local_response);
      }
    } catch (error) {
      console.log('Failed to retrieve data');
    }
  };

  useEffect(() => {
    retrieveData();
  }, []);

  const handleUserResponse = (value: BodyType) => {
    setResponse(value === response ? undefined : value);
  };

  return (
    <Base
      canGoNext={response !== undefined}
      goNext={goNext}
      goPrevious={goBack}
      progress={40}>
      <View style={BaseStyles.container}>
        <Label
          varient={LabelVarient.H2.Roboto}
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
