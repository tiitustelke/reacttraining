import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, ActivityIndicator, Button} from 'react-native';
import PropTypes from 'prop-types';
import {uploadsUrl} from '../utils/variables';
import {Card, ListItem, Text} from 'react-native-elements';
import Intl from 'intl';
import 'intl/locale-data/jsonp/fi-FI';
import {Audio, Video} from 'expo-av';
import {useUser} from '../hooks/ApiHooks';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Single = ({route}) => {
  const {params} = route;
  const {getUserInfo} = useUser();
  const [ownerInfo, setOwnerInfo] = useState({username: ''});
  const [likes, setLikes] = useState([]);
  const [iAmLikingIt, setIAmLikingIt] = useState(false);
  const videoRef = useRef(null);

  const options = {month: 'long', day: 'numeric', year: 'numeric'};
  const dateTimeFormat = new Intl.DateTimeFormat('fi-FI', options);

  const getOwnerInfo = async () => {
    const token = await AsyncStorage.getItem('userToken');
    setOwnerInfo(await getUserInfo(params.user_id, token));
  };
  const getLikes = async () => {
    // TODO: use apihooks to get likes
    // setLikes()
    // set the value of iAmLikingIt
  };

  useEffect(() => {
    getOwnerInfo();
  }, []);
  return (
    <Card>
      <Card.Title h4>{params.title}</Card.Title>
      <Card.Title>{dateTimeFormat.format(new Date())}</Card.Title>
      <Card.Divider />
      {params.media_type === 'image' && (
        <Card.Image
          source={{uri: uploadsUrl + params.filename}}
          style={styles.image}
          PlaceholderContent={<ActivityIndicator />}
        />
      )}
      {params.media_type === 'video' && (
        /* eslint-disable prettier/prettier */
        <Video
          ref={videoRef}
          style={styles.image}
          source={{uri: uploadsUrl + params.filename}}
          useNativeControls
          resizeMode="contain"
          usePoster
          posterSource={{uri: uploadsUrl + params.screenshot}}
        />
        /* eslint-enable prettier/prettier */
      )}
      {params.media_type === 'audio' && (
        <>
          <Text>Audio not supported yet :(</Text>
          <Audio></Audio>
        </>
      )}

      <Card.Divider />
      <Text style={styles.description}>{params.description}</Text>
      <ListItem>
        <Text>{ownerInfo.username}</Text>
      </ListItem>
      <ListItem>
        {iAmLikingIt ? (
          <Button
            title="Like"
            onPress={() => {
              // use apihooks to post a like
            }}
          />
        ) : (
          <Button
            title="unlike"
            onPress={() => {
              // use apihooks to delete a like
            }}
          />
        )}
      </ListItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  description: {
    marginBottom: 10,
  },
});

Single.propTypes = {
  route: PropTypes.object.isRequired,
};

export default Single;
