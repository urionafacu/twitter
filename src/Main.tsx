import React, { FC, Fragment } from 'react';
import Navigation from 'navigation/RootNavigator';
import { StatusBar } from 'expo-status-bar';

const Main: FC = () => {
  return (
    <Fragment>
      <StatusBar style='auto' />
      <Navigation />
    </Fragment>
  );
};

export default Main;