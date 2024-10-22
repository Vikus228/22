import './App.css';
import Header from './components/Header';
import CardList from './components/CardList';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='cards'>
        <CardList />
      </div>
    </div>
  );
}

export default App;
