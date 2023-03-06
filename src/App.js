import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/pages/Home/Home';
import WebQuest from './components/pages/WebQuest/WebQuest';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/webquest' element={<WebQuest/>}/>
      </Routes>
    </Router>
      
    </>
  );
}

export default App;
