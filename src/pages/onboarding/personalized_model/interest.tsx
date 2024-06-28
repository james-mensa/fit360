import React, {useState} from 'react';
import {View} from 'react-native';
import {Base} from './base';
import {Label, LabelVarient} from '@models/label';
import {Icons} from '@assets/register';
import {AnimateView} from '@models/animation';
import {useNavigation} from '@react-navigation/native';
import {Navigation} from '@common/type';
import CheckCard from '@models/CheckCard/CheckCard';
import {BaseStyles} from './BaseStyles';

type ResponseType = 'gym' | 'nutrition' | 'running';

const LABEL_TEXT = 'Please What you are interested in';

const interestData = [
  {
    type: 'gym',
    title: 'Body building and Gain weight',
    description: 'Build muscle mass with targeted exercises.',
    img: Icons.gym,
  },
  {
    type: 'running',
    title: 'Running',
    description: 'Improve your cardiovascular health and endurance.',
    img: Icons.running1,
  },
  {
    type: 'nutrition',
    title: 'Best diet Recommadation',
    description: 'Get personalized dietary advice for your fitness goals.',
    img: Icons.nutrition1,
  },
];

export const Interest = () => {
  const navigation = useNavigation<Navigation>();
  const navigationBack = useNavigation();
  const goBack = () => {
    navigation.navigate('Gender');
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
      <View style={BaseStyles.container}>
        <Label
          varient={LabelVarient.H2.Roboto}
          title={LABEL_TEXT}
          align="center"
          fullWidth
        />
        {interestData.map((interest, index) => (
          <AnimateView key={interest.type} order={index * 0.1}>
            <CheckCard
              title={interest.title}
              description={interest.description}
              img={interest.img}
              isChecked={responses.includes(interest.type as ResponseType)}
              onPress={() => handleUserOnPress(interest.type as ResponseType)}
            />
          </AnimateView>
        ))}
      </View>
    </Base>
  );
};
