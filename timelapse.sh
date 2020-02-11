#!/bin/bash

CFN=$( cat ./currentFileName.txt )

while true; do
  git pull
  gphoto2 --capture-image-and-download --filename ./photos/"$CFN".jpg
  CFN="$((CFN + 1))"
  echo "$CFN" > ./currentFileName.txt
  git add ~/timelapse/planty.com/photos/*.jpg
  git commit -m "Updated: `date +'%Y-%m-%d %H:%M:%S'`"
  git push
  sleep 2h 
done
