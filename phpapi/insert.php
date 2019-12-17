<?php
require 'connect.php';

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
  $ville         = mysqli_real_escape_string($con, trim($request->ville));
  $email        = mysqli_real_escape_string($con, trim($request->email));
  $telephone    = mysqli_real_escape_string($con, trim($request->telephone));
  $commentaire  = mysqli_real_escape_string($con, trim($request->commentaire));
    

  // Store.
  $sql = "INSERT INTO `signataires`(`prenom`,`nom`,`ville`,`email`,`telephone`,`commentaire`) VALUES ('{$prenom}','{$nom}','{$ville}','{$email}','{$telephone}','{$commentaire}')";

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