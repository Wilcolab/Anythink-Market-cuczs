#!/bin/sh

cat $1

# search the file for lines that have the @amazon.com email and save to a file
grep -i "@amazon.com"

# after finding the lines with that email suffix it pulls out only the data in columns 2 and 3
cut -d"," -f2,3 

# replaces the , inbetween the names with a space
sed 's/,/ /g'

# print the info in the second column first then the info in the first coulmn to arg space 2
awk '{print $2, $1}' > $2