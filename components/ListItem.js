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

    return (
      <TouchableOpacity
        underlayColor={ clrs.gray }
        onPress={() => navigator.push(ARTIST_STATE)}>
        <FadeInView delay={ index * 25 }>
          <View style={ styles.mediaObject }>
            <Image src={{ uri: artist.images[0] }} style={{
              width: 40,
              height: 40,
              backgroundColor: clrs.pink,
              marginRight: 16,
              marginLeft: 16,
            }} />
            <Text style={{ flex: 1 }}>{ artist.name }</Text>
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
});

ListItem.propTypes = {
  index: React.PropTypes.string,
  artist: React.PropTypes.object,
  navigator: React.PropTypes.object,
};
