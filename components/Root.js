import React, {
  Component,
  Navigator,
} from 'react-native';
import Main from './Main';
import Artist from './Artist';
import NavigationBar from './NavigationBar';

export default class Root extends Component {
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
}
