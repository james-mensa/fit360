import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Base} from './base';
import {Label, LabelVariant} from '@models/label';
import {Icons} from '@assets/register';

import {AnimateView} from '@models/animation';
import {useNavigation} from '@react-navigation/native';
import {Navigation} from '@common/type';
import {UImage} from '@models/Icon';
import {UIResponsive} from '@layout/ResponsiveUi';
import {VectorIcons} from '@common/VectorIcons';
import {Palette} from '@styles/BaseColor';
import {useLocalStore} from '@core/db';

export const TermsAgreeMent = () => {
  const navigation = useNavigation<Navigation>();
  const [check, setCheck] = useState<boolean>(false);
  const LocalStore = useLocalStore();

  const goNext = () => {
    if (check) {
      const signed_user = LocalStore.getLoginData();
      if (signed_user?.user_id) {
        navigation.navigate('PageBase');
      } else {
        navigation.navigate('CreatingPersonalizedModel');
      }
    }
  };

  const handleOnPress = () => {
    setCheck(!check);
  };
  return (
    <Base canGoNext={check} goNext={goNext} progress={98}>
      <View style={styles.container}>
        <AnimateView order={0.1}>
          <UImage
            source={Icons.terms_aggreement}
            width={UIResponsive.Body.width - 50}
            height={UIResponsive.Body.height / 2.3}
          />
          <Label
            variant={LabelVariant.H2_Bold.TInterface}
            title={content.title}
            align="center"
          />
        </AnimateView>
        <AnimateView order={0.2}>
          <RenderTermsCheckBox check={check} setCheck={handleOnPress} />
        </AnimateView>
      </View>
    </Base>
  );
};

const RenderTermsCheckBox = ({
  setCheck,
  check,
}: {
  check?: boolean;
  setCheck: () => void;
}) => {
  return (
    <View style={styles.terms_box}>
      <View
        style={{
          ...styles.terms_box_check,
          backgroundColor: check
            ? Palette.ColorsFromImage.view1[100]
            : Palette.background.light[150],
        }}>
        {VectorIcons.Checked({
          size: check ? 16 : 14,
          color: check
            ? Palette.background.light[100]
            : Palette.background.light[400],
          onPress: setCheck,
        })}
      </View>

      <View
        style={{
          width: UIResponsive.Body.width - UIResponsive.Body.width * (1 / 4),
        }}>
        <Label title={content.detail} variant={LabelVariant.Sub1.Extra} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: UIResponsive.Body.height - 120,
    alignItems: 'center',
    padding: 10,
    paddingVertical: 20,
    gap: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
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
  terms_box: {
    height: 100,
    width: UIResponsive.Body.width - 50,
    backgroundColor: Palette.Card.light[200],
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 20,
    padding: 10,
  },
  terms_box_check: {
    width: 30,
    height: 30,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const content = {
  title: 'Do you agree to our terms and conditions ?',
  detail:
    'I agree to our terms and conditions.I am also aware of the Privacy Policy',
};
