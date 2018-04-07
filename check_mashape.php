<?php
require_once 'unirest_php_master/src/Unirest.php';
//Twitter//
// $response = Unirest\Request::get("https://e1yr-twitfeed-v1.p.mashape.com/feed.api?id=messi10stats",
//   array(
//     "X-Mashape-Key" => "o48jTP9vaQmsh1EFfINtWHzlJms3p1ldPynjsnfWRe4RVVF3BH",
//     "Accept" => "application/xml"
//   )
// );
//Masphape News
// $response = Unirest\Request::get("https://myallies-breaking-news-v1.p.mashape.com/news",
//   array(
//     "X-Mashape-Key" => "o48jTP9vaQmsh1EFfINtWHzlJms3p1ldPynjsnfWRe4RVVF3BH",
//     "Accept" => "application/json"
//   )
// );
//FootBAll Fixtures
// $response = Unirest\Request::get("https://myanmarunicorn-bhawlone-v1.p.mashape.com/competitions/36",
//   array(
//     "X-Mashape-Key" => "o48jTP9vaQmsh1EFfINtWHzlJms3p1ldPynjsnfWRe4RVVF3BH",
//     "Accept" => "application/JSON"
//   )
// );
$response = Unirest\Request::get("https://myanmarunicorn-bhawlone-v1.p.mashape.com/competitions/36/fixtures",
  array(
    "X-Mashape-Key" => "GXzMppn8w7mshLOXrbevPeYh7ixjp1whpMUjsnSTJ44Oh4N6G2",
    "Accept" => "application/json"
  )
);
// print_r($response);
$check= json_encode($response);
  print_r($check);
// echo '<script>console.log("'.$check.'")</script>';
 
?>