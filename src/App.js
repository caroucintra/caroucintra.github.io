import './App.css';
import Home from './components/pages/Home/Home';
import WebQuest from './components/pages/WebQuest/WebQuest';

import {Routes, Route} from 'react-router-dom';
import WebQuestResources from './components/pages/WebQuest/WebQuestResources';
import WebQuestConclusion from './components/pages/WebQuest/WebQuestConclusion';
import WebQuestEvaluation from './components/pages/WebQuest/WebQuestEvaluation';
import WebQuestProcess from './components/pages/WebQuest/WebQuestProcess';
import WebQuestTasks from './components/pages/WebQuest/WebQuestTasks';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='' element={<Home/>}/>
          <Route path='webquest' element={<WebQuest/>}/>
          <Route path='webquest/tasks' element={<WebQuestTasks/>}/>
          <Route path= 'webquest/resources' element={<WebQuestResources/>}/>
          <Route path='webquest/process' element={<WebQuestProcess/>}/>
          <Route path='webquest/evaluation' element={<WebQuestEvaluation/>}/>
          <Route path='webquest/conclusion' element={<WebQuestConclusion/>}/>
          
        </Routes>
    </div>
  );
}

export default App;
