<?php 

$connection = new mysqli('localhost', 'root', '', 'project');
if(isset($_POST['name'])&& isset($_POST['phone'])&&  isset($_POST['email'])&&  isset($_POST['message']))

{
$name=$_POST['name'];
$phone=$_POST['phone'];
$email=$_POST['email'];
$message=$_POST['message'];

mysqli_query($connection,"insert into clients (name ,phone,email,message)
                     value('$name','$phone','$email','$message')");
echo "your message sent successefully";
}

?>
