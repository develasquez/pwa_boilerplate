define(function (require) {
	var SERVER_ENDPOINT = "http://localhost:3000";
	var _get = function (url) {
		return new Promise(function (resolve, reject) {
			$.ajax({
				url: url,
				dataType: "json",
				type: "GET",
				contentType: "application/json; charset=utf-8",
				success: function (data) {
					resolve(data);
				}
			});
		});
	};
	var get = function (id) {
		var url = SERVER_ENDPOINT + "/method/" + id + ".json";
		return _get(url);
	};
	return {
		get: get
	};

})