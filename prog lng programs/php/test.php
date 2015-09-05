<?php
$resultArray = array();
for($i=0;$i<4;$i++){
    $element = array("name"=>"punith$i", "id"=>"123$i");
    array_push($resultArray, $element);
}
echo json_encode(array("result"=>$resultArray));

?>