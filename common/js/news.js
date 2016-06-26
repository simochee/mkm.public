app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {
		template: '<h1>Root</h1>'
	})
	.when('/post', {
		template: '<h1>post</h1>'
	})
	.otherwise({
		redirectTo: '/'
	});
}]);

app.controller('contentHeaderCtrl', function($scope) {
	$scope.bg = {
		backgroundImage: 'url(/news/header.jpg)'
	}
	$scope.ja = 'おしらせ';
	$scope.en = 'News';
});

app.controller('newsCtrl', function($scope) {
	// カテゴリリスト・アーカイブリスト取得
	$.getJSON('/news/data-list.json', function(json) {
		$.getJSON('/common/json/shop-open.json', function(data) {
			const month = data[`${now.y}-${zero(now.m)}`];
			const isHol = ~month.holiday.indexOf(now.d);
			if(isHol) {
				$scope.open = 'holiday';
			} else {
				const isCls = ~month.close.indexOf(now.d);
				if(isCls) {
					$scope.open = 'close';
				} else {
					$scope.open = 'normal';
				}
			}
		});
		$scope.data = json;
	});
});