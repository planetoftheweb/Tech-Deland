(function () {
	$.getJSON('_/components/data/socialmedia.json', function(data) {
		var myTemplate = _.template($('#socialicons_tmp').html());
		$(".socialmediaicons").html(myTemplate(data));
	});//getJSON
})(); //immediate function