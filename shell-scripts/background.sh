
input=$1
cd ~
cd Pictures/Wallpapers/
set `ls`

# this statement changes the background and the wall papers must b present in pics folder  
gsettings set org.gnome.desktop.background picture-uri file:///home/punithm/Pictures/Wallpapers/$5
