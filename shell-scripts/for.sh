
for item in *
do 

	if [ -f $item ]
	then	
		echo $item
		sleep 1
	fi 
	
done
