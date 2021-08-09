import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FeedParamList } from 'types/navigation.types';
import { Main, TweetDetail } from 'screens/feed';
import { HeaderFeed } from 'navigation/stacks/utils';

const { Navigator, Screen } = createNativeStackNavigator<FeedParamList>();

const FeedStack: FC = () => {
  return (
    <Navigator
      initialRouteName='MainFeed'
    >
      <Screen
        name='MainFeed'
        component={Main}
        options={{
          header: () => <HeaderFeed />
        }}
      />

      <Screen
        name='TweetDetail'
        component={TweetDetail}
      />

    </Navigator>
  );
};

export default FeedStack;