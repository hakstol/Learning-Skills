#!/bin/bash

status_http=$(curl --write-out %{http_code} --silent --output /dev/null http://localhost)

echo $status_http

if [ $status_http -ne 200 ]
then
	email -s "Problema no servidor" adm.mutillidae@gmail.com<<del
Houve um problema no servidor e os usuários pararam de ter acesso ao conteudo web.
del
	systemctl restart apache2
fi
