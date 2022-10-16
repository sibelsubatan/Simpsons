import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '@scenes/HomePage';
import React, {FC} from 'react';
import DetailPage from '@scenes/DetailPage';
import AddPage from '@scenes/AddPage';

const MainStack = createStackNavigator();

const RootNavigation: FC = () => {
  return (
    <MainStack.Navigator initialRouteName="Home">
      <MainStack.Screen
        name="Home"
        component={HomePage}

      />
       <MainStack.Screen
        name="Detail"
        component={DetailPage}
      />
          <MainStack.Screen
        name="Add"
        component={AddPage}
      />
    </MainStack.Navigator>
  );
};

export default RootNavigation;