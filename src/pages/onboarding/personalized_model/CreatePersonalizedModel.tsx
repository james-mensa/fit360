import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Label, LabelVariant} from '@models/label';
import {AnimateView} from '@models/animation';
import {UIResponsive} from '@layout/ResponsiveUi';
import {Palette} from '@styles/BaseColor';
import CircularProgress from '@models/progress/CircularProgress';
import {UImage} from '@models/Icon';
import {Icons} from '@assets/register';
import personalizeDataToDb from '@core/useHooks/PersonalizeDataToDB';
import {useLocalStore} from '@core/db';
import {useProvider} from '@store/provider';
import {useAppNavigation} from '@common/common-ui';
export const CreatingPersonalizedModel = () => {
  const navigation = useAppNavigation();
  const {setPlans, setProgressSummary, setLogin} = useProvider();
  const goNext = () => {
    setTimeout(() => {
      setLogin();
      navigation.reset({
        index: 0,
        routes: [{name: 'PageBase'}],
      });
    }, 100);
  };

  const localStore = useLocalStore();
  useEffect(() => {
    async function saveToStorage() {
      const signed_user = localStore.getLoginData();
      if (signed_user?.user_id) {
        return;
      }
      const MetaData = await personalizeDataToDb();
      const response = localStore.setPersonalizedModel(
        {user_id: MetaData.user_id},
        MetaData.data,
      );

      if (response) {
        const __user = localStore.setLoginData(
          {user_id: MetaData.user_id},
          {user_name: response.user_name},
        );
        if (__user) {
          localStore.AddDayPlan();
          const _res = localStore.getPlan();
          if (_res) {
            setPlans(_res);
            setTimeout(() => {
              const savedProgress = localStore.getProgressSummary();
              if (savedProgress) {
                setProgressSummary(savedProgress);
              }
            }, 1000);
          }
        }
      }
    }
    saveToStorage();
  }, [localStore, setPlans, setProgressSummary]);
  return (
    <View style={styles.container}>
      <UImage
        source={Icons.plan_2}
        width={UIResponsive.Body.width - 50}
        height={UIResponsive.Body.height / 2.3}
      />
      <AnimateView order={0.1}>
        <CircularProgress handler={goNext} />
      </AnimateView>
      <Label
        variant={LabelVariant.Sub1.Extra}
        title={content.title}
        align="center"
      />
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
  title: 'Creating your personlized fitness plan base on your response..',
};
