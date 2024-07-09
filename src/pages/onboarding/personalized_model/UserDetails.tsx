import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Base} from './base';
import {Label, LabelVariant} from '@models/label';
import {useNavigation} from '@react-navigation/native';
import {Navigation} from '@common/type';

import {LocalStoreKeys} from '@core/data-types';

import {getLocalResponse, setLocalData} from '@core/utils';
import Input from '@models/TextInput';
import {NumberInput} from '@models/NumberInput';
import {UIResponsive} from '@layout/ResponsiveUi';
import {ImageUploader} from '@models/ImageUploader';

export const UserDetails = () => {
  const navigation = useNavigation<Navigation>();
  const navigationBack = useNavigation();
  const goBack = () => {
    navigationBack.goBack();
  };

  const [details, setDetails] = useState<{
    user_name?: string;
    user_age?: number;
    user_image?: string;
  }>();
  const validate = (): boolean => {
    let response_check = false;
    if (
      details &&
      details.user_name &&
      details.user_age &&
      details.user_image
    ) {
      response_check = true;
    }
    return response_check;
  };
  const goNext = () => {
    setLocalData(LocalStoreKeys.UserName, details?.user_name);
    setLocalData(LocalStoreKeys.UserImage, details?.user_image);
    setLocalData(LocalStoreKeys.UserAge, details?.user_age?.toString());
    navigation.navigate('TermsAgreeMent');
  };
  const handleFile = (file: string) => {
    setDetails(prev => ({...prev, user_image: file}));
  };

  useEffect(() => {
    const localResponse = async () => {
      const previous_username_response = await getLocalResponse(
        LocalStoreKeys.UserName,
      );

      const previous_user_img = await getLocalResponse(
        LocalStoreKeys.UserImage,
      );
      const previous_user_age = await getLocalResponse(LocalStoreKeys.UserAge);
      if (previous_username_response) {
        setDetails(prev => ({...prev, user_name: previous_username_response}));
      }
      if (previous_user_img) {
        setDetails(prev => ({...prev, user_image: previous_user_img}));
      }
      if (previous_user_age) {
        setDetails(prev => ({
          ...prev,
          user_age: parseInt(previous_user_age, 10),
        }));
      }
    };
    localResponse();
  }, []);

  return (
    <Base
      canGoNext={validate()}
      goNext={goNext}
      goPrevious={goBack}
      progress={93}>
      <View style={Styles.container}>
        <Label
          title={'Account Information'}
          variant={LabelVariant.Sub1.Extra}
        />
        <Input
          label="User Name"
          value={details?.user_name}
          onChangeText={_value =>
            setDetails(prev => ({...prev, user_name: _value}))
          }
        />
        <View style={Styles.age}>
          <NumberInput
            label="Age"
            value={details?.user_age}
            onChange={_value =>
              setDetails(prev => ({...prev, user_age: _value}))
            }
          />
        </View>
        <ImageUploader handleFile={handleFile} img={details?.user_image} />
      </View>
    </Base>
  );
};

export const Styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingVertical: 15,
    paddingHorizontal: 20,
    minHeight: UIResponsive.Body.height / 1.3,
    gap: 20,
  },
  age: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,

    gap: 10,
  },
});
