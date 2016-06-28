/**
 * Created by 皓强 on 2016/6/26 0026.
 */
(function (angular) {
    'use strict';
    var controllers = angular.module('app.controllers.main', ['app.services.main']);
    controllers.controller('MainController',
        ['$scope', '$routeParams', '$route', 'MainService',
            function ($scope, $routeParams, $route, $MainService) {

                $scope.text = "";
                $scope.todos = $MainService.get();
                $scope.add = function () {
                    if (!$scope.text) {
                        return;
                    }
                    $MainService.add($scope.text);
                    $scope.text = '';
                };
                $scope.remove = $MainService.remove;
                $scope.clear = function () {

                    $scope.todos = $MainService.clear();
                };

                $scope.existCompleted = $MainService.existCompleted;

                $scope.currentEditingId = -1;
                $scope.editing = function (id) {
                    $scope.currentEditingId = id;
                };
                $scope.save = function () {
                    $scope.currentEditingId = -1;
                };

                $scope.toggleAll = $MainService.toggleAll;
                $scope.toggle = function () {
                    $MainService.save();
                };
                $scope.selector = {};

                var stauts = $routeParams.stauts;
                switch (stauts) {
                    case 'active':
                        $scope.selector = {completed: false};
                        break;
                    case 'completed':
                        $scope.selector = {completed: true};
                        break;
                    default:
                        $route.updateParams({stauts: ''});
                        $scope.selector = {};
                }

                $scope.equalCompare = function (source, target) {
                    /*console.log(source);
                     console.log(target);*/
                    return source == target;
                };
            }]);
})(angular);
