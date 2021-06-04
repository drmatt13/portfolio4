import { useEffect, Suspense, lazy } from 'react';
import { useParams } from 'react-router-dom';
import './RenderApp.css';

let App = () => <></>;

const RenderApp = () => {

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
        <Suspense fallback={<>Loading</>}>
          <App />
        </Suspense>
      </div>
    </div>
  </>
}

export default RenderApp
