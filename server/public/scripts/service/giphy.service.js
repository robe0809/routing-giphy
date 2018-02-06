app.service ('GiphyService', ['$http', function($http){
    console.log('giphy service loaded');

    var self = this;
    self.answers = {url: ''}

    self.results = { list: []}

    //search functions 
    self.search = function (search) {
        $http.get('/search/' + search)
        .then(function(response){
          self.results.list = response.data.data;
          console.log(self.results.list);
        })
        }
        //random functions
        self.random = function () {
            const config = {
              params: {
                api_key: 'Hkf2R5G3Dll5kXe6b8b6JXcsrWK0zokF',
              }
            }
            $http.get('https://api.giphy.com/v1/gifs/random', config)
            .then(function(response){
              self.answers.url = response.data.data.image_url;
              console.log('response from service', self.answers.url);
            });
          }

}])//end controller