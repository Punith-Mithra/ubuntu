
cd ~
cd Pictures/Wallpapers/
#set `ls`

# this statement changes the background and the wall papers must b present in pics folder

while [ 0 ]
do
  
for item in *
do 
	#if [ -b item ]
	#then 
		gsettings set org.gnome.desktop.background picture-uri file:///home/punithm/Pictures/Wallpapers/$item
		sleep 30
	#fi
done

done
