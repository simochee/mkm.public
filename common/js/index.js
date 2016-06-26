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
	const winH = $(window).height();
	$scope.windowHeight = { height: `${winH}px` };
});

app.controller('recommendCtrl', function($scope) {
	$.getJSON('/index/m-recommend.json', function(json) {
		const data = json[`${now.y}-${zero(now.m)}`];
		$scope.rec = data;
	});
});

app.controller('calendarCtrl', function($scope) {
	$.getJSON('/common/json/shop-open.json', function(json) {
		setHoliday(now.y, now.m);
		setHoliday(
			now.m >= 12 ? now.y + 1 : now.y,
			now.m >= 12 ? 1 : now.m + 1
		);
		function setHoliday(y, m) {
			const data = json[`${y}-${zero(m)}`];
			if(data != undefined && data.active == true) {
				const holiday = data.holiday;
				const close = data.close;
				for(let i=0, len=holiday.length; i<len; i++) {
					$(`#oc${now.y}${now.m}${holiday[i]}`).addClass('holiday');
				}
				for(let i=0, len=close.length; i<len; i++) {
					$(`#oc${now.y}${now.m}${close[i]}`).addClass('close');
				}
			} else {
				$(`#oc${y}${m}`).addClass('undetermined');
			}
		}
	});
	$scope.monthThis = getCal();
	$scope.monthNext = getCal(now.m + 1);
	$scope.year = now.y;
	$scope.nYear = now.m >= 12 ? now.y + 1 : now.y;
	$scope.month = now.m;
	$scope.nMonth = now.m >= 12 ? 1 : now.m + 1;
	$scope.showMonth = 'this';
	$scope.toggleMonth = function() {
		$scope.showMonth = $scope.showMonth == 'this' ? 'next' : 'this';
	}
});