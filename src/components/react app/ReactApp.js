import { useEffect, Suspense, lazy } from 'react';
import { useParams } from 'react-router-dom';
import './ReactApp.css';

let App = () => <></>;

const ReactApp = () => {

  const { app } = useParams();

  useEffect(() => {
    App = lazy(() => import(`../../apps/${app}/App`))
    return () => {
      App = () => <></>
    }
  }, [app]);

  return <>
    <div className="react-app-primary-background">
      <div className="react-app-secondary-background fade-in">
        {/* <div className="react-app-container"> */}
          <Suspense fallback={<>Loading</>}>
            <App />
          </Suspense>
        {/* </div> */}
      </div>
    </div>
  </>
}

export default ReactApp
