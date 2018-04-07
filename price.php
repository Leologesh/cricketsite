<?php
require_once 'unirest_php_master/src/Unirest.php';
$response = Unirest\Request::get("https://price-api.datayuge.com/api/v1/compare/search/suggest?product=iphone&api_key= yrJFV6uU60LuYwnKB1x7BDQu9vGfXxcKfgN"
	// array(
 //    "Accept" => "application/JSON"
 //  )
);
  print_r($response);
 
?>