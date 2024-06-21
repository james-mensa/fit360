import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Base} from './base';
import {Label, LabelVarient} from '@models/label';
import {Icons} from '@assets/register';

import {AnimateView} from '@models/animation';

import {useNavigation} from '@react-navigation/native';
import {Navigation} from '@common/type';
import CheckCard from '@models/CheckCard/CheckCard';
type ResponseType = 'gym' | 'nutrition' | 'running';
export const Interest = () => {
  const navigation = useNavigation<Navigation>();
  const navigationBack = useNavigation();
  const goBack = () => {
    navigationBack.goBack();
  };
  const goNext = () => {
    navigation.navigate('BodyType');
  };
  const [responses, setResponses] = useState<ResponseType[]>([]);
  const handleUserOnPress = (value: ResponseType) => {
    if (responses.includes(value)) {
      setResponses(responses.filter(item => item !== value));
    } else {
      setResponses(previous => [...previous, value]);
    }
  };

  return (
    <Base
      canGoNext={responses.length > 0}
      goNext={goNext}
      progress={20}
      goPrevious={goBack}>
      <View style={styles.container}>
        <Label
          varient={LabelVarient.H2.Roboto}
          title={'Please What your are interested in'}
          align="center"
          fullWidth
        />
        <AnimateView order={0.4}>
          <CheckCard
            title="Body building and Gain weight"
            description="Enhance your physique and build muscle mass with targeted exercises and nutrition plans."
            img={Icons.gym}
            isChecked={responses.includes('gym')}
            onPress={() => handleUserOnPress('gym')}
          />
        </AnimateView>
        <CheckCard
          img={Icons.running1}
          isChecked={responses.includes('running')}
          title="Running"
          description="Improve your cardiovascular health and endurance through running and jogging."
          onPress={() => handleUserOnPress('running')}
        />

        <AnimateView order={0.4}>
          <CheckCard
            img={Icons.nutrition1}
            title="Best diet Recommadation"
            description="Receive personalized dietary advice to meet your fitness goals and maintain a healthy lifestyle."
            isChecked={responses.includes('nutrition')}
            onPress={() => handleUserOnPress('nutrition')}
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
