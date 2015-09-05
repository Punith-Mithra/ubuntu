<?php  //Start the Session
session_start();
 require('connect.php');


$name = $_GET['name'];
$title = $_GET['title'];
$content = $_GET['content'];
$department = $_GET['department'];
$Ddate = date("d-m-Y");
$Rdate = date("g:i a", strtotime("13:30"));
$date1 = new DateTime();
$timeStamp = $date1->getTimeStamp(); 

$query = "insert into updates (name,title,content,department,Ddate,Rdate,timeStamp) values('$name','$title','$content','$department','$Ddate','$Rdate','$timeStamp')";

$result = mysql_query($query);

if($result){
    
	$msg = array("status"=>"ok");
	$msg = json_encode($msg);
	echo $msg;
	}
	else{
		$msg = array("status"=>"error");
		$msg = json_encode($msg);
	echo $msg;		
	}
	
//echo "date= ".$date." time = " .$time. " time stamp = ".$timeStamp; 


?>