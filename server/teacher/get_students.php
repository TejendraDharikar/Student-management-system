
<?php

// to fetch students data

require 'db.php';



$sql="SELECT * FROM students ORDER by id DESC";
$result = $conn->query($sql);

$students=[];
while ($row=$result->fetch_assoc()){
  $students[]=$row;
}

echo json_encode([
  "success"=>true,
  "data"=>$students
]);
?>



