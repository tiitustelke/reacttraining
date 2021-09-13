import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-native';
import FormTextInput from './FormTextInput';

const handleInputChange = () => {};

const UploadForm = ({title, handleSubmit}) => {
  return (
    <>
      <FormTextInput
        autoCapitalize="none"
        placeholder="title"
        onChangeText={(txt) => handleInputChange('title', txt)}
      />
      <FormTextInput
        autoCapitalize="none"
        placeholder="description"
        onChangeText={(txt) => handleInputChange('description', txt)}
        secureTextEntry={true}
      />

      <Button raised title={title} onPress={handleSubmit} />
    </>
  );
};

UploadForm.propTypes = {
  title: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default UploadForm;
