// import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Try from './Try';

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
     
      
      <Routes>
        <Route path="/" element={<Try />} />
      </Routes>

     </BrowserRouter>
   
    </div>
  );
}

export default App;
