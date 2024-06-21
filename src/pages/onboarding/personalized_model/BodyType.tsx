import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Base} from './base';
import {Label, LabelVarient} from '@models/label';
import {Icons} from '@assets/register';

import {AnimateView} from '@models/animation';

import {useNavigation} from '@react-navigation/native';
import {Navigation} from '@common/type';
import CheckCard from '@models/CheckCard/CheckCard';
type BodyType = 'skinny' | 'normal' | 'obese' | 'overweight';
export const BodyType = () => {
  const navigation = useNavigation<Navigation>();
  const navigationBack = useNavigation();
  const goNext = () => {
    navigation.navigate('Interest');
  };

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

  return (
    <Base
      canGoNext={response !== undefined}
      goNext={() => {}}
      goPrevious={goBack}
      progress={20}>
      <View style={styles.container}>
        <Label
          varient={LabelVarient.H2.Roboto}
          title={'Please Choose your Body Type'}
          align="center"
          fullWidth
        />
        <AnimateView order={0.4}>
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

        <AnimateView order={0.4}>
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

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    paddingVertical: 15,
    paddingHorizontal: 20,
    gap: 20,
  },
});
