// Generated by CoffeeScript 1.8.0
(function() {
  var define_controller;

  define('demo', function() {
    var user_plugin;
    return user_plugin = {
      name: 'demo',
      _models: {},
      anchor: '#/demo',
      title: 'Demo',
      type: 'plugin',
      order: -12,
      icon: 'icon-list',
      init: function() {
        console.log('init');
        return define_controller();
      }
    };
  });

  define_controller = function() {
    return angular.module('foundry').controller('DemoController', ['$scope', function($scope) {}]);
  };

}).call(this);
