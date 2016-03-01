import React, {
  AppRegistry,
  Component,
  Navigator,
} from 'react-native';
import Main from './components/Main';
import Artist from './components/Artist';
import NavigationBar from './components/NavigationBar';

class SpotifyArtistLookup extends Component {
  renderScene(route, navigator) {
    if (route.id === 'MAIN') {
      return <Main navigator={ navigator } />;
    }

    return <Artist url={ route.url } />;
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
