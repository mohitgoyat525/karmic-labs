
import './index.css';
import Hero from './components/Hero';
import UpcomingProjects from './components/UpcomingProjects';
import Services from './components/Services';
import Projects from './components/Projects';
import Karmic from './components/Karmic';

function App() {
  return (
    <div>
      <Hero />
      <UpcomingProjects />
      <Services />
      <Projects />
      <Karmic/>
   </div>
  );
}

export default App;
