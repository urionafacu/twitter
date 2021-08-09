import React, { FC } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomParamList } from 'types/navigation.types';
import { FeedStack } from 'navigation/stacks';
import { FontAwesome5 } from '@expo/vector-icons';

const { Navigator, Screen } = createBottomTabNavigator<BottomParamList>();

const BottomNavigator: FC = () => {
  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          borderTopColor: 'gray',
          borderTopWidth: 1,
          borderStyle: 'solid',
        },
      }}
    >
      <Screen
        name='Feed'
        component={FeedStack}
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name='home' color={color} size={24} />
          ),
          header: () => null,
        }}
      />
    </Navigator>
  );
};

export default BottomNavigator;
