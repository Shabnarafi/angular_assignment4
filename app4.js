var myApp = angular.module("myApp",[]);
myApp.controller("myCtrl1",function($scope){
	

	$scope.content = "First Controller";
});

myApp.controller("myCtrl2",function($scope){

	$scope.content = "Second Controller";
});