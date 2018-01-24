app.controller("RandomController", ['$http', function ($http) {
    const self = this;
  
    self.random = function () {
    const config = {
      params: {
        api_key: 'Hkf2R5G3Dll5kXe6b8b6JXcsrWK0zokF',
      }
    }
    $http.get('https://api.giphy.com/v1/gifs/random', config)
    .then(function(response){
      self.answers = response.data.data;
      console.log(self.answers);
    });
  }
  }]);