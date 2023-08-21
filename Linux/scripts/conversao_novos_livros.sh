#!/bin/bash

converte_img(){
	local path_img=$1
	local img_sem_extensao=$(ls $path_img | awk -F. '{ print $1 }')
	convert $img_sem_extensao.jpg $img_sem_extensao.png
}

varrer_dir(){
	cd $1 # pega o conteúdo do diretório varrido
	for arquivo in *
	do
		local path_arq=$(find /home/lsilva/trainning/scripts-bash/escopos/imagens-novos-livros -name $arquivo)
		if [ -d $path_arq ] # verifica se é um diretório
		then
			varrer_dir $path_arq # entra como parâmetro para a função 
		else
			converte_img $path_arq
		fi
	done
}

varrer_dir /home/lsilva/trainning/scripts-bash/escopos/imagens-novos-livros

if [ $? -eq 0 ]
then
	echo "Conversão realizada com sucesso." 
else
	echo "Houve um problema na conversão."
fi
