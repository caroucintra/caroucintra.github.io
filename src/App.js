import './App.css';
import Home from './components/pages/Home/Home';
import WebQuest from './components/pages/WebQuest/WebQuest';

import {Routes, Route, withRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path='' element={<Home/>}/>
          <Route exact path='/webquest' element={<WebQuest/>}/>
        </Routes>
    </div>
  );
}

export default App;
