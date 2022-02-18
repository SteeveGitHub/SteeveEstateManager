import './App.css';
import data from './data';
import Display from './Display';

function App() {

  console.log(Display);
  function printConsole() {
    data.forEach(function (item) {
      console.log(item.name, item.price, item.pictures, item.seller);
    })
  };
  
  printConsole();
  
  return (
    <div className="App">

      <div>
        <Display name={data[0].name}
          price={data[0].price}
          pictures={data[0].pictures}
          seller={data[0].seller.name}

          
          
          />
      </div>      

      <div>
        <Display name={data[1].name} 
        price={data[1].price} 
        pictures={data[1].pictures} />
      </div>
      
      <div>
        <Display name={data[2].name} price={data[2].price} pictures={data[2].pictures} />
      </div>

      <div>
        <Display name={data[3].name} 
        price={data[3].price} 
        pictures={data[3].pictures} />
      </div>

      <div>
        <Display name={data[4].name} 
        price={data[4].price} 
        pictures={data[4].pictures} />
      </div>

    </div>
  );
}

export default App;
