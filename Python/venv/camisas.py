from flask import Flask, render_template, request, redirect

app = Flask(__name__)

class Camisa:
    def __init__(self, time, tamanho, preco):
        self.time=time
        self.tamanho=tamanho
        self.preco=preco

camisa1=Camisa('Santos', 'G', 120)
camisa2=Camisa('Real Madrid', 'G', 120)
camisa3=Camisa('Inter Miami', 'G', 120)
    
lista=[camisa1, camisa2, camisa3]

@app.route('/')
def index():
    return render_template('camisas.html', camisas=lista)

@app.route('/novo')
def novo():
    return render_template('cadastrar.html', titulo='Nova camisa')

@app.route('/cadastrar', methods=['POST',])
def cadastrarCamisa():
    
    time = request. form['time']
    tamanho = request. form['tamanho']
    preco = request. form['preco']
    
    camisa = Camisa(time, tamanho, preco)
    lista.append(camisa)
    
    return redirect('/') 

app.run(debug=True, host='0.0.0.0', port=5000)