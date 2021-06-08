import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// components
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import RenderApp from './components/render app/RenderApp';
import Modal from './components/modal/Modal';

// example react apps
const examples = ['Path_Finder', 'Todos'];

// check if mobile device
const mobile = /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// desktop
// https://cdn.wallpapersafari.com/33/97/xYrqAN.jpeg
// https://free4kwallpapers.com/uploads/originals/2020/10/24/cityscape-photography--boston--usa--overcast--city-lights-wallpaper.jpg


// mobile
// https://images.unsplash.com/photo-1563807328654-8aace77b5aa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2745&q=80
// https://images.unsplash.com/photo-1568387472059-46787e6078ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80
// https://images.unsplash.com/photo-1564906527851-a0dbcff597f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80
// https://images.unsplash.com/photo-1570395141072-b3120d705942?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2082&q=80
// https://images.unsplash.com/photo-1571661685749-9535474c648c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80
// https://images.unsplash.com/photo-1613688570481-820ec84316f3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80
// https://images.unsplash.com/photo-1622481585001-1d17cdd9501e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80
// https://images.unsplash.com/photo-1536768139911-e290a59011e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=675&q=80

// different backgrounds for web vs mobile
const backgroundImage = !mobile 
  ? "https://images.alphacoders.com/461/461992.jpg"
  : "https://images.unsplash.com/photo-1564906527851-a0dbcff597f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80";

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
        background: `url(${backgroundImage}) no-repeat`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        height: '100vh',
        position: 'relative',
        overflowY: 'auto'
      }}
    >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:app" component={RenderApp} />
      </Switch>
      {modal && <Modal 
        mobile={mobile} 
        modal={modal} 
        setModal={setModal} 
        setRoute={setRoute} 
        examples={examples} 
      />}
      <div id="modal" />
      <Navbar 
        mobile={mobile} 
        masterContainer={masterContainer} 
        modal={modal} 
        setModal={setModal}
        redirect={redirect}
      />
    </div>
  </Router>
}

export default App;

