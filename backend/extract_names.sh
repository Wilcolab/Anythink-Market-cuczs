#!/bin/sh

# check if a file was actually passed into the argument spot
if [ $# -eq 0 ]
then
  echo "Error: No file provided"
  exit 1
fi

# assign the first argument passed into a variable
file=$1

# search the file for lines that have the @amazon.com email and save to a file
grep "@amazon.com" $file > result.txt

# print info to the console
cat result.txt