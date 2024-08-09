import React, {useEffect} from 'react';
import InitializationStage from './fit-plan';
import {BaseTab} from '@models/bottomTab';
import {createStackNavigator} from '@react-navigation/stack';
import {useLocalStore} from '@core/db';
import {Player__} from '@models/player';

const Stack = createStackNavigator();

const UIScreens = () => {
  const [isLogin, setLogin] = React.useState<boolean>(false);

  const LocalStore = useLocalStore();

  useEffect(() => {
    async function saveToStorage() {
      const signed_user = LocalStore.getLoginData();
      if (signed_user?.user_id) {
        console.log('signed in');

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
      <Stack.Screen
        name="Player"
        options={{
          headerShown: false,
          presentation: 'transparentModal',
        }}
        component={Player__}
      />
    </Stack.Navigator>
  );
};

export default UIScreens;
