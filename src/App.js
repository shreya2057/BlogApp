import NavBar from './NavBar';
import HomePage from './HomePage';

function App() {

  return (
    <div className="App">
      <NavBar/>
      <div className="content">
        <HomePage/>
      </div>
    </div>
  );
}

export default App;
