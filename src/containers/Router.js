import React, {
  Component,
  Navigator,
} from 'react-native';
import { connect } from 'react-redux';
import Main from '../components/Main';
import Artist from '../components/Artist';
import NavigationBar from '../components/NavigationBar';
import * as navigatorActions from '../reducers/navigator';
import {ROUTES} from '../reducers/navigator';

function mapStateToProps(state) {
  return {
    activeRoute: state.navigator.get('activeRoute').toJS(),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    gotoArtistDetail: (artist) => {
      dispatch(navigatorActions.gotoArtistDetail(artist));
    },
    gotoMain: () => dispatch(navigatorActions.gotoMain()),
  };
}

export default class Router extends Component {
  componentWillReceiveProps(nextProps) {
    const prevProps = this.props;

    if (nextProps.activeRoute.id === prevProps.activeRoute.id) {
      return;
    }

    const navigator = this.refs.spotifyArtistLookupNavigator;

    if (nextProps.activeRoute.id === ROUTES.MAIN) {
      navigator.pop();
    } else {
      navigator.push(nextProps.activeRoute);
    }
  }

  renderScene(route, gotoArtistDetail) {
    if (route.id === ROUTES.MAIN) {
      return <Main goTo={ gotoArtistDetail } />;
    }

    return <Artist url={ route.url } />;
  }

  render() {
    const {activeRoute, gotoArtistDetail, gotoMain} = this.props;

    return (
      <Navigator ref="spotifyArtistLookupNavigator"
        style={{ flex: 1 }}
        initialRoute={{
          id: ROUTES.MAIN,
          title: 'Spotify Artist Lookup',
        }}
        renderScene={
          () => this.renderScene(activeRoute, gotoArtistDetail)
        }
        navigationBar={ NavigationBar(gotoMain) }
      />
    );
  }
}

Router.propTypes = {
  activeRoute: React.PropTypes.object,
  gotoArtistDetail: React.PropTypes.func,
  gotoMain: React.PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Router);
