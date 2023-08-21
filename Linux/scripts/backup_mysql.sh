#!/bin/bash

home=/home/lsilva
cd $home

if [ ! -d backup_mysql ] # se não existir o dir backup
then
	mkdir backup_mysql
fi

# sudo mysql -u root mutillidae < ~/backup/mutillidae.sql restaura os dados para o db vazio
mysqldump -u root $1 > $home/backup_mysql/$1.sql # cria um backup lógico do db passado pelo usuário como parâmetro, $1 coleta o resultado inserido pelo usuario

if [ $? -eq 0 ] # verifica se a saída foi ok
then
	echo "Backup foi realizado com sucesso."
else
	echo "Houve um problema no backup."
fi
