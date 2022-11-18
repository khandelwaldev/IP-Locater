var app = angular.module('ipLocation', [])
                  .controller('ipapiCtrl', function($scope, $http){
                    $scope.getJSON = function() {
                      var search = $("#search").val();
                      $http.get('https://ipapi.co/'+ search + '/json/')
                        .then(function(response){ 
                          $scope.city = response.data.city; 
                          $scope.region = response.data.region;
                          $scope.country = response.data.country_name
                          
                          $scope.calling_code = response.data.country_calling_code;
                          $scope.currency = response.data.currency;
                        });
                    }
                })
