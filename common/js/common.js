var app = angular.module('myapp', ['ngRoute']);

app.controller('appCtrl', function($scope) {
	$scope.pageTitleSub = '村村村（むらからむら）'
	$scope.globalNavbar = '/common/tmp/global_header.html';
	$scope.globalFooter = '/common/tmp/global_footer.html';
	$.getJSON('/common/json/global-menu.json', function(json) {
		$scope.globalMenu = json;
	});
	$scope.contentHeader = '/common/tmp/content_header.html';
});


const d = new Date();
const now = {
	y: d.getFullYear(),
	m: d.getMonth() + 1,
	d: d.getDate(),
	w: d.getDay(),
	h: d.getHours(),
	i: d.getMinutes(),
	s: d.getSeconds()
}

function getMonthLen(m = now.m, y = now.y) {
	return ~[1,3,5,7,8,10,12].indexOf(m) ? 31 :
		   ~[4,6,9,11].indexOf(m) ? 30 :
		   y % 4 == 0 || (y % 100 == 0 && y % 400 != 0) ? 29 : 28;
}

function getCal(m = now.m, y = now.y) {
	if(m > 12) {
		m -= 12;
		y++;
	}
	const days = getMonthLen(m, y);
	const start = new Date(`${y}-${zero(m)}-01`).getDay();
	let day = 0;
	let json = [];
	{
		let json_tmp = [];
		for(let i=0; i<start; i++) {
			json_tmp.push('');
		}
		for(let i=0; i<7-start; i++) {
			day++;
			json_tmp.push(day);
		}
		json.push(json_tmp);
	}
	for(let end=true; end; ) {
		let json_tmp = [];
		for(let i=0; i<7 && end; i++) {
			day++;
			json_tmp.push(day);
			if(day >= days) {
				end = false;
				for(let j=0; j<6-i; j++) {
					json_tmp.push('');
				}
			}
		}
		json.push(json_tmp);
	}
	return json;
}

function zero(n, l = 2) {
	return ('0000000000' + n).slice(-l);
}