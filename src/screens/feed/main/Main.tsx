import React, { FC } from 'react';
import { View, FlatList } from 'react-native';
import { CardTweet } from 'organisms';
import { FeedNavProps } from 'types/navigation.types';
import { styles } from './main.jss';

export const TWEETS = [
  {
    id: 1,
    tweet: 'En las buenas pero también en las malas, vamos Boquita de mi corazao, xdxdxdxdxddxdxddxdxdd as asda dasda s',
    user: '@YanellaCuerva',
    name: 'Yanella',
    profilePicture: 'https://www.knack.com/images/about/default-profile.png',
  },
  {
    id: 2,
    tweet: 'Explicando react native',
    user: '@urionafacu',
    name: 'Facu',
    profilePicture: 'https://www.knack.com/images/about/default-profile.png',
  },
  {
    id: 3,
    tweet: 'Aprendiendo react native',
    user: '@francoandrada',
    name: 'Franquito',
    profilePicture: 'https://www.knack.com/images/about/default-profile.png',
  },
  {
    id: 4,
    tweet: 'Cuando llegue al depto te paso la tarea de Fisica, espero no olvidarme',
    user: '@ciroatencio',
    name: 'Ciro',
    profilePicture: 'https://www.knack.com/images/about/default-profile.png',
  },
  {
    id: 5,
    tweet: 'En las buenas pero también en las malas',
    user: '@YanellaCuerva',
    name: 'Yanella',
    profilePicture: 'https://www.knack.com/images/about/default-profile.png',
  },
  {
    id: 6,
    tweet: 'Explicando react native',
    user: '@urionafacu',
    name: 'Facu',
    profilePicture: 'https://www.knack.com/images/about/default-profile.png',
  },
  {
    id: 7,
    tweet: 'Aprendiendo react native',
    user: '@francoandrada',
    name: 'Franquito',
    profilePicture: 'https://www.knack.com/images/about/default-profile.png',
  },
  {
    id: 8,
    tweet: 'Cuando llegue al depto te paso la tarea de Fisica, espero no olvidarme',
    user: '@ciroatencio',
    name: 'Ciro',
    profilePicture: 'https://www.knack.com/images/about/default-profile.png',
  },
  {
    id: 9,
    tweet: 'En las buenas pero también en las malas',
    user: '@YanellaCuerva',
    name: 'Yanella',
    profilePicture: 'https://www.knack.com/images/about/default-profile.png',
  },
  {
    id: 10,
    tweet: 'Explicando react native',
    user: '@urionafacu',
    name: 'Facu',
    profilePicture: 'https://www.knack.com/images/about/default-profile.png',
  },
  {
    id: 11,
    tweet: 'Aprendiendo react native',
    user: '@francoandrada',
    name: 'Franquito',
    profilePicture: 'https://www.knack.com/images/about/default-profile.png',
  },
  {
    id: 12,
    tweet: 'Cuando llegue al depto te paso la tarea de Fisica, espero no olvidarme',
    user: '@ciroatencio',
    name: 'Ciro',
    profilePicture: 'https://www.knack.com/images/about/default-profile.png',
  },
];

const Main: FC<FeedNavProps<'MainFeed'>> = ({ navigation, route }) => {
  return (
    <View>
      <FlatList
        data={TWEETS}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <CardTweet
            id={item.id}
            name={item.name}
            user={item.user}
            tweet={item.tweet}
            profilePicture={item.profilePicture}
            navigation={navigation}
          />
        )}
        ItemSeparatorComponent={() => <View style={styles.divider} />}
      />
    </View>
  );
};

export default Main;