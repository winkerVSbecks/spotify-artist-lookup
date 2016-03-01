import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import FadeInView from './FadeInView';
import clrs from '../utils/clrs';

const placeholder = require('../assets/placeholder.jpg');

export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = { artists: [] };
  }

  render() {
    const {index, artist, navigator} = this.props;

    const ARTIST_STATE = {
      id: 'ARTIST_DETAIL',
      title: artist.name,
      url: artist.external_urls.spotify,
    };

    const image = artist.images[0] ? { uri: artist.images[0].url } :
                                     placeholder;

    return (
      <TouchableOpacity
        underlayColor={ clrs.gray }
        onPress={() => navigator.push(ARTIST_STATE)}>

        <FadeInView delay={ index * 25 }>
          <View style={ styles.mediaObject }>
            <Image source={ image } style={ styles.image } />
            <Text style={ styles.text }>{ artist.name }</Text>
          </View>
        </FadeInView>

      </TouchableOpacity>
    );
  }
}

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
  artist: React.PropTypes.object,
  navigator: React.PropTypes.object,
};
