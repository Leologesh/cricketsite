$(document).ready(function() {

var apiKey = "o48jTP9vaQmsh1EFfINtWHzlJms3p1ldPynjsnfWRe4RVVF3BH";

var settings = {
"async": true,
"crossDomain": true,
"dataType": "json",
"url": "https://dev132-cricket-live-scores-v1.p.mashape.com/match.php?matchid=41088&seriesid=1964",
  "method": "GET",
"headers": {
   "X-Mashape-Key" : apiKey,
    "Accept" : "application/json"
   }
}
$.ajax(settings).done(function (response) {
              console.log(response);
               var match_name= response.match.name;
               var series_name=response .match.series.name;
               var match_type =response .match.cmsMatchType;
               var cmsMatchStartDate =response .match.cmsMatchStartDate;
               var venue =response .match.venue.name;

               $('.rca-live-label,.match ').html(match_name);
               $('.series_name ').html(series_name);
               $('.match_type ').html(match_type);
               $('.venue ').html(venue);
               $('.cmsMatchStartDate ').html(cmsMatchStartDate);

     });

   var apiKey = "o48jTP9vaQmsh1EFfINtWHzlJms3p1ldPynjsnfWRe4RVVF3BH";

var settings = {
"async": true,
"crossDomain": true,
"dataType": "json",
"url": "https://dev132-cricket-live-scores-v1.p.mashape.com/scorecards.php?seriesid=1964&matchid=41088",

  "method": "GET",
"headers": {
   "X-Mashape-Key" : apiKey,
    "Accept" : "application/json"
   }
}
$.ajax(settings).done(function (response) {
              console.log(response);
              var innings_length=response.fullScorecard.innings.length;
              var batsmen_length=response.fullScorecard.innings[0].batsmen.length;
                console.log(batsmen_length);
                for (var j = 0; j < batsmen_length; j++) {
                  if(response.fullScorecard.innings[0].batsmen[j].howOut=="not out"){
                   var not_out_batsmen_name=(response.fullScorecard.innings[0].batsmen[j].name);
                   var not_out_batsmen_runs=(response.fullScorecard.innings[0].batsmen[j].runs);
                   var not_out_batsmen_balls=(response.fullScorecard.innings[0].batsmen[j].balls);
                   console.log(not_out_batsmen_name + not_out_batsmen_runs);
               }
             }
             var run=response.fullScorecard.innings[0].run;

             console.log(run);
             var wicket=response.fullScorecard.innings[0].wicket;
             var over=response.fullScorecard.innings[0].over;
             var current_batting=response.fullScorecard.innings[0].team.shortName;
             var rr=response.fullScorecard.innings[0].requiredRunRate;







         });

});
