import searchMiddleware from './search-middleware';
import bookmarkMiddleware from './bookmark-middleware';

const middleware = () => (next) => async (action) => {
  if (!action) return false;
  const nextState = next(action);
  return nextState;
};

export default [
  middleware,
  searchMiddleware,
  bookmarkMiddleware
];
