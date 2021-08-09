import React, { FC } from 'react';
import { FeedNavProps } from 'types/navigation.types';
import { TWEETS } from 'screens/feed/main/Main';
import { View, ScrollView, Image, Text } from 'react-native';
import { styles } from './tweetDetail.jss';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';

const TweetDetail: FC<FeedNavProps<'TweetDetail'>> = ({ navigation, route }) => {
  const infoTweet = TWEETS.find(tweet => tweet.id === route.params.id);
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.header}>
        <View style={styles.profilePictureContainer}>
          <Image style={styles.profilePicture} source={{ uri: infoTweet?.profilePicture }} />
        </View>

        <View style={styles.infoUser}>
          <Text style={styles.name}>{infoTweet?.name}</Text>
          <Text style={styles.user}>{infoTweet?.user}</Text>
        </View>
      </View>

      <View style={styles.tweetContainer}>
        <Text style={styles.tweet}>{infoTweet?.tweet}</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.containerRetweetsLikes}>
        <Text style={styles.infoTweet}>2 retweets </Text>
        <Text style={styles.infoTweet}> 1 Me Gusta</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.containerIcons}>
        <FontAwesome5 name='comment' size={24} color='white'  />
        <FontAwesome5 name='retweet' size={24} color='white' />
        <FontAwesome name='heart' size={24} color='white' />
        <FontAwesome name='share-alt' size={24} color='white' />
      </View>

      <View style={styles.divider} />

    </ScrollView>
  );
};

export default TweetDetail;