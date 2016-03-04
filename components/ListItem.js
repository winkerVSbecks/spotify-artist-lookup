import React, {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import FadeInView from './FadeInView';
import clrs from '../utils/clrs';

const placeholder = require('../assets/placeholder.jpg');

const ListItem = ({ index, text, imageUrl, navState, navigator }) => {
  const image = (
    imageUrl ? { uri: imageUrl } : placeholder
  );

  return (
    <TouchableOpacity
      underlayColor={ clrs.gray }
      onPress={ () => navigator.push(navState) }>

      <FadeInView delay={ index * 25 }>
        <View style={ styles.mediaObject }>
          <Image source={ image } style={ styles.image } />
          <Text style={ styles.text }>{ text }</Text>
        </View>
      </FadeInView>

    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  mediaObject: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  text: { flex: 1 },
  image: {
    backgroundColor: clrs.gray,
    width: 40,
    height: 40,
    marginRight: 16,
    marginLeft: 16,
  },
});

ListItem.propTypes = {
  index: React.PropTypes.string,
  text: React.PropTypes.string,
  imageUrl: React.PropTypes.string,
  navState: React.PropTypes.object,
  navigator: React.PropTypes.object,
};
