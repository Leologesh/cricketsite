

	$(document).ready(function() {
	var apiKey = "o48jTP9vaQmsh1EFfINtWHzlJms3p1ldPynjsnfWRe4RVVF3BH";
	var settings = {
 	 "async": true,
  	"crossDomain": true,
  	"dataType": "json",
 	 "url": "https://dev132-cricket-live-scores-v1.p.mashape.com/matchseries.php?seriesid=2056",
  		"method": "GET",
  	"headers": {
   		 "X-Mashape-Key" : apiKey,
    		"Accept" : "application/json"
 			 }
	}   
		$.ajax(settings).done(function (response) {


		});
  });

