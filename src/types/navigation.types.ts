import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type BottomParamList = {
  Feed: undefined;
  Notifications: undefined;
  DirectMessages: undefined;
  MyProfile: undefined;
};

export type FeedParamList = {
  MainFeed: undefined;
  TweetDetail: { id: number };
};

export type FeedNavProps<T extends keyof FeedParamList> = {
  navigation: NativeStackNavigationProp<FeedParamList, T>;
  route: RouteProp<FeedParamList, T>;
};