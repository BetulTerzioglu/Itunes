import React, {useState} from 'react';
import {SafeAreaView, View, StyleSheet, FlatList} from 'react-native';
import music_data from './music-data.json';
import SongCard from './components/SongCard';
import SearchBar from './components/SearchBar';

function App() {
  const [list, setList] = useState(music_data);
  const renderSong = ({item}) => <SongCard song={item} />;
  const renderSeperator = () => <View style={styles.seperator} />;
  const onSearch = text => {
    const filtered_list = music_data.filter(song => {
      const searchedText = text.toLowerCase();
      const currentText = song.title.toLowerCase();
      return currentText.indexOf(searchedText) > -1;
    });

    setList(filtered_list);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <SearchBar search={onSearch} />
        <FlatList
          keyExtractor={item => item.id}
          data={list}
          renderItem={renderSong}
          ItemSeparatorComponent={renderSeperator}
        />
      </View>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  seperator: {
    borderWidth: 0.3,
    borderColor: 'gray',
  },
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
});
