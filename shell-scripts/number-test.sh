echo "enter a number between 10 and 20"
read num

if [ $num -le 10 ]
then
	echo "that was under the belt partner."

elif [ $num -ge 20 ]
then
	echo "the number is over the belt my partner"
else

	echo "the number is between 10 and 20"
fi

