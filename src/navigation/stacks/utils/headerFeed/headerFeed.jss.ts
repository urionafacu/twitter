import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


export default () => {
  const insets = useSafeAreaInsets();
  return StyleSheet.create({
    container: {
      paddingTop: insets.top,
      height: 100,
      backgroundColor: '#ffffff',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 10,
    },
    text: {
      fontSize: 24,
      fontWeight: '700',
      color: 'gray',
    },
  });
};