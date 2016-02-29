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

    return (
      <TouchableOpacity
        underlayColor={ clrs.gray }
        onPress={() => navigator.push({ id: 'TWO', title: 'Route 2' })}>
        <FadeInView delay={ index * 25 }>
          <View style={ styles.mediaObject }>
            <Image src={{ uri: 'http://placehold.it/120' }} style={{
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
