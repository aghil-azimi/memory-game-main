import './App.css';

const CardImage =[
  {"src" : "/img/helmet-1.png"},
  {"src" : "/img/potion-1.png"},
  {"src" : "/img/ring-1.png"},
  {"src" : "/img/scroll-1.png"},
  {"src" : "/img/shield-1.png"},
  {"src" : "/img/sword-1.png"}
]

function App() {

  const shuffleCard =()=>{
    const  shuffleCards =[...CardImage, ...CardImage]
    console.log( shuffleCards)
  }



  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={shuffleCard} >New Game</button>

      <div className='card-grid'>
       
        
      </div>
      <p>Turns: </p>
    </div>
  );
}

export default App;
