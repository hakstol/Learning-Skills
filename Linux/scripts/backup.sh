#!/bin/bash

echo "digite o dretório de backup:"
read dir_bckp

sudo cp -rv $dir_bckp ~/backup
echo ""
echo "Backup concluído."
