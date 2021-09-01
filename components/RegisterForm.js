import React from 'react';
import PropTypes from 'prop-types';
import {View, Button} from 'react-native';
import FormTextInput from './FormTextInput';

const RegisterForm = ({navigation}) => {
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
    <FormTextInput
      autoCapitalize="none"
      placeholder="email"
      onChangeText={(txt) => handleInputChange('email', txt)}
    />
    <FormTextInput
      autoCapitalize="none"
      placeholder="full name"
      onChangeText={(txt) => handleInputChange('full_name', txt)}
    />
    <Button title="Register!" onPress={doRegister} />
  </View>;
};

export default RegisterForm;
