var monthArray = new Array(12);
monthArray[0] = "Jan";
monthArray[1] = "Feb";
monthArray[2] = "Mar";
monthArray[3] = "Apr";
monthArray[4] = "May";
monthArray[5] = "Jun";
monthArray[6] = "Jul";
monthArray[7] = "Aug";
monthArray[8] = "Sep";
monthArray[9] = "Oct";
monthArray[10] = "Nov";
monthArray[11] = "Dec";

if (typeof Vue != 'undefined') {
	Vue.filter('englishMonth', function(value) {
		return monthArray[value - 1];
	})
}

var getQueryString = function(key) {
	var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
	var result = window.location.search.substr(1).match(reg);
	return result ? decodeURIComponent(result[2]) : null;
}
