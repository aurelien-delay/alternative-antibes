<?php
require 'connect.php';
ini_set('display_errors', 1);

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);
	
  // Validate.
  if(trim($request->nom) === '' || trim($request->prenom) === '')
  {
    return http_response_code(400);
  }
	
  // Sanitize.
  $prenom       = mysqli_real_escape_string($con, trim($request->prenom));
  $nom          = mysqli_real_escape_string($con, trim($request->nom));
  $ville        = mysqli_real_escape_string($con, trim($request->ville));
  $email        = mysqli_real_escape_string($con, trim($request->email));
  $telephone    = mysqli_real_escape_string($con, trim($request->telephone));
  $propositions = mysqli_real_escape_string($con, trim($request->propositions));
  $commentaire  = mysqli_real_escape_string($con, trim($request->commentaire));
  $remarque     = mysqli_real_escape_string($con, trim($request->remarque));
  $militer      = "non";
  $candidat     = "non";
  $comité       = "non";
  if ( filter_var($request->militer,  FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE) ) { $militer   = "oui"; }
  if ( filter_var($request->candidat, FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE) ) { $candidat  = "oui"; }
  if ( filter_var($request->comité,   FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE) ) { $comité    = "oui"; }
    

  // Store.
  $sql = "INSERT INTO `contacts`(`prenom`,`nom`,`ville`,`email`,`telephone`,`propositions`,`commentaire`,`militer`,`candidat`,`comité`,`remarque`) 
          VALUES ('{$prenom}','{$nom}','{$ville}','{$email}','{$telephone}', '{$propositions}', '{$commentaire}', '{$militer}', '{$candidat}', '{$comité}' ,'{$remarque}')";

  // Send mail
  $to = 'aurelien.delay@gmail.com'; // note the comma
  $subject = $prenom . ' ' . $nom . ' nous a contacté';
  
  $message = '
  <html>
  <head>
    <title>Nouveau contact</title>
  </head>
  <body>
    <p>Infos:<p>
    <p>' .  $prenom . ' ' . $nom . '</p>
    <p>ville ' .  $ville . '</p>
    <p>email ' .  $email . '</p>
    <p>telephone ' .  $telephone . '</p>
    <p>propositions</p>
    <blockquote>' . $propositions . '</blockquote>
    <p>commentaire</p>
    <blockquote>' . $commentaire . '</blockquote>
    <p>soutien</p>
    <p>militer: ' . $militer . ', être candidat·e: ' . $candidat . ', comité de soutien: ' . $comité . '</p>
    <p>remarque</p>
    <blockquote>' . $remarque . '</blockquote>
  </body>
  </html>
  ';
  
  // To send HTML mail, the Content-type header must be set
  $headers[] = 'MIME-Version: 1.0';
  $headers[] = 'Content-type: text/html; charset=iso-8859-1';

  // Additional headers
  $headers[] = 'To: Aurelien Delay <aurelien.delay@gmail.com>';
  $headers[] = 'From: Alternative Antibes Juan-les-Pins <contact@alternative-antibes.fr>';

  // Mail it
  $success = mail($to, $subject, $message, implode("\r\n", $headers));
  echo $success;
  if (!$success) {
    $errorMessage = error_get_last()['message'];
    echo $errorMessage;
  }

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    // no return of data needed
    /*
    $car = [
      'model' => $model,
      'price' => $price,
      'id'    => mysqli_insert_id($con)
    ];
    echo json_encode(['data'=>$car]);
    */
  }
  else
  {
    http_response_code(422);
  }
}