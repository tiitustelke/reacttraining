import React, {useContext, useEffect} from 'react';
import {StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';
import {Text} from 'react-native-elements';
import PropTypes from 'prop-types';
import {MainContext} from '../contexts/MainContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useUser} from '../hooks/ApiHooks';
import RegisterForm from '../components/RegisterForm';
import LoginForm from '../components/LoginForm';

const Login = ({navigation}) => {
  const {setIsLoggedIn, setUser} = useContext(MainContext);
  const {checkToken} = useUser();
  // console.log('Login isLoggedIn', isLoggedIn);

  const getToken = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    console.log('logIn asyncstorage token:', userToken);
    if (userToken) {
      const userInfo = await checkToken(userToken);
      console.log(userInfo);
      if (userInfo.user_id) {
        setUser(userInfo); // save user info to maincontext
        setIsLoggedIn(true);
      }
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Text h2 h2Style={styles.text}>
        Login
      </Text>

      <LoginForm navigation={navigation} />

      <Text h2 h2Style={styles.text}>
        Register
      </Text>
      <RegisterForm navigation={navigation} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

Login.propTypes = {
  navigation: PropTypes.object,
};

export default Login;
