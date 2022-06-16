from fastapi import FastAPI;

app = FastAPI()

@app.post('/espelha-array')
def img(a: int, b: int, c: int):

    espelho = [a, b, c]
    reflexo = [a, b, c]

    reflexo.remove(a)
    reflexo.append(a)

    reflexo.remove(b)
    reflexo.append(b)

    reflexo.remove(a)
    reflexo.append(a)

    return espelho, reflexo

@app.post('/menor-numero')
def menorNumero(a: int, b: int, c: int):

    if (a < b) & (a < c):
        return(a)
    elif (a == b == c):
        return(a)
    elif (b < a) & (b < c):
        return(b)
    elif (c < a) & (c < b):
        return(c)
    elif(a < c) & (b < c):
        return(a)
    elif (b < a) & (c < a):
        return(b)
    elif (a < b) & (c < b):
        return(a)
    
# Desafio 1 - Menor entre três números

def menorNumero(a, b, c):

    if (a < b) & (a < c):
        print(a)
    elif (a == b == c):
        print(a)
    elif (b < a) & (b < c):
        print(b)
    elif (c < a) & (c < b):
        print(c)
    elif(a < c) & (b < c):
        print(a)
    elif (b < a) & (c < a):
        print(b)
    elif (a < b) & (c < b):
        print(a)

# print(menorNumero(1,2,3))

# Desafio 2 - Espelho de um Array

def img(a, b, c):

    espelho = [a, b, c]
    reflexo = [a, b, c]

    reflexo.remove(a)
    reflexo.append(a)

    reflexo.remove(b)
    reflexo.append(b)

    reflexo.remove(a)
    reflexo.append(a)

    return espelho, reflexo

# print(img(1,2,3))

# Desafio 3 - Potênciação


def potenciacao(a, b):

    potencia = a**b

    return potencia

# print(potenciacao(2,10))

# Desafio 4 - Retornar 2 dias antes (dias úteis)

def DU(dia: str):

    dias = ['segunda', 'terca', 'quarta', 'quinta', 'sexta']

    if (dia == 'segunda'):
        dia1 = 'Hoje é ' + dias.__getitem__(0)
        dia2 = 'Dois dias antes foi ' + dias.__getitem__(3)

    if (dia == 'terca'):
        dia1 = 'Hoje é ' + dias.__getitem__(1)
        dia2 = 'Dois dias antes foi ' + dias.__getitem__(4)

    if (dia == 'quarta'):
        dia1 = 'Hoje é ' + dias.__getitem__(2)
        dia2 = 'Dois dias antes foi ' + dias.__getitem__(0)

    if (dia == 'quinta'):
        dia1 = 'Hoje é ' + dias.__getitem__(3)
        dia2 = 'Dois dias antes foi ' + dias.__getitem__(1)

    if (dia == 'sexta'):
        dia1 = 'Hoje é ' + dias.__getitem__(4)
        dia2 = 'Dois dias antes foi ' + dias.__getitem__(2)

    return dia1, dia2

# print(DU('segunda'))