import './App.css';
import Home from './components/home/Home';
import Sidebar from './components/sidebar/Sidebar';
import About from './components/about/About';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Blog from './components/blog/Blog';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <main className='main'>
        <a name='home'>
          <Home/>
        </a>
        <a name='about'>
          <About/>
        </a>
        <a name='resume'>
          <Resume/>  
        </a>
        <a name='portfolio'>
          <Portfolio/>
        </a>
        <a name='blog'>
          <Blog/>
        </a>
        <a name='contact'>
          <Contact/>  
        </a>
      </main>
    </div>
  );
}

export default App;
