#!/bin/bash

if [ ! -d log ]
then
	mkdir log
fi

funcao_processo(){
processos=$(ps -e -o pid --sort -size | head -n 15 | grep [0-9]) # lista os processos pelo PID no formato descrente de tamanho de memória e retornando somente os números 
for pid in $processos
do 
	nome_processo=$(ps -p $pid -o comm=) # retorna o nome do processo
	nome_processo=$(echo ${nome_processo//[' ']/})
	echo -n $(date +%F,%H:%M:%S,) >> log/$nome_processo.log # adiciona a data do processo junto ao nome do processo  
	tamanho_processo=$(ps -p $pid -o size | grep [0-9]) # tamanho do processo em kB
    	echo "$(bc <<< "scale=2;$tamanho_processo/1024") MB" >> log/$nome_processo.log
done  
}

funcao_processo 2>>erros_log.txt

if [ $? -eq 0 ]
then
	echo "Os arquivos foram salvos com sucesso."
else
	echo "Houve um problema durante o salvamento."
fi
