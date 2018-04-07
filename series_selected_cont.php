<?php
require_once 'unirest_php_master/src/Unirest.php';
// $series_id=$_REQUEST['series_id'];
$response = Unirest\Request::get("https://dev132-cricket-live-scores-v1.p.mashape.com/matchseries.php?seriesid=2056",
  array(
    "X-Mashape-Key" => "qoDDUxATMumshd1yXi5NLZ0yOzMup1oL6DwjsnXPeha0Sbocue",
    "X-Mashape-Host" => "dev132-cricket-live-scores-v1.p.mashape.com",
   	 "Accept" => "application/json"
  )
);
print_r($response);
?>

