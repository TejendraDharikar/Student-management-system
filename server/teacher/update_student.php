<?php
require 'db.php';

$data=json_decode(file_get_contents("php://input"),true);
$id=$data['id'];
$name = $data['name'];
$rollno=$data['rollno'];
$email = $data['email'];
$class = $data['class'];

$sql = "UPDATE students SET name = ?, rollno=?, email = ?, class = ? WHERE id = ?";

$stmt = $conn->prepare($sql);
$stmt->bind_param("ssssi", $name,$rollno, $email, $class,$id);

if ($stmt->execute()) {
  echo json_encode(["success" => true]);
} else {
  echo json_encode(["success" => false, "error" => $stmt->error]);
}

?>