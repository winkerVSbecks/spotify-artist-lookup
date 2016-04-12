import immutableToJS from '../utils/immutableToJS';
import createLogger from 'redux-logger';

const logger = createLogger({
  collapsed: true,
  stateTransformer: (state) => {
    return immutableToJS(state);
  },
  predicate: (getState, { type }) => {
    const blacklist = [];

    return blacklist.every(i => type !== i);
  },
});

export default logger;
