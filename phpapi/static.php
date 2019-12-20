<?php
// 1. get the content Id (here: an Integer) and sanitize it properly
$page = filter_input(INPUT_GET, 'page', FILTER_SANITIZE_URL);

// 2. get the content from a flat file (or API, or Database, or ...)
// $data = json_decode(file_get_contents('./posts/'. $id . '.json'));
$data->page = $page;
$data->name = "Alternative Antibes";
$data->title = "Antibes Sociale Citoyenne Ecologique";
$data->description = "Alternative pour Antibes Juan-les-Pins";
$data->image = "https://alternative-antibes.fr/assets/logo_1quad.png";


// 3. return the page
return makePage($data); 


function makePage($data) {
  // 1. get the page
  $pageUrl = "https://alternative-antibes.fr/" . $page;
  // 2. generate the HTML with open graph tags
  $html  = '<!doctype html>'.PHP_EOL;
  $html .= '<html>'.PHP_EOL;
  $html .= '<head>'.PHP_EOL;
  $html .= '<meta name="author" content="'.$data->name.'"/>'.PHP_EOL;
  $html .= '<meta property="og:title" content="'.$data->title.'"/>'.PHP_EOL;
  $html .= '<meta property="og:description" content="'.$data->description.'"/>'.PHP_EOL;
  $html .= '<meta property="og:image" content="'.$data->image.'"/>'.PHP_EOL;
  $html .= '<meta http-equiv="refresh" content="0;url='.$pageUrl.'">'.PHP_EOL;
  $html .= '</head>'.PHP_EOL;
  $html .= '<body></body>'.PHP_EOL;
  $html .= '</html>';
  // 3. return the page
  echo $html;
}