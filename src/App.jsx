import Topbar from "./components/topbar/Topbar";
import Contact from "./components/contact/Contact";
import Skill from "./components/skill/Skill";
import './app.scss';
import About from "./components/about/About";
import { useState } from "react";
import Menu from "./components/menu/Menu";


function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <div className="sections">
      <About />
      <Skill />
      <Contact />
    </div>
    </div>
  );
}

export default App;
