
import './index.css';
import Hero from './components/Hero';
import UpcomingProjects from './components/UpcomingProjects';
import Services from './components/Services';
import Projects from './components/Projects';
import Karmic from './components/Karmic';
import Footer from './common/Footer';
import Values from './components/Values';

function App() {
  return (
    <div>
      <Hero />
      <UpcomingProjects />
      <Services />
      <Projects />
      <Karmic />
      <Values/>
      <Footer/>
   </div>
  );
}

export default App;
