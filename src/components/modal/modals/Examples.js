// import React from 'react'
import { Link } from 'react-router-dom';

const Examples = ({setRoute, examples}) => {
  return <>
    <div className="fade-in-2" style={{display:'flex', flexDirection:'column'}}>
      {examples.map((example) => (
        <Link key={example} onClick={() => setRoute(`/${example}`)} to={`/${example}`}>{example}</Link>
      ))}
    </div>
  </>
}

export default Examples
