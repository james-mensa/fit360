import React, {useEffect, useState} from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {Base} from './base';
import {Label, LabelVariant} from '@models/label';
import {Icons} from '@assets/register';
import {Palette} from '@styles/BaseColor';
import {ImageSourcePropType} from 'react-native';
import {AnimateView} from '@models/animation';
import {useNavigation} from '@react-navigation/native';
import {Navigation} from '@common/type';
import {TouchableOpacity} from 'react-native';
import {getLocalResponse, setLocalData} from '@core/utils';
import {LocalStoreKeys} from '@core/data-types';

export const Gender = () => {
  const navigation = useNavigation<Navigation>();

  const [gender, setGender] = useState<'female' | 'male' | undefined>(
    undefined,
  );

  const handleAvatarPress = (avatar: 'female' | 'male') => {
    if (avatar === gender) {
      setGender(undefined);
    } else {
      setGender(avatar);
    }
  };
  const goNext = () => {
    setLocalData(LocalStoreKeys.Gender, gender);
    navigation.navigate('Interest');
  };
  useEffect(() => {
    const localResponse = async () => {
      const previousResponse = await getLocalResponse(LocalStoreKeys.Gender);
      setGender(previousResponse as 'female' | 'male');
    };
    localResponse();
  }, []);
  return (
    <Base canGoNext={gender !== undefined} goNext={goNext} progress={10}>
      <View style={styles.container}>
        <Label variant={LabelVariant.H2.Roboto} title={'Gender'} />
        <AvaterComponent
          img={Icons.female_avater}
          isChecked={gender === 'female'}
          onPress={() => handleAvatarPress('female')}
        />
        <Label variant={LabelVariant.H3_Bold.extra} title={'Female'} />

        <AnimateView order={0.2}>
          <AvaterComponent
            img={Icons.male_avater}
            isChecked={gender === 'male'}
            onPress={() => handleAvatarPress('male')}
          />
        </AnimateView>
        <AnimateView order={0.3}>
          <Label variant={LabelVariant.H3_Bold.extra} title={'Male'} />
        </AnimateView>
      </View>
    </Base>
  );
};

interface AvaterProps {
  img: ImageSourcePropType | undefined;
  isChecked: boolean;
  onPress?: () => void;
  width?: number;
  height?: number;
}

const AvaterComponent: React.FC<AvaterProps> = ({
  img,
  isChecked,
  onPress,
  width = 150,
  height = 150,
}) => {
  const imgstyle = {
    width: width,
    height: height,
  };

  return (
    <TouchableOpacity
      style={{
        ...styles.avater_container,
        backgroundColor: isChecked
          ? Palette.background.dark[300]
          : 'transparent',
      }}
      onPress={onPress}>
      <ImageBackground source={img} style={{...styles.avater, ...imgstyle}} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    padding: 10,
    paddingVertical: 20,
    gap: 20,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  avater: {
    width: 150,
    height: 150,
    borderRadius: 75,
    overflow: 'hidden',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
  },
  avater_container: {
    borderRadius: 200,
    padding: 5,
  },
});
