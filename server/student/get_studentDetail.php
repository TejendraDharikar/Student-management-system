<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST,DELETE,PUT, OPTIONS");
header("Content-Type:application/json");


if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(200);
  exit;
}


$conn = new mysqli("localhost", "root", "", "college_db");


if ($conn->connect_error) {
  echo json_encode(["success" => false, "message" => "Database connection failed"]);
  exit;
}


$email = $_GET['email'] ?? null;

if (!$email) {
  echo json_encode(["success" => false, "error" => "Missing email"]);
  exit;
}


$sql = "SELECT id, name, rollno, email, class FROM students WHERE email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

$student = $result->fetch_assoc();

if ($student) {
  echo json_encode(["success" => true, "data" => $student]);
} else {
  echo json_encode(["success" => false, "error" => "Student not found"]);
}

$conn->close();

?>