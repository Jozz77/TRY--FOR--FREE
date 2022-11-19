// import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Try from './Try';
import TrySecond from './try_second';
import TryThird from './Try_third';

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
     
      
      <Routes>
        <Route path="/" element={<Try />} />
        <Route path="/try_second" element={<TrySecond />} />
        <Route path="/try_third" element={<TryThird />} />
      </Routes>

     </BrowserRouter>
   
    </div>
  );
}

export default App;
