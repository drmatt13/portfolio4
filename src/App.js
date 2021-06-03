import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
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


function App() {

  const [route, setRoute] = useState("/"); 
  const [modal, setModal] = useState(null);

  const redirect = (route) => {
    setModal(null);
    setRoute(route);
  }

  useEffect(() => {
    setModal(null);
  }, [route])

  return <Router>
    {!modal && <Redirect to={route} />}
    <div className="master-portfolio-container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:app" component={ReactApp} />
      </Switch>
      {modal && <Modal setRoute={setRoute} modal={modal} setModal={setModal} examples={examples} />}
      <div id="modal" />
      <Navbar mobile={mobile} redirect={redirect} modal={modal} setModal={setModal} />
    </div>
  </Router>
}

export default App;

