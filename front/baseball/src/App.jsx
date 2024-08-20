import './App.css';
import { BrowserRouter } from 'react-router-dom';
import TotalLayout from './component/layout/TotalLayout';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <TotalLayout/>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
