$('form').on('submit', function(event){
	event.preventDefault();
	var key = 'E4S7BdCA'
	var input = $('#search').val().split(' ').join('-');
	var url = 'https://www.rijksmuseum.nl/api/pages/en/rijksstudio/artists/' + input + '?key=' + key + '&format=json';
	
	$.ajax({
		url: url,

		success: function(data){
			var works = data.contentPage.artObjectSet;
			$('.images').html('');
			$('.images').append('<ul></ul>');

			works.forEach(function(val){
				var url = 'https://www.rijksmuseum.nl/api/en/collection/' + val + '?key=' + key + '&format=json'
				
				$.ajax({
					url: url,

					success: function(data){
						$('ul').append('<img src="' + data.artObject.webImage.url + '" >');
					}
				})
			})
		}
	})

})

