/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.ui.buttons')
      .controller('ButtonPageCtrl', ButtonPageCtrl);

  /** @ngInject */
  function ButtonPageCtrl($scope, $timeout) {
    $scope.progressFunction = function() {
      return $timeout(function() {}, 3000);
    };

    $scope.test = function(e){
      console.log(angular.element(e.target).hasClass("btn"));
    }
    $scope.showIt = function(arg1){
      // console.log(angular.element(arg1).parent());
      // console.log(angular.element(arg1)[0].parent());
      var show = angular.element(".aaa").parent().hasClass("www");
      console.log("show",show,angular.element(".aaa").parent().hasClass("www"));
      return show
    }

    $timeout(function(){
      angular.element(".aaa").parent().removeClass("www")
    },5000);
  }

})();
