echo "enter a char :\c"
read var
case $var in

[a-z])
	echo "you entered a lower case alphabet."
	;;
[A-Z])
	echo "you entered a upper case Alphabet"
	;;
[0-9])
	echo "you entered a digit."
	;;
?)
	echo "you entered a spl symbol."
	;;
*)
	echo "you enterd a string."
	;;
esac

