cd ~
cd Pictures/Wallpapers/
#set `ls`

# this statement changes the background and the wall papers must b present in pics folder
count=0
for item in *
do 
	echo "$item $count"
	mv "$item" "$count"

	count=`expr $count + 1` 
done
