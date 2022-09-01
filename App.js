/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {Text, View, FlatList, Image, StyleSheet} from 'react-native';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://rickandmortyapi.com/api/character',
    }).then(function (response) {
      setData(response.data.results);
      for (var i = 0; i < response.data.results.length; i++) {
        console.log(response.data.results[i].name);
      }
      console.log(response.data.results);
    });
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.maintext}>Comic Characters</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Image source={{uri: item.image}} style={styles.images} />
            <Text style={styles.texts}>Name : {item.name}</Text>
            <Text style={styles.texts}>Species : {item.species}</Text>
            <Text style={styles.texts}>Gender : {item.gender}</Text>
            <Text style={styles.texts}>Origin : {item.origin.name}</Text>
            <Text style={styles.texts}>Location : {item.location.name}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  texts: {
    marginTop: 10,
    color: '#1A237E',
    fontWeight: '700',
  },
  maintext: {
    textAlign: 'center',
    color: '#1A237E',
    fontWeight: '600',
    fontSize: 30,
    marginTop: 10,
    marginBottom: 10,
    fontFamily: 'sans-serif-medium',
    fontStyle:"italic"
  },
  container: {backgroundColor: '#03A9F4', flex: 1},
  card: {
    width: '45%',
    marginTop: 10,
    elevation: 5,
    marginLeft: '3%',
    height: 350,
    backgroundColor: '#B3E5FC',
    paddingLeft: 8,
    borderRadius:15,
    marginBottom:10
  },
  images: {
    height: 120,
    width: '80%',
    marginLeft: '7%',
    marginTop: '15%',
    borderRadius: 10,
  },
});

export default App;
