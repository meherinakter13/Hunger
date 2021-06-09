import { Route, Switch } from 'react-router';
import React, {useState, useEffect} from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages';
import About from './pages/about';
import Menu from './pages/menu';
import Contact from './pages/contact';
import Dropdown from './components/Dropdown';

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu= () =>{
      if(window.innerWidth>768 && isOpen){
        setIsOpen(false)
        console.log('resized successfully');
      }
    };

    window.addEventListener('resize', hideMenu);

    return ()=>{
      window.removeEventListener('remove',hideMenu);
    }

  });
  return (
    <>
    <Navbar toggle={toggle}></Navbar>
    <Dropdown isOpen={isOpen} toggle={toggle}></Dropdown>
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/menu" component={Menu} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    <Footer></Footer>
    </>
  );
}

export default App;
