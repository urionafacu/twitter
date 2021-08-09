import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigator from './bottomNavigator/BottomNavigator';

const RootNavigator: FC = () => {
  return (
    <NavigationContainer>
      <BottomNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;