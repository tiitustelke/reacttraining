import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, SafeAreaView, Text, Button} from 'react-native';
import {MainContext} from '../contexts/MainContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = (props) => {
  const {isLoggedIn, setIsLoggedIn, user} = useContext(MainContext);
  console.log(user);
  console.log('profile', isLoggedIn);
  const logout = async () => {
    await AsyncStorage.clear();
    setIsLoggedIn(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text>Profile</Text>
      <Text>User id: {user.user_id}</Text>
      <Text>Username: {user.username}</Text>
      <Text>Email: {user.email}</Text>
      <Text>Full name: {user.full_name}</Text>
      <Button title={'Logout'} onPress={logout} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
});

Profile.propTypes = {
  navigation: PropTypes.object,
};

export default Profile;
