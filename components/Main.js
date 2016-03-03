import React, {
  Component,
  StyleSheet,
  View,
  TextInput,
  ListView,
  StatusBar,
} from 'react-native';
import {debounce} from 'lodash';
import ListItem from './ListItem';
import clrs from '../utils/clrs';
import {searchFor} from '../utils/fetcher';


export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { artists: [] };
  }

  render() {
    const { artists } = this.state;
    const { navigator } = this.props;
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    const dataSource = ds.cloneWithRows(artists);

    return (
      <View style={ styles.container }>

        <StatusBar barStyle="light-content" />

        <TextInput style={ styles.searchBox }
          onChangeText={ this.makeQuery } />

        <ListView dataSource={ dataSource }
          style={{ flex: 1, alignSelf: 'stretch' }}
          renderRow={
            (artist, sId, id) => {
              return (
                <ListItem index={ id }
                  artist={ artist }
                  navigator={ navigator } />
              );
            }
          } />

      </View>
    );
  }

  makeQuery = debounce(query => {
    searchFor(query)
      .then(artists => {
        this.setState({ artists });
      })
      .catch((error) => {
        throw error;
      });
  }, 400);
}

Main.propTypes = {
  navigator: React.PropTypes.object,
};

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
  mediaObject: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
});
