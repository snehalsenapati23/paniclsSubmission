
import './App.css';
import Chartdata from './pages/chartdata';
import Tablez from "./pages/tablez"
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ViewButton from './components/viewButton';
import Form from './pages/Form';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Chartdata />} /> 
        <Route path='/table' element={<Tablez />} />
        <Route path='/table/view' element={<ViewButton />}/>
        <Route path='/form' element={<Form />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
