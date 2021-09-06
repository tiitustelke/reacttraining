import React from 'react';
import PropTypes from 'prop-types';
import {ListItem, Avatar} from 'react-native-elements';
import {uploadsUrl} from '../utils/variables';
import {TouchableOpacity} from 'react-native-gesture-handler';

const NBListItem = ({singleMedia, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Single', singleMedia);
      }}
    >
      <ListItem bottomDivider>
        <Avatar source={{uri: uploadsUrl + singleMedia.thumbnails?.w160}} />
        <ListItem.Content>
          <ListItem.Title>{singleMedia.title}</ListItem.Title>
          <ListItem.Subtitle>{singleMedia.description}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    </TouchableOpacity>
  );
};

NBListItem.propTypes = {
  singleMedia: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default NBListItem;
