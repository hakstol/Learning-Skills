#!/bin/bash

cd ../escopos

regex="\b([0-9]{1,3}\.){3}[0-9]{1,3}\b"
if [[ $1 =~ $regex ]]
then 
	cat apache.log | grep $1
else 
	echo "O formato não é válido."
fi

if [ $? -ne 0 ]
then
    echo "O endereço IP procurado não está presente no arquivo"
fi
