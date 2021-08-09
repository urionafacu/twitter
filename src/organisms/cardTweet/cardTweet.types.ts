import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FeedParamList } from 'types/navigation.types';

export interface ICardTweet {
  id: number;
  tweet: string;
  user: string;
  name: string;
  profilePicture: string;
  navigation: NativeStackNavigationProp<FeedParamList, "MainFeed">
};