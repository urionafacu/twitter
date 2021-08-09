import React, { FC } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { styles } from './cardTweet.jss';
import { ICardTweet } from './cardTweet.types';

const CardTweet: FC<ICardTweet> = ({ id, tweet, user, name, profilePicture, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('TweetDetail', { id })}
    >

      <View style={styles.profilePictureContainer}>
        <Image style={styles.profilePicture} source={{ uri: profilePicture }} />
      </View>

      <View style={styles.contentContainer}>

        <View style={styles.header}>

          <View style={styles.nameContainer}>
            <Text style={styles.name}>{name}</Text>
          </View>

          <View style={styles.userContainer}>
            <Text style={styles.user}>{user}</Text>
          </View>

        </View>

        <View style={styles.tweetContainer}>
          <Text>{tweet}</Text>
        </View>

      </View>

    </TouchableOpacity>
  );
};

export default CardTweet;