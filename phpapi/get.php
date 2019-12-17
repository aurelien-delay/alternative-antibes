<?php
/**
 * Returns the list of signataires.
 */
require 'connect.php';
    
$signataires = [];
$sql = "SELECT prenom, nom, ville, email, telephone, commentaire FROM signataires";

if($result = mysqli_query($con,$sql))
{
  $index = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $signataires[$index]['prenom']      = $row['prenom'];
    $signataires[$index]['nom']         = $row['nom'];
    $signataires[$index]['ville']       = $row['ville'];
    $signataires[$index]['email']       = $row['email'];
    $signataires[$index]['telephone']   = $row['telephone'];
    $signataires[$index]['commentaire'] = $row['commentaire'];
    $index++;
  }
    
  echo json_encode(['data'=>$signataires]);
}
else
{
  http_response_code(404);
}