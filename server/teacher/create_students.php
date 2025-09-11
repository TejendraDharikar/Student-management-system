<?php

// to add students data
require 'db.php';

$data = json_decode(file_get_contents("php://input"), true);

if (!$data || !isset($data['name'], $data['rollno'], $data['email'], $data['class'])) {
  echo json_encode(["success" => false, "error" => "Missing or invalid input"]);
  exit;
}

$name = $data['name'];
$rollno=$data['rollno'];
$email = $data['email'];
$class = $data['class'];

$sql = "INSERT INTO students (name,rollno, email, class) VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssss", $name,$rollno, $email, $class);

if ($stmt->execute()) {
  echo json_encode(["success" => true, "data" => ["id" => $stmt->insert_id]]);
} else {
  echo json_encode(["success" => false, "error" => $stmt->error]);
}

?>