app.controller('contentHeaderCtrl', function($scope) {
	$scope.bg = {
		backgroundImage: 'url(/reserve/header.jpg)'
	}
	$scope.ja = 'ご案内';
	$scope.en = 'Reservation';
});

app.controller('reserveCtrl', function($scope) {
	$scope.today = `${now.y}-${zero(now.m)}-${zero(now.d)}`;
	const nY = now.m >= 12 ? now.y + 1 : now.y;
	const nM = now.m >= 12 ? 1 : now.m + 1
	$scope.max = `${nY}-${zero(nM)}-${zero(getMonthLen(nM, nY))}`;
	$scope.mailto = function(e) {

	}
});