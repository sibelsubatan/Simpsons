import Splashscreen from '@components/Splashscreen';
import { NavigationContainer } from '@react-navigation/native';
import { store, persistor } from '@redux/store';
import { isMountedRef, navigationRef } from '@routes/navigationUtils';
import React, { FC, Suspense, useEffect } from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import RootNavigation from '@routes'

enableScreens();

const App: FC = () => {
   //@ts-ignore
  useEffect(() => {
     //@ts-ignore
    isMountedRef.current = true;
    //@ts-ignore
    return () => (isMountedRef.current = false);
  }, []);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Suspense fallback={<Splashscreen />}>
      <Provider store={store}>
        <PersistGate loading={<Splashscreen />} persistor={persistor}>
          <SafeAreaProvider>
            <NavigationContainer ref={navigationRef}>
                <StatusBar barStyle="dark-content" />
                <RootNavigation />
            </NavigationContainer>
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    </Suspense>
  );
};

export default App;
