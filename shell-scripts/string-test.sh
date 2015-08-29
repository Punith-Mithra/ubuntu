# Comparing strings

str1="hello punith"
str2="whats up??"
str3=

[ "$str1" = "$str2" ]
echo $?

[ "$str1" != "$str2" ]
echo $?

[ -n "$str1" ] #length od str1 is greater than 0 which is true
echo $?

[ -z "$str3" ] # chechks wherther str3 is null or not
echo $?
