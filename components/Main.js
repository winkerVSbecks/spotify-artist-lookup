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

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    const dataSource = ds.cloneWithRows(['Spectacles', 'Giraffe', 'Turtle', 'Shark', 'Lamp', 'Salt', 'Beef', 'Drawer', 'Brocolli', 'Raspberries', 'Plate', 'Zebra']);

    this.state = {
      dataSource: dataSource,
    };
  }

  render() {
    const { dataSource } = this.state;

    return (
      <View style={ styles.container }>

        <StatusBar barStyle="light-content" />

        <TextInput style={ styles.searchBox } />

        <ListView dataSource={ dataSource }
          style={{ flex: 1, alignSelf: 'stretch' }}
          renderRow={
            (row, sId, id) => {
              return (
                <Text style={ styles.row }>
                  { id }. { row }
                </Text>
              );
            }
          } />

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
