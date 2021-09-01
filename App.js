import React from 'react';
import {
  ImageBackground,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import List from './components/List';
import { Power } from "react-native-feather";

const App = () => {
  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <ImageBackground
            source={require('./assets/cat.jpg')}
            resizeMode="cover"
            style={styles.image}
            imageStyle={styles.imgStyle}
          />
          <View style={styles.box}>
            <Text>Homeless cats</Text>
          </View>
          <Power style={styles.icon} stroke="black" width={48} height={48} />
        </View>
        <View style={styles.main}>
          <List />
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: 'grey',
  },
  image: {
      flex: 1,
    },
  header: {
    flexBasis: 300,
    position: 'relative',
    backgroundColor: 'grey',
  },
  box: {
    width: 250,
    height: 50,
    top: '50%',
    left: 0,
    backgroundColor: 'rgba(75, 75, 75, 0.5)',
    position: 'absolute',
  },
  icon: {
    position: 'absolute',
    right: 50,
    top: 50,
  },
  main: {
    flex: 1,
    padding: 20,
    flexDirection: 'row',
    backgroundColor: 'lightgrey'
},
  droidSafeArea: {
    flex: 1,
    backgroundColor: '#ccc',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  imgStyle: {
    borderBottomRightRadius: 50,
  },
});

export default App;
