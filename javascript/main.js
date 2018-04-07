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
       var homeTeam={};
       var start={};
       var MatchType={};
       var match_name={};
       var vs = ' vs '
       var MatchAssociatedType={};
       var venue={};
       var home_score={};
       var away_score={};
       var series_id={};
       var matchSummaryText={};
  		  for(var i=0;i<total_list;i++){ 			 	
           if(response.matchList.matches[i].status=='UPCOMING' ){
	           		  // leo=(response.matchList.matches);
                  leo.push({id:response.matchList.matches[i].id,series_id:response.matchList.matches[i].series.id, series_name:response.matchList.matches[i].series.shortName,name:response.matchList.matches[i].name ,awayTeam:response.matchList.matches[i].awayTeam.shortName,homeTeam:response.matchList.matches[i].homeTeam.shortName,start:response.matchList.matches[i].localStartDate + ' ' + response.matchList.matches[i].localStartTime ,match_name:response.matchList.matches[i].awayTeam.shortName.concat(vs).concat(response.matchList.matches[i].homeTeam.shortName),MatchType:response.matchList.matches[i].cmsMatchType,MatchAssociatedType:response.matchList.matches[i].cmsMatchAssociatedType,venue:response.matchList.matches[i].venue.name});
                     // console.log(response.matchList.matches[i].id);
   	     }
             else if(response.matchList.matches[i].status=='COMPLETED' ){
                  // leo=(response.matchList.matches);
                  completedMatches.push({id:response.matchList.matches[i].id,home_score:response.matchList.matches[i].scores.homeScore 
                 ,away_score:response.matchList.matches[i].scores.awayScore ,series_id:response.matchList.matches[i].series.id, series_name:response.matchList.matches[i].series.shortName,name:response.matchList.matches[i].name ,awayTeam:response.matchList.matches[i].awayTeam.shortName,homeTeam:response.matchList.matches[i].homeTeam.shortName,start:response.matchList.matches[i].localStartDate + ' ' + response.matchList.matches[i].localStartTime,match_name:response.matchList.matches[i].awayTeam.shortName.concat(vs).concat(response.matchList.matches[i].homeTeam.shortName),MatchType:response.matchList.matches[i].cmsMatchType,MatchAssociatedType:response.matchList.matches[i].cmsMatchAssociatedType,venue:response.matchList.matches[i].venue.name,matchSummaryText:response.matchList.matches[i].matchSummaryText});
                     // console.log(response.matchList.matches[i].id);
        }

          else if(response.matchList.matches[i].status=='INPROGRESS' || response.matchList.matches[i].status=='LIVE'  ){
                 // if(response.matchList.matches[i].hasOwnProperty(scores)){
              if(response.matchList.matches[i].hasOwnProperty('scores')){ 
                    // console.log("check");
                 
                  live_matches.push({id:response.matchList.matches[i].id,home_score:response.matchList.matches[i].scores.homeScore,
                    away_score:response.matchList.matches[i].scores.awayScore ,series_id:response.matchList.matches[i].series.id ,series_name:response.matchList.matches[i].series.shortName,name:response.matchList.matches[i].name ,awayTeam:response.matchList.matches[i].awayTeam.shortName,homeTeam:response.matchList.matches[i].homeTeam.shortName,start:response.matchList.matches[i].localStartDate + ' ' + response.matchList.matches[i].localStartTime,match_name:response.matchList.matches[i].awayTeam.shortName + (vs) +response.matchList.matches[i].homeTeam.shortName,MatchType:response.matchList.matches[i].cmsMatchType,MatchAssociatedType:response.matchList.matches[i].cmsMatchAssociatedType,venue:response.matchList.matches[i].venue.name});
                
                     // console.log(response.matchList.matches[i].id);
          }
        
         }


        }	
          upcoming_matches={result:leo};
         // upcoming_matches.push(leo);
         var completedMatches1={result:completedMatches};
         var live_matches1={result:live_matches};
         // console.log(upcoming_matches);
         console.log(completedMatches1);
          console.log(live_matches1);

        var upcoming_matches_length=upcoming_matches.result.length;
        // console.log(upcoming_matches_length);
          var mname='';
          var home_score_name='';
          var away_score_name='';
          var match_id='';
          var seriesname='';
          var start_date='';
          var seriesid='';

         var live_matches_length=live_matches1.result.length;
         var upcoming_matches_length=upcoming_matches.result.length;
         var completedMatches_length=completedMatches1.result.length;
         console.log(live_matches_length);
         var matchsummary='';
         var match=0;
        if(match<3){
            if(((live_matches_length>=3))){
            for (var i = 0; i <3 ; i++) {
          
               mname=live_matches1.result[i].match_name;
               home_score_name=live_matches1.result[i].homeTeam +'  '+ live_matches1.result[i].home_score;
               away_score_name=live_matches1.result[i].awayTeam +'  '+ live_matches1.result[i].away_score;
               var score=home_score_name + ' && ' + away_score_name;
               match_id=live_matches1.result[i].id;
               seriesid=live_matches1.result[i].series_id;
               var series_name1="<div class='rca-column-4 live_score'><div class='rca-menu-widget rca-live-season rca-left-border scores_link'><a  data-id="+match_id+" data-value="+seriesid+" class='rca-padding'><span class='rca-match-title rca-live-text'>"+mname+"</span><span class='rca-match-score rca-live-label'> "+score+"</span></div></div>";
               $('.livescores').append(series_name1); 
                 
              }
               
            } else if(((live_matches_length)>1) && ((live_matches_length)<3)){
           
               
               for (var j = 0; j <= 1; j++) {
               mname=live_matches1.result[j].match_name;
               home_score_name=live_matches1.result[j].homeTeam +'  '+ live_matches1.result[j].home_score;
               away_score_name=live_matches1.result[j].awayTeam +'  '+ live_matches1.result[j].away_score;
               var score=home_score_name + ' && ' + away_score_name;
               match_id=live_matches1.result[j].id;
               seriesid=live_matches1.result[j].series_id;
               var series_name1="<div class='rca-column-4 live_score'><div class='rca-menu-widget rca-live-season rca-left-border'><a  data-id="+match_id+" data-value="+seriesid+" class='rca-padding'><span class='rca-match-title rca-live-text'>"+mname+"</span><span class='rca-match-score rca-live-label'> "+score+"</span></div></div>";
               $('.livescores').append(series_name1); 
               }
                      for (var j = 0; j < 1; j++) {

               mname=completedMatches1.result[j].match_name;
               home_score_name=completedMatches1.result[j].homeTeam +'  '+ completedMatches1.result[j].home_score;
               away_score_name=completedMatches1.result[j].awayTeam +'  '+ completedMatches1.result[j].away_score;
               match_id=completedMatches1.result[j].id;
               seriesid=completedMatches1.result[j].series_id;
               matchsummary=completedMatches1.result[j].matchSummaryText;
                 var series_name1="<div class='rca-column-4 live_score'><div class='rca-menu-widget rca-live-season rca-left-border'><a  data-id="+match_id+" data-value="+seriesid+" class='rca-padding'><span class='rca-match-title rca-live-text'>"+mname+"</span><span class='rca-match-score rca-live-label'> "+matchsummary+"</span></div></div>";
               $('.livescores').append(series_name1);    
                          

              }   

          }
              else if(((live_matches_length)>=1) && ((live_matches_length)<2)){
                
               for (var j = 0; j < 1; j++) {
               mname=live_matches1.result[j].match_name;
               home_score_name=live_matches1.result[j].homeTeam +'  '+ live_matches1.result[j].home_score;
               away_score_name=live_matches1.result[j].awayTeam +'  '+ live_matches1.result[j].away_score;
               var score=home_score_name + ' && ' + away_score_name;
               match_id=live_matches1.result[j].id;
               seriesid=live_matches1.result[j].series_id;
               var series_name1="<div class='rca-column-4 live_score'><div class='rca-menu-widget rca-live-season rca-left-border scores_link'><a  data-id="+match_id+" data-value="+seriesid+" class='rca-padding'><span class=' rca-match-title rca-live-text'>"+mname+"</span><span class='rca-match-score rca-live-label'> "+score+"</span></div></div>";
               $('.livescores').append(series_name1); 
               }
                      for (var j = 0; j <= 1; j++) {

               mname=completedMatches1.result[j].match_name;
               home_score_name=completedMatches1.result[j].homeTeam +'  '+ completedMatches1.result[j].home_score;
               away_score_name=completedMatches1.result[j].awayTeam +'  '+ completedMatches1.result[j].away_score;
               match_id=completedMatches1.result[j].id;
               seriesid=completedMatches1.result[j].series_id;
               matchsummary=completedMatches1.result[j].matchSummaryText;
                 var series_name1="<div class='rca-column-4 completed_scores '><div class='rca-menu-widget  rca-left-border'><a  data-id="+match_id+" data-value="+seriesid+" class='rca-padding'><span class='rca-match-title rca-live-text'>"+mname+"</span><span class='rca-match-score '> "+matchsummary+"</span></div></div>";
               $('.livescores').append(series_name1);    
                          

              }   


              } 
              else{
                    for (var j = 0; j <= 2; j++) {

               mname=completedMatches1.result[j].match_name;
               home_score_name=completedMatches1.result[j].homeTeam +'  '+ completedMatches1.result[j].home_score;
               away_score_name=completedMatches1.result[j].awayTeam +'  '+ completedMatches1.result[j].away_score;
               match_id=completedMatches1.result[j].id;
               seriesid=completedMatches1.result[j].series_id;
               matchsummary=completedMatches1.result[j].matchSummaryText;
                 var series_name1="<div class='rca-column-4 completed_scores'><div class='rca-menu-widget '><a  data-id="+match_id+" data-value="+seriesid+" class='rca-padding'><span class='rca-match-title '>"+mname+"</span><span class='rca-match-score '> "+matchsummary+"</span></div></div>";
               $('.livescores').append(series_name1);    
                          

              }                   
              }
          
             match++;  
            //  if((completedMatches_length)!=0){

         

            // }

              
             // 
     }
    
  	});
		
});
