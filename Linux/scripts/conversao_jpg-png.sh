#!/bin/bash

converte_imagem(){
cd /home/lsilva/trainning/scripts-bash/escopos/imagens-livros # caminho dos arquivos 
if [ ! -d png ] # confere se já existe o diretório png, se não, cria
then
	mkdir png
fi

for image in *.jpg # localiza os arquivos com final jpg
do
	local imagem_sem_extensao=$(ls $image | awk -F. '{ print $1 }')	# executa uma busca cortando o parâmetro especificado na busca e armazena na variável local (so pdoe ser vizualizada dentro do escopo)
	convert $imagem_sem_extensao.jpg $imagem_sem_extensao.png 
done
}

converte_imagem 2>erros_conversao.txt # joga a saida de erros do log para o arquivo em txt
if [ $? -eq 0 ] # verifica se o status da saída é igual a zero
then
	echo "Conversão realizada com sucesso."
else
	echo "Houve uma falha no processo."
fi
