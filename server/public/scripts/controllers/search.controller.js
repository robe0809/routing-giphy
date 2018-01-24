app.controller("SearchController", ['GiphyService', function(GiphyService) {
    const self = this;
    self.searchResults = GiphyService.results
    self.searchBtn = function (searchJif) {
      GiphyService.search(searchJif);
    }
    console.log('search', self.searchResults);
    
  }]);
  