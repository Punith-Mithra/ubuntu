echo "please enter a char:\c"

read var

if [ `echo $var | wc -c` -eq 2 ]
then 
	echo "you entered char. "
else
	echo "dont enter a string"
fi
