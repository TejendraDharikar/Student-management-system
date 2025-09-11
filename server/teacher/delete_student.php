<?php
require 'db.php';

$id=$_GET['id']??null;
if (!$id){
  echo json_encode(["success"=>false,"erreor"=>"missing id"]);
  exit;
}

$sql="DELETE FROM students WHERE id=?";
$stmt=$conn->prepare($sql);
$stmt->bind_param("i",$id);

if ($stmt->execute()){
  echo json_encode(["success"=>true]);
}
else{
  echo json_encode(["success"=>false,"error"=> $stmt->error]);
}
?>