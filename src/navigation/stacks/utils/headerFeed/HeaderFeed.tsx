import React, { FC } from 'react';
import { View, Text } from 'react-native';
import stylesTheme from './headerFeed.jss';

const HeaderFeed: FC = () => {
  const styles = stylesTheme();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Feed</Text>
    </View>
  );
};

export default HeaderFeed;