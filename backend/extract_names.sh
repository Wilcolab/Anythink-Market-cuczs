#!/bin/sh

cat $1
# check if a file was actually passed into the argument spot
if [ $# -eq 0 ]
then
  echo "Error: No file provided"
  exit 1
fi
# assign the first argument passed into a variable
file=$1

# search the file for lines that have the @amazon.com email and save to a file
grep -i "@amazon.com" $file

# after finding the lines with that email suffix it pulls out only the data in columns 2 and 3
cut -d"," -f2,3 

# replaces the , inbetween the names with a space
sed 's/,/ /g'

# print the info in the second column first then the info in the first coulmn to result.txt
awk '{print $2, $1}' > output_names.txt