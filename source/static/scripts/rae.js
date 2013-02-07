var h;

function composeURL(searchTerm) {
	return 'rae.html';
	return "http://lema.rae.es/drae/srv/search?val=" + searchTerm;
}

function extractInformation(html){
	var html = $(html);
	h.find(".f").text();
	h.find(".q .a");
	h.find(".q .d");
	h.find(".q .b");
	console.log(extractInformation);

	//return {"term": "hola",
	//				"definition": "saludo"}
};

$(document).ready(function() {
	$("#search-form").on("submit", function(e) {
		e.preventDefault();
		var searchTerm = $("#search-term").val();
		$("#search-term").val("");
		var url = composeURL(searchTerm);

		$.get(url).done(function(data) {
			var html = $(data);
			console.log(data);
			h = html;
			word = extractInformation(data);
			//output.html(renderTemplate(word));
		});
	});
});
