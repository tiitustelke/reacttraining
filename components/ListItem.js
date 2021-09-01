import React from 'react';
import PropTypes from 'prop-types';
import {Image, Text, TouchableOpacity, View, StyleSheet} from 'react-native';

const ListItem = ({singleMedia}) => {
  console.log(singleMedia);
  return (
    <TouchableOpacity style={styles.row}>
        <View style={styles.imagebox}>
          <Image
            style={styles.image}
            source={{uri: singleMedia.thumbnails.w160}}
          />
        </View>
        <View style={styles.textbox}>
          <Text style={styles.listTitle}>{singleMedia.title}</Text>
          <Text style={styles.text}>{singleMedia.description}</Text>
        </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    padding: 15,
    marginBottom: 5,
    backgroundColor: '#eee',
    borderRadius: 6,
    flex: 1,
  },
  imagebox: {
    flex: 1,
  },
  image: {
    flex: 1,
    borderRadius: 6,
    borderBottomLeftRadius: 30,
    flexBasis: 300,
  },
  textbox: {
    flex: 1,
    padding: 10,
  },
  listTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 15,
    color: 'red',
  },
  text: {
    color: 'brown',
  },
});

ListItem.propTypes = {
  singleMedia: PropTypes.object.isRequired,
};

export default ListItem;
