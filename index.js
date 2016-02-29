import React, {
  AppRegistry,
  Component,
  Navigator,
  Text,
  View,
} from 'react-native';
import Main from './components/Main';
import NavigationBar from './components/NavigationBar';
import clrs from './utils/clrs';

class SpotifyArtistLookup extends Component {
  renderScene(route, navigator) {
    if (route.id === 'MAIN') {
      return <Main navigator={ navigator } />;
    }

    return (
      <View style={{ flex: 1, paddingTop: 64, backgroundColor: clrs.pink }}>
        <Text>Route Two</Text>
      </View>
    );
  }

  render() {
    return (
      <Navigator style={{ flex: 1 }}
        initialRoute={{ id: 'MAIN', title: 'Spotify Artist Lookup' }}
        renderScene={ this.renderScene }
        navigationBar={ NavigationBar }
      />
    );
  }

  configureScene() {
    return CustomSceneConfig;
  }
}

AppRegistry.registerComponent('SpotifyArtistLookup', () => SpotifyArtistLookup);
