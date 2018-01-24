  var app = angular.module('giphyApp', ['ngRoute', 'ngMaterial'])
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('docs-dark', 'default')
        .primaryPalette('grey')
        .warnPalette('red')
        .accentPalette('blue')
        .dark();

  });

  // app configuration
  app.config(function($routeProvider) {
      console.log('config loaded');
      // define our client side routes
      $routeProvider
          .when('/search', {
              templateUrl: '/views/search.html',
              controller: 'SearchController as vm'
          })
          .when('/random', {
              templateUrl: '/views/random.html',
              controller: 'RandomController as vm'
          })
          .otherwise(
              { redirectTo: '/search' }
          );
  });