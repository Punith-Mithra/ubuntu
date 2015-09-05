<?php
	//require('connect.php');
    // If the values are posted, insert them into the database.
    if (isset($_GET['title'])){
        $name = $_GET['name'];
	$title = $_GET['title'];
        $context = $_GET['context'];
        $department = $_GET['department'];
	//$date = date(D-M-Y);
        //$time = date(H:i:s);
 	
	echo "name: ".$name." <br>title: ".$title."<br> department:: ".$department;
        //$query = "INSERT INTO `user` (username, password, email) VALUES ('$username', '$password', '$email')";
        //$result = mysql_query($query);
        //if($result){
            //$msg = "User Created Successfully.";
       }
    

?>