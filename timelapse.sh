#!/bin/bash

CFN=$( cat ./currentFileName.txt )

while true; do
  gphoto2 --capture-image-and-download --filename ./photos/"$CFN".jpg
  CFN="$((CFN + 1))"
  echo "$CFN" > ./currentFileName.txt
  sleep 2h 
done
