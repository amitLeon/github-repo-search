import appController from '../controller/app-controller';

const addBookmark = (req, res) => {
  const userData = req.body;
  appController.addBookmark(userData).then((data) => {
    res.json({ data });
  }).catch((err) => {
    res.json(err);
  });
};

const removeBookmark = (req, res) => {
  const { params: { bid } } = req; // bookmark id(bid)

  appController.removeBookmark(bid).then((data) => {
    res.json({ data });
  }).catch((err) => {
    res.json(err);
  });
};

const getBookmarks = (req, res) => {
  appController.getBookmarks().then((data) => {
    res.send(data);
  }).catch((err) => {
    res.send(err);
  });
};

const getSearchResults = (req, res) => {
  const { query: { search_term } } = req;

  appController.getSearchResults(search_term).then((data) => {
    res.send(data);
  }).catch((err) => {
    res.send(err);
  });
};

const appRoutes = (router) => {
  router.route('/api/search')
    .get(getSearchResults);

  router.route('/api/bookmarks')
    .get(getBookmarks);

  router.route('/api/bookmark')
    .post(addBookmark);

  router.route('/api/bookmark/:bid')
    .delete(removeBookmark);
};

export default appRoutes;
