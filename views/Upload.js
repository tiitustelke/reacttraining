import React from 'react';
import PropTypes from 'prop-types';
import {Button, View, Image} from 'react-native';
import UploadForm from '../components/UploadForm';

const doUpload = () => {};

const Upload = (props) => {
  return (
    <View>
      <Image
        source={{uri: 'assets/icon.png'}}
        style={{width: 400, height: 200}}
      />
      <Button title="Select media" />
      <UploadForm title="Upload" handleSumbit={doUpload} />
    </View>
  );
};

Upload.propTypes = {};

export default Upload;
