# Aula 4

# Desafio 1 - Crie um script em python que leia o nome de uma pessoa e mostra uma mensagem de boas-vindas de acordo com o valor digitado.
# nome = input('Qual seu nome bro? ')
# print('Bem vindo, 'f'{nome}!')
# print('Bem vindo, {}!' .format(nome))

# Desafio 2 - Crie um script em python que leia o dia, mês e ano de uma pessoa e mostre uma mensagem com a data formatada.
# dia = input('Informe um dia: ')
# mes = input('Informe um mês: ')
# ano = input('Informe um ano: ')
# print(' Essa é a data formatada: 'f'{dia}/'f'{mes}/'f'{ano}')
# print(' Essa é a data formatada: {}/{}/{}' .format(dia,mes,ano))

# Desafio 3 - Crie um script em python que leia dois números e resulte na soma deles
# n1 = int(input('Digite o primeiro número: '))
# n2 = int(input('Digite o segundo número: '))
# resultado = n1 + n2
# print('Essa é a soma dos dois números: ' + str(resultado)
# print('Essa é a soma dos dois números: {}' .format(resultado))

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

# Aula 7

# Desafio 1 - Faça um programa que leia um número inteiro e mostre seu antecessor e seu sucessor
# n = int(input('Digite um número: '))
# ant = n - 1
# suc = n + 1
# print('Seu antecessor é {} e seu sucessor é {}' .format(ant,suc))

# Desafio 2 - Crie um algoritmo que leia um número e mostre seu dobro, triplo e raiz quadrada
# n = int(input('Digite um número: '))
# dob = n * 2
# tri = n * 3
# qua = n**(1/2)
# print('Seu dobro é {}, seu triplo é {} e sua raíz quadrada é {}' .format(dob, tri, qua))

# Desafio 3 - Desenvolva um programa que leia as duas notas de um aluno, calcule e mostre sua média.
# n1 = float(input('Digite a primeira nota: '))
# n2 = float(input('Digite a segunda nota: '))
# media = (n1 + n2) // 2
# print('A média desse aluno é {}' .format(media))

# Desafio 4 - Escreva um programa que leia o valor em metros e exiba convertido em centímetros e milímetros.
# valor = int(input('Digite um valor: '))
# m = valor
# cm = valor * 100
# mm = valor * 1000
# print('Valor em metros {}m, valor em centímetros {}cm, valor em milímetros {}mm' .format(m,cm,mm))

# Desafio 5 - Faça um programa que leia um número inteiro qualquer e mostre na tela sua tabuada.
# valor = int(input('Digite um valor para criarmos uma tabuada: '))
# tabuada = [valor * 0, valor * 1, valor * 2, valor * 3, valor * 4, valor * 5, valor * 6, valor * 7, valor * 8, valor * 9, valor * 10]
# print('Essa é a nossa tabuada criada {}' .format(tabuada))

# Desafio 6 - Crie um programa que leia quanto dinheiro uma pessoa tem na carteira e mostre quantos dólares ela pode comprar (Considerando US$1.00 = R$3.27).
# carteira = float(input('Você tem: '))
# valor = carteira / 3.27
# print('Você pode comprar {:.2f} dólares' .format(valor))

# Desafio 7 - Faça um programa que leia a largura e a altura de uma parede em metros, calcule sua área e a quantidade de tinta necessária para pintá-la, sabendo que, cada litro de tinta pinta uma área de 2m².
# larg = float(input('Qual a largura da parede? '))
# alt = float(input('Qual a altura da parede? '))
# area = larg * alt
# qntd = area / 2
# print('A largura da sua parede é {:.2f}m, a altura da sua parede é {:.2f}m, a área da parede é {:.2f}m e a quantidade necessária para pintá-la é {}m de tinta' .format(larg,alt,area,qntd))

# Desafio 8 - Faça um algoritmo que leia o preço de um produto e mostre seu novo preço com 5% de desconto.
# precoInicial = float(input('O preço inicial do produto é: '))
# precoDesc = precoInicial - (precoInicial * 5)/100
# print('Seu preço inicial é R${}, com 5% de desconto, seu novo preço é R${}' .format(precoInicial,precoDesc))

# Desafio 8 - Faça um algoritmo que leia o salário de um funcionário e mostre seu novo salário com 15% de aumento.
# salInicial = float(input('Qual o salário inicial? '))
# salAcres = salInicial + (salInicial * 15)/100
# print('Seu salário inicial é R${}, com o acréscimo de 15% seu novo salário é R${}' .format(salInicial,salAcres))

# Desafio 9 - Escreva um programa que pergunte a quantidade de Km percorridos por um carro alugado e a quantidade de dias pelos quais ele foi alugado. Calcule o preço a pagar, sabendo que o carro custa R$60 por dia e R$0,15 por Km rodado.
# qntdKm = float(input('Qual a quantidade de Km percorridos? '))
# qntdDias = int(input('Qual a quantidade de dias alugados? '))
# preco = (qntdKm * 60) + (qntdDias * 0.15)
# print('A quantidade Km percorridos foi {}km, de dias alugado foi {} dias e o preço a pagar é R${:.2f}' .format(qntdKm, qntdDias, preco))