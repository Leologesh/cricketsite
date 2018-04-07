	$(document).ready(function() {
	var apiKey = "o48jTP9vaQmsh1EFfINtWHzlJms3p1ldPynjsnfWRe4RVVF3BH";
	var settings = {
 	 "async": true,
  	"crossDomain": true,
  	"dataType": "json",
 	 "url": "https://dev132-cricket-live-scores-v1.p.mashape.com/matches.php",
  		"method": "GET",
  	"headers": {
   		 "X-Mashape-Key" : apiKey,
    		"Accept" : "application/json"
 			 }
	}   
  var upcoming_matches= '';
		$.ajax(settings).done(function (response) {
  		var total_list = response.matchList.matches.length;
  		console.log(response);
       var live_matches=[];
       var completedMatches=[];
       var leo=[];
       var id={};
       var series_name={};
       var awayTeam={};
       var awayTeam={};
       var start={};
       var MatchType={};
       var matchname={};
       var vs = ' vs '
       var MatchAssociatedType={};
       var venue={};
       var series_id={};
  		  for(var i=0;i<total_list;i++){ 			 	
           if(response.matchList.matches[i].status=='UPCOMING' ){
	           		  // leo=(response.matchList.matches);
                  leo.push({id:response.matchList.matches[i].id,series_id:response.matchList.matches[i].series.id, series_name:response.matchList.matches[i].series.shortName,name:response.matchList.matches[i].name ,awayTeam:response.matchList.matches[i].awayTeam.shortName,homeTeam:response.matchList.matches[i].homeTeam.shortName,start:response.matchList.matches[i].localStartDate + ' ' + response.matchList.matches[i].localStartTime ,match_name:response.matchList.matches[i].awayTeam.shortName.concat(vs).concat(response.matchList.matches[i].homeTeam.shortName),MatchType:response.matchList.matches[i].cmsMatchType,MatchAssociatedType:response.matchList.matches[i].cmsMatchAssociatedType,venue:response.matchList.matches[i].venue.name});
                     // console.log(response.matchList.matches[i].id);
   	     }
             else if(response.matchList.matches[i].status=='COMPLETED' ){
                  // leo=(response.matchList.matches);
                  completedMatches.push({id:response.matchList.matches[i].id,series_id:response.matchList.matches[i].series.id, series_name:response.matchList.matches[i].series.shortName,name:response.matchList.matches[i].name ,awayTeam:response.matchList.matches[i].awayTeam.shortName,homeTeam:response.matchList.matches[i].homeTeam.shortName,start:response.matchList.matches[i].localStartDate + ' ' + response.matchList.matches[i].localStartTime,match_name:response.matchList.matches[i].awayTeam.shortName.concat(vs).concat(response.matchList.matches[i].homeTeam.shortName),MatchType:response.matchList.matches[i].cmsMatchType,MatchAssociatedType:response.matchList.matches[i].cmsMatchAssociatedType,venue:response.matchList.matches[i].venue.name});
                     // console.log(response.matchList.matches[i].id);
        }

          else if(response.matchList.matches[i].status=='LIVE' ){
                  // leo=(response.matchList.matches);
                  live_matches.push({id:response.matchList.matches[i].id,series_id:response.matchList.matches[i].series.id ,series_name:response.matchList.matches[i].series.shortName,name:response.matchList.matches[i].name ,awayTeam:response.matchList.matches[i].awayTeam.shortName,homeTeam:response.matchList.matches[i].homeTeam.shortName,start:response.matchList.matches[i].localStartDate + ' ' + response.matchList.matches[i].localStartTime,match_name:response.matchList.matches[i].awayTeam.shortName.concat(vs).concat(response.matchList.matches[i].homeTeam.shortName),MatchType:response.matchList.matches[i].cmsMatchType,MatchAssociatedType:response.matchList.matches[i].cmsMatchAssociatedType,venue:response.matchList.matches[i].venue.name});
                     // console.log(response.matchList.matches[i].id);
         }


        }	
          upcoming_matches={result:leo};
         // upcoming_matches.push(leo);
         var completedMatches1={result:completedMatches};
         var live_matches1={result:live_matches};
         // console.log(upcoming_matches);
         // console.log(completedMatches1);
         // console.log(live_matches1);

        var upcoming_matches_length=upcoming_matches.result.length;
        // console.log(upcoming_matches_length);
          var mname='';
          var upcoming_end='';
          var match_id='';
          var seriesname='';
          var start_date='';
          var seriesid='';
          var venue= '';
        for (var i = 0; i < upcoming_matches_length; i++) {
           if(upcoming_end<15){
            mname=upcoming_matches.result[i].match_name + ' ' + upcoming_matches.result[i].name ;
            match_id=upcoming_matches.result[i].id; 
            seriesname=upcoming_matches.result[i].series_name;
            start_date=upcoming_matches.result[i].start;
            seriesid=upcoming_matches.result[i].series_id;
            venue=upcoming_matches.result[i].venue;
           var shedule_content="<thead><th  class='active'>"+start_date+"</th></thead><tbody><tr><td> "+seriesname+"</td> <td>"+mname+"</td><td>"+venue+"</td></tr></tbody>";              
            $('.table').append(shedule_content);

          }
            upcoming_end++;
        }

    
  	});
		
});
