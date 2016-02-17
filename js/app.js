(function (angular) {
    'use strict';
    angular.module('demoApp', ['ngMaterial'])
            
            .controller('calendarCtrl', function ($scope, $mdSidenav, $mdToast) {

                

                $scope.week_dates = [];
                $scope.today_date=moment(); 
                $scope.active_date = $scope.today_date;

                //initializing week dates
                for (var i = 0; i < 7; i++) {
                        $scope.week_dates[ i ]=moment().day( i );
                        }

                $scope.loadNextWeek = function(){
                        for (var i = 0; i < 7; i++) {
                            $scope.week_dates[ i ]=moment($scope.week_dates[ i ]).add(7, 'd');
                        }
                };

                $scope.loadPreviousWeek = function(){
                        for (var i = 0; i < 7; i++) {
                            $scope.week_dates[ i ]=moment($scope.week_dates[ i ]).subtract(7, 'd');
                        }
                };

                $scope.formatDate = function(date, format_given){
                    return moment(date).format(format_given); 
                }   

                $scope.isToday = function(date){
                    return moment(date).isSame($scope.today_date,"day");
                }

                $scope.loadEventsOfDay = function(date){
                    $scope.active_date = date;

                }
                


            });
})(window.angular);