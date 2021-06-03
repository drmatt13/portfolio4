import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

// components
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import ReactApp from './components/react app/ReactApp';
import Modal from './components/ui/Modal';

// example react apps
const examples = ['Path_Finder', 'Todos'];

// check if mobile device
const mobile = /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// different backgrounds for web vs mobile
const backgroundImage = !mobile 
  ? "https://cdn.wallpapersafari.com/33/97/xYrqAN.jpeg"
  : "https://images.unsplash.com/photo-1563807328654-8aace77b5aa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2745&q=80";

function App() {

  const [route, setRoute] = useState("/"); 
  const [modal, setModal] = useState(null);
  const [masterContainer, setMasterContainer] = useState(null);

  const masterContainerRef = useRef();

  const redirect = (route) => {
    setModal(null);
    setRoute(route);
  }

  useEffect(() => {
    setModal(null);
  }, [route])

  useEffect(() => {
    setMasterContainer(masterContainerRef.current);
  }, [])

  return <Router>
    {!modal && <Redirect to={route} />}
    <div 
      className="master-portfolio-container"
      ref={masterContainerRef}
      style={{
        backgroundImage: `url(${backgroundImage})`
      }}
    >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:app" component={ReactApp} />
      </Switch>
      {modal && <Modal setRoute={setRoute} modal={modal} setModal={setModal} examples={examples} />}
      <div id="modal" />
      <Navbar mobile={mobile} masterContainer={masterContainer} redirect={redirect} modal={modal} setModal={setModal} />
    </div>
  </Router>
}

export default App;

