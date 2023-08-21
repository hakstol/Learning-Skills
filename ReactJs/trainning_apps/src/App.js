import './App.css';

function App() {

  {
    class Tester() {

    }
  }

  var teste = [
    'calor',
    'frio',
    'fogo',
    'chuva',
  ]

  var novoValor = JSON.stringify(teste)

  return (
    <div className="App">
      {
        teste.map((valor) => {
          return (
            <div style={{ backgroundColor: 'red', width: '300px', height: '50px', margin: '0 auto' }}>
              <h1 style={{ color: 'white', fontSize: '32px' }}>{valor}</h1>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
