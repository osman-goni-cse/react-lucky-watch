import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import FAQ from './components/FAQ/FAQ';

function App() {
  return (
    <div className='container'>
      <Header></Header>
      <Shop></Shop>
      <FAQ></FAQ>
    </div>
  );
}

export default App;
