import React, {useEffect} from 'react';
import InitializationStage from './fit-plan';
import {BaseTab} from '@models/bottomTab';
import {createStackNavigator} from '@react-navigation/stack';
import {useLocalStore} from '@core/db';
import {createUserModel} from '@core/db/creatingPersonalizedModel';
const Stack = createStackNavigator();

const UIScreens = () => {
  const [isLogin, setLogin] = React.useState<boolean>(false);

  const LocalStore = useLocalStore();

  useEffect(() => {
    async function saveToStorage() {
      const signed_user = LocalStore.getLoginData();
      if (signed_user?.user_id) {
        console.log('signed in');
        const data = LocalStore.getPersonalizedModel({
          user_id: signed_user.user_id,
        });
        if (data) {
          await createUserModel(data);
        }

        setLogin(true);
        return;
      }
    }
    saveToStorage();
  }, [isLogin, LocalStore]);
  return (
    <Stack.Navigator>
      {!isLogin && (
        <Stack.Screen
          name="onboarding"
          options={{headerShown: false}}
          component={InitializationStage}
        />
      )}
      <Stack.Screen
        name="PageBase"
        options={{headerShown: false}}
        component={BaseTab}
      />
    </Stack.Navigator>
  );
};

export default UIScreens;
