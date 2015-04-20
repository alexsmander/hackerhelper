var hackerApp = angular.module('hackerApp', []);
hackerApp.controller('langCtrl', function ($scope) {
	$scope.htmlLang = [
		{
			'name': ':active',
			'url': '../test.html'
		}, {
			'name': '::after (:after)',
			'url': '../test.html'
		}, {
			'name': 'align-content',
			'url': '../test.html'
		}, {
			'name': 'align-self',
			'url': '../test.html'
		}, {
			'name': 'all',
			'url': '../test.html'
		}, {
			'name': '<angle>',
			'url': '../test.html'
		}, {
			'name': 'animation',
			'url': '../test.html'
		}, {
			'name': 'animation-delay',
			'url': '../test.html'
		}, {
			'name': 'animation-direction',
			'url': '../test.html'
		}, {
			'name': 'animation-duration',
			'url': '../test.html'
		}
	];
	$scope.cssLang = [
		{
			name: ':active',
			url: '../test.html',
			desc: "CSS background properties are used to define the background effects of an element.",
			descSub: "CSS properties used for background effects:",
			prop: [
				'background-color', 
				'background-image', 
				'background-repeat', 
				'background-attachment', 
				'background-position',
				'background-clip', 
				'background-origin'
			],
			code: [

			]
		}, {
			'name': '::after (:after)',
			'url': '../test.html'
		}, {
			'name': 'align-content',
			'url': '../test.html'
		}, {
			'name': 'align-self',
			'url': '../test.html'
		}, {
			'name': 'all',
			'url': '../test.html'
		}, {
			'name': '<angle>',
			'url': '../test.html'
		}, {
			'name': 'animation',
			'url': '../test.html'
		}, {
			'name': 'animation-delay',
			'url': '../test.html'
		}, {
			'name': 'animation-direction',
			'url': '../test.html'
		}, {
			'name': 'animation-duration',
			'url': '../test.html'
		}
	];
	$scope.sassLang = [
		{
			'name': 'z-index',
			'url': '../test.html'
		},{
			'name': 'preprocessing',
			'url': '../test.html'
		}, {
			'name': 'variables',
			'url': '../test.html'
		}, {
			'name': 'nesting',
			'url': '../test.html'
		}, {
			'name': 'partials',
			'url': '../test.html'
		}, {
			'name': 'import',
			'url': '../test.html'
		}, {
			'name': 'mixins',
			'url': '../test.html'
		}, {
			'name': 'inheritence',
			'url': '../test.html'
		}, {
			'name': 'operators',
			'url': '../test.html'
		}
	];
	$scope.jsLang = [
		{
			'name': ':active',
			'url': '../test.html'
		}, {
			'name': '::after (:after)',
			'url': '../test.html'
		}, {
			'name': 'align-content',
			'url': '../test.html'
		}, {
			'name': 'align-self',
			'url': '../test.html'
		}, {
			'name': 'all',
			'url': '../test.html'
		}, {
			'name': '<angle>',
			'url': '../test.html'
		}, {
			'name': 'animation',
			'url': '../test.html'
		}, {
			'name': 'animation-delay',
			'url': '../test.html'
		}, {
			'name': 'animation-direction',
			'url': '../test.html'
		}, {
			'name': 'animation-duration',
			'url': '../test.html'
		}
	];
	$scope.jqLang = [
		{
			'name': ':active',
			'url': '../test.html'
		}, {
			'name': '::after (:after)',
			'url': '../test.html'
		}, {
			'name': 'align-content',
			'url': '../test.html'
		}, {
			'name': 'align-self',
			'url': '../test.html'
		}, {
			'name': 'all',
			'url': '../test.html'
		}, {
			'name': '<angle>',
			'url': '../test.html'
		}, {
			'name': 'animation',
			'url': '../test.html'
		}, {
			'name': 'animation-delay',
			'url': '../test.html'
		}, {
			'name': 'animation-direction',
			'url': '../test.html'
		}, {
			'name': 'animation-duration',
			'url': '../test.html'
		}
	];
});