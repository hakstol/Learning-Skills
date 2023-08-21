#!/bin/bash

mem_total=$(free | grep -i mem | awk '{ print $2 }')
mem_used=$(free | grep -i mem | awk '{ print $3 }')
mem_atual=$(bc <<< "scale=2;$mem_used/$mem_total *100" | awk -F. '{ print $1 }')
mem_humam=$(free -h | grep -i mem | awk '{ print $3 }')

if [ $mem_atual -gt 50 ] # se o valor da memória ultrapassou 50% do consumo (gt = greater than)
then
	mail -s "Consumo de memória acima do limite" adm.mutllidae@gmail.com<<del
	O consumo de memoria esta acima do limite que foi especificado. Atualmente o consumo e de $mem_humam

del
fi
