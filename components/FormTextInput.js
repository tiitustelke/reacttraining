import React from 'react';
import PropTypes from 'prop-types'
import {StyleSheet} from 'react-native';


const FormTextInput = ({style, ...otherProps}) => {
  return (
    <TextInput
      style={[styles.textInput, style]}
      {...otherProps}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
  },
});

FormTextInput.PropTypes = {
  style: PropTypes.object,
};

export default FormTextInput;
