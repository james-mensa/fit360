import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Base} from './base';
import {Label, LabelVariant} from '@models/label';
import {Icons} from '@assets/register';
import {AnimateView} from '@models/animation';
import {useNavigation} from '@react-navigation/native';
import {Navigation} from '@common/type';
import CheckCard from '@models/CheckCard/CheckCard';
import {LocalStoreKeys} from '@core/data-types';
import {getLocalResponse, setLocalData} from '@core/utils';
import {BaseStyles} from './BaseStyles';
type BodyType = 'skinny' | 'normal' | 'obese' | 'overweight';

export const BodyType = () => {
  const navigation = useNavigation<Navigation>();
  const navigationBack = useNavigation();

  const goBack = () => {
    navigationBack.goBack();
  };
  const [response, setResponse] = useState<BodyType | undefined>(undefined);

  const handleUserResponse = (value: BodyType) => {
    if (value === response) {
      setResponse(undefined);
    } else {
      setResponse(value);
    }
  };
  const goNext = async () => {
    setLocalData(LocalStoreKeys.BodyType, response);
    navigation.navigate('TargetBodyType');
  };

  useEffect(() => {
    const localResponse = async () => {
      const previousResponse = await getLocalResponse(LocalStoreKeys.BodyType);
      setResponse(previousResponse as BodyType);
    };
    localResponse();
  }, []);

  return (
    <Base
      canGoNext={response !== undefined}
      goNext={goNext}
      goPrevious={goBack}
      progress={30}>
      <View style={BaseStyles.container}>
        <Label
          variant={LabelVariant.H2.Roboto}
          title={'Please Choose your Body Type'}
          align="center"
          fullWidth
        />
        <AnimateView order={0.2}>
          <CheckCard
            title="Skinny"
            height={70}
            description=""
            img={Icons.skinny}
            isChecked={response === 'skinny'}
            onPress={() => handleUserResponse('skinny')}
          />
        </AnimateView>
        <CheckCard
          height={70}
          img={Icons.overweight}
          title="OverWeight"
          description=""
          isChecked={response === 'overweight'}
          onPress={() => handleUserResponse('overweight')}
        />

        <AnimateView order={0.3}>
          <CheckCard
            height={80}
            img={Icons.obese1}
            title="Obese"
            description=""
            isChecked={response === 'obese'}
            onPress={() => handleUserResponse('obese')}
          />
        </AnimateView>
        <AnimateView order={0.4}>
          <CheckCard
            height={70}
            img={Icons.normal_weight}
            title="Normal"
            description=""
            isChecked={response === 'normal'}
            onPress={() => handleUserResponse('normal')}
          />
        </AnimateView>
      </View>
    </Base>
  );
};
