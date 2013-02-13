var h

function composeURL(searchTerm) {
	return 'rae.html';
	return "http://lema.rae.es/drae/srv/search?val=" + searchTerm;
};

$(document).ready(function() {
	$("#search-form").on("submit", function(e) {
		e.preventDefault();
		var searchTerm = $("#search-term").val();
		$("#search-term").val("");
		var url = composeURL(searchTerm);

		$.get(url).done(function(data) {
			var html = $(data);
			//word = extractInformation(html);
			//console.log(data);
			h = html;
			//console.log(h.filter("div"));
			$("section").html(h.filter("div"));
			//output.html(renderTemplate(word));

			//console.log(html.find(".f").text())
		});
	});
});

// function extractInformation(html){
// 	return html;
// };
