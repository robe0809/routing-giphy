app.controller("RandomController", ['GiphyService', function (GiphyService) {
    const self = this;
  self.random = GiphyService.answers; //link controller to service 
  self.randomBtn = function (){
    GiphyService.random();
  }

    
}]);//end controller