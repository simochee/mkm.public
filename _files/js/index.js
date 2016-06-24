app.controller('indexHeaderCtrl', function($scope) {
	// $.getJSON('/_files/json/index_header.json');
	$scope.headerImg = ['idx-pic1.jpg', 'idx-pic2.jpg', 'idx-pic3.jpg'];
	$scope.leftNav = [
		{ name: '村村村のこだわり', link: '#' },
		{ name: 'お品書き', link: '/menu' },
		{ name: '店舗情報', link: '/shop' }
	];
	$scope.rightNav = [
		{ name: 'おしらせ', link: '/news' },
		{ name: 'お得な情報', link: '#' },
		{ name: 'ご予約', link: '/reserve' }
	];
});

app.controller('recommendCtrl', function($scope) {
	$scope.img = '/menu/pics/menu_id005.jpg';
	$scope.name = '焼き物盛り合わせ';
	$scope.price = '480';
	$scope.comment = '定番のイカゲソ・アスパラ豚巻き・玉子焼きの盛り合わせです。';
});

app.controller('calendarCtrl', function($scope) {
	$scope.monthThis = getCal();
	$scope.monthNext = getCal(now.m + 1);
});