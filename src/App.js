
import './index.css';
import Hero from './components/Hero';
import UpcomingProjects from './components/UpcomingProjects';
import Services from './components/Services';
import Projects from './components/Projects';
import Karmic from './components/Karmic';
import Value from './components/Value';
import Footer from './common/Footer';

function App() {
  return (
    <div>
      <Hero />
      <UpcomingProjects />
      <Services />
      <Projects />
      <Karmic />
      <Value />
      <Footer/>
   </div>
  );
}

export default App;
