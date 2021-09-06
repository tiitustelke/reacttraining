import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import {Text, Image, Icon} from 'react-native-elements';
import {uploadsUrl} from '../utils/variables';
import {DateTime} from 'luxon';
// import 'intl/locale-data/jsonp/fi-FI';

const Single = ({route}) => {
  const {params} = route;
  return (
    <SafeAreaView style={styles.safeContainer}>
      <Image
        style={{width: 300, height: 300}}
        source={{uri: uploadsUrl + params.filename}}
      />

      <Text h2 h2Style={styles.header}>
        {params.title}
      </Text>

      <View style={styles.container}>
        <Icon name="image" />
        <Text>{params.description}</Text>
      </View>
      <Text>by {params.user_id}</Text>
      <Text>
        {DateTime.fromISO(params.time_added)
          .setLocale('fi')
          .toLocaleString({month: 'long', day: 'numeric', year: 'numeric'})}
      </Text>
      <Text>type: {params.media_type}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    margin: 30,
  },
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  safeContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
});

Single.propTypes = {
  route: PropTypes.object.isRequired,
};

export default Single;
