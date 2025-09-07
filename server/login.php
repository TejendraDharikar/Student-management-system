<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");

// Handle preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(200);
  exit();
}

// Connect to database
$host = "localhost";
$user = "root";
$password = "";
$database = "college_db";

$conn = new mysqli($host, $user, $password, $database);
if ($conn->connect_error) {
  die(json_encode(["success" => false, "error" => "DB connection failed"]));
}

// Read JSON input
$data = json_decode(file_get_contents("php://input"), true);
$email = $data['email'] ?? '';
$password = $data['password'] ?? '';

$response = ['success' => false];

// Validate credentials
if ($email && $password) {
  $stmt = $conn->prepare("SELECT role FROM users WHERE email = ? AND password = ?");
  $stmt->bind_param("ss", $email, $password);
  $stmt->execute();
  $result = $stmt->get_result();

  if ($row = $result->fetch_assoc()) {
    $response['success'] = true;
    $response['role'] = $row['role'];
  }
}

echo json_encode($response);
$conn->close();
?>
