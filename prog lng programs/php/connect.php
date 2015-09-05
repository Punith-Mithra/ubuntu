<?php
$connection = mysql_connect('mysql.1freehosting.com', 'u196384678_punit', 'Punithmithra!23');
if (!$connection){
    die("Database Connection Failed" . mysql_error());
}
$select_db = mysql_select_db('u196384678_cont');
if (!$select_db){
    die("Database Selection Failed" . mysql_error());
}