<?php  //Start the Session
header('Content-Type: application/json');
$link = mysql_connect('mysql.1freehosting.com', 'u196384678_punit', 'Punit******');
mysql_select_db("u196384678_cont", $link);


$timestamp = $_GET['number'];

$sql = "select * from updates where timeStamp > $timestamp";
$result = mysql_query($sql,$link) or die(mysql_error());

if(mysql_num_rows($result)>0)
{
	$resultArray = array();

	while($row = mysql_fetch_array($result)) {

		$element = array("name"=>"$row[name]", "title"=>"$title","content"=>"$row[content]","department"=>"$row[department]","Rdate"=>"$row[Rdate]","timeStamp"=>"$row[timeStamp]");
		array_push($resultArray, $element);
	}
 
	echo json_encode(array("result"=>$resultArray,"status"=>"ok"));
 
}
else
{
	echo json_encode(array("status"=>"no updates"));
}
  



?>