#!/bin/sh

# open the file at the first argument
# search the file for lines that have the @amazon.com email case insensitive
# after finding the lines with that email suffix it pulls out only the data in columns 2 and 3
# replaces the , inbetween the names with a space
# print the info in the second column first then the info in the first coulmn to arg space 2

cat $1 | grep -i @amazon.com | cut -d "," -f 2-3 | sed 's/,/ /g' | awk '{print $2, $1}' > $2