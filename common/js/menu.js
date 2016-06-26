app.controller('contentHeaderCtrl', function($scope) {
	$scope.bg = {
		backgroundImage: 'url(/menu/header.jpg)'
	}
	$scope.ja = 'お品書き';
	$scope.en = 'Menu';
});

app.controller('menuCtrl', function($scope) {
	$.getJSON('/menu/list.json', function(json) {
		$scope.menuList = json;
	});
});