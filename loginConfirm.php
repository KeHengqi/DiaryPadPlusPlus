<?php
header("Content-Type: text/html;charset=utf-8");
$username = $_POST['username'];
$password = $_POST['password'];

$connection = new mysqli("cdb-il1i3e20.bj.tencentcdb.com","root","12345678!","DIARY_PAD");


if($connection->connect_errno){
    echo "Sorry, this website is experiencing problems.";
    echo "Error: Failed to make a MySQL connection, here is why: \n";
    echo "Errno: " . $connection->connect_errno . "\n";
    echo "Error: " . $connection->connect_error . "\n";
    exit;
}
$username = stripslashes($username);
$password = stripslashes($password);
$username = $connection->real_escape_string($username);
$password = $connection->real_escape_string($password);

$query = "SELECT * FROM User WHERE UNAME='$username' AND PASS='$password' ";

$result = $connection->query($query);
if(!$result){
    die('mysql error');
}

if(mysqli_num_rows($result)<=0){
    $status=0;
}
else{
    $status=1;
}
echo json_encode($status);
?>