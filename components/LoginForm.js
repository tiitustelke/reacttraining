import React from 'react';
import PropTypes from 'prop-types';
import {View, Button} from 'react-native';
import FormTextInput from './FormTextInput';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {MainContext} from '../contexts/MainContext';

const LoginForm = ({navigation}) => {
  <View>
    <FormTextInput
      autoCapitalize="none"
      placeholder="username"
      onChangeText={(txt) => handleInputChange('username', txt)}
    />
    <FormTextInput
      autoCapitalize="none"
      placeholder="password"
      onChangeText={(txt) => handleInputChange('password', txt)}
      secureTextEntry={true}
    />
    <Button title="Login!" onPress={doLogin} />
  </View>;
};

export default LoginForm;
