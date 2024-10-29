import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {padding: 10, flexDirection: 'row'},
  image: {width: 100, height: 100, borderRadius: 50},
  inner_container: {padding: 10, flex: 1},
  title: {fontWeight: 'bold', fontFamily: 'tahoma', fontSize: 20},
  info_container: {flexDirection: 'row', flex: 1, alignItems: 'center'},
  year: {
    marginLeft: 10,
    color: 'gray',
    fontFamily: 'lucida grande',
    fontSize: 12,
  },
  soldout_container: {borderColor: 'red', borderWidth: 0.6, borderRadius: 3, padding: 3, margin: 8  },
  soldout_title: {color: 'red', fontSize: 12},
  content_container: {flexDirection: 'row', alignContent: 'center'},
});
