<?php
require_once 'unirest_php_master/src/Unirest.php';
$response = Unirest\Request::get("https://dev132-cricket-live-scores-v1.p.mashape.com/matches.php",
  array(
    "X-Mashape-Key" => "o48jTP9vaQmsh1EFfINtWHzlJms3p1ldPynjsnfWRe4RVVF3BH",
    "Accept" => "application/json"
  )
);


?>