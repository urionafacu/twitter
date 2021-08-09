import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#1da1f2',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    height: 50,
    width: '100%',
  },
  profilePictureContainer: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  profilePicture: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 30,
  },
  infoUser: {
    flexDirection: 'column',
    marginLeft: 16,
  },
  name: {
    fontSize: 16,
    color: 'white',
  },
  user: {
    fontSize: 16,
    color: 'white',
  },
  tweetContainer: {
    marginTop: 16,
  },
  tweet: {
    color: 'white',
    fontWeight: '600',
    fontSize: 20,
  },
  divider: {
    width: '100%',
    height: .5,
    backgroundColor: 'lightgray',
    marginVertical: 16,
  },
  containerRetweetsLikes: {
    flexDirection: 'row',
  },
  infoTweet: {
    color: 'white',
  },
  containerIcons: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
});