import './App.css';
import { BrowserRouter, Routes, useNavigate } from 'react-router-dom';
import TotalLayout from './component/layout/TotalLayout';

function App() {
  return (
    <BrowserRouter>
      <TotalLayout/>
    </BrowserRouter>
  );
}

export default App;
