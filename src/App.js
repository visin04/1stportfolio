import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Background from './components/backgound';
import Cv from './components/cv';
import Self from './components/self';
import Education from './components/education';
import Skill from './components/skills';
import Portpolio from './components/portpolio';
import Contact from './components/clients';
import Profilee from './components/profile';

function App() {
  return (
    <>
  
   <header class="background">
      <Header/>
      <Cv/>
      <Self/>
      <Education/>
      <Profilee/>
      <Skill/>
      <Portpolio/>
      <Contact/>
   </header>    
</>
  );
}

export default App;
