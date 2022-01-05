class SearchController {
  search(req, res) {
    res.render('search')
  }
  showSearch(req, res) {
    res.send('New search')
  }
}

export default new SearchController;