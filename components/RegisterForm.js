import React from 'react';
import PropTypes from 'prop-types';
import {View, Alert} from 'react-native';
import {Button} from 'react-native-elements';
import FormTextInput from './FormTextInput';
import useSignUpForm from '../hooks/RegisterHooks';
import {useUser} from '../hooks/ApiHooks';

const RegisterForm = ({navigation}) => {
  const {inputs, handleInputChange} = useSignUpForm(); // makes inputs and handleInput change visible from RegisterHooks.js
  const {register} = useUser();
  const doRegister = async () => {
    try {
      const serverResponse = await register(inputs);
      console.log(serverResponse);
      if (serverResponse) {
        Alert.alert(serverResponse.message);
      } else {
        Alert.alert('register failed');
      }
    } catch (e) {
      Alert.alert(e.message);
    }

  };

  return (
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
    </View>
  );
};

RegisterForm.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default RegisterForm;
