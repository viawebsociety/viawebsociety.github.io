angular.module('indexApp', [])
	.controller('IndexController', ['$scope', function($scope){
		$scope.languages = [
			{name: "C", category:"Software"},
			{name: "C#", category:"Software" },
			{name: "Java", category:"Software"},
			{name: "Javascript", category:"Web"},
			{name: "HTML5/CSS3", category:"Web"},
			{name: "NodeJS", category:"Web" }
		];
	}]);