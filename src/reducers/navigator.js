import { fromJS } from 'immutable';

export const GOTO_ROUTE = '@@userAction/GOTO_ROUTE';
export const ROUTES = {
  MAIN: 'MAIN',
  ARTIST_DETAIL: 'ARTIST_DETAIL',
};

const initialState = fromJS({
  activeRoute: {
    id: ROUTES.MAIN,
    title: 'Spotify Artist Lookup',
  },
});

function navigatorReducer(state = initialState, action = {}) {
  switch (action.type) {
    case GOTO_ROUTE:
      return state.set('activeRoute', fromJS(action.payload));

    default:
      return state;
  }
}

export function gotoArtistDetail({ title, url }) {
  return {
    type: GOTO_ROUTE,
    payload: {
      id: ROUTES.ARTIST_DETAIL,
      title,
      url,
    },
  };
}

export function gotoMain() {
  return {
    type: GOTO_ROUTE,
    payload: {
      id: ROUTES.MAIN,
      title: 'Spotify Artist Lookup',
    },
  };
}

export default navigatorReducer;
