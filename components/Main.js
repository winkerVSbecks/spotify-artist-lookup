import React, {
  Component,
  StyleSheet,
  View,
  Text,
  TextInput,
  ListView,
  StatusBar,
} from 'react-native';
import clrs from '../utils/clrs';


export default class Main extends Component {

  constructor(props) {
    super(props);

    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    const data = ['Spectacles', 'Giraffe', 'Turtle', 'Shark', 'Lamp', 'Salt', 'Beef', 'Drawer', 'Brocolli', 'Raspberries', 'Plate', 'Zebra'];

    this.state = { artists: dataSource.cloneWithRows(data) };
  }

  renderRow = (text, sId, rId) => {
    return (
      <Text style={ styles.row }>
        { rId }. { text }
      </Text>
    );
  };

  render() {
    const { artists } = this.state;

    return (
      <View style={ styles.container }>

        <StatusBar barStyle="light-content" />

        <TextInput style={ styles.searchBox } />

        <ListView dataSource={ artists }
          style={{ flex: 1, alignSelf: 'stretch' }}
          renderRow={ this.renderRow } />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 64,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: clrs.white,
  },
  searchBox: {
    height: 40,
    borderColor: clrs.black,
    borderWidth: 2,
    margin: 16,
    paddingLeft: 10,
    fontWeight: '800',
  },
  row: {
    flex: 1,
    margin: 16,
  },
});
