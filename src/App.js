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
        <Home/>
        <About/>
        <Resume/>
        <Portfolio/>
        <Blog/>
        <Contact/>
      </main>
    </div>
  );
}

export default App;
