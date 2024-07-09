import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import UIScreens from '@pages/index';
import {RealmProvider} from '@core/db';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <RealmProvider>
          <NavigationContainer>
            <UIScreens />
          </NavigationContainer>
        </RealmProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
