import React, {useContext, useEffect} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {MainContext} from '../contexts/MainContext';
import {useLogin, useUser} from '../hooks/ApiHooks';

const Login = ({navigation}) => {
  const {setIsLoggedIn} = useContext(MainContext);
  const {login} = useLogin();
  const {checkToken} = useUser();
  // console.log('Login isLoggedIn', isLoggedIn);

  const doLogin = async () => {
    try {
      const loginInfo = await login(
        JSON.stringify({
          username: 'tiitus',
          password: 'salakana',
        })
      );
      console.log('doLogin response', loginInfo);
      await AsyncStorage.setItem('userToken', loginInfo.token);
      // TODO: Save user info (loginInfo.user) to MainContext
      setIsLoggedIn(true);
    } catch (error) {
      console.log('doLogin error', error);
    }
  };

  const getToken = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    console.log('logIn asyncstorage token:', userToken);
    if (userToken) {
      const userInfo = await checkToken(userToken);
      if (userInfo.user_id) {
        // TODO: save user info to maincontext
        setIsLoggedIn(true);
      }
    }
  };

  useEffect(() => {
    getToken();
    if (isLoggedIn) {
      navigation.navigate('Home');
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button title="Sign in!" onPress={logIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Login.propTypes = {
  navigation: PropTypes.object,
};

export default Login;
