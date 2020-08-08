import React from 'react';

import './styles.css'

function Home() {
  return (
    <div>
      <nav className="blue darken-2">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo center">cURL to Anything</a>
        </div>
      </nav>
      <div className="row center content">
        <div className="row">
            <div className="row  textarea-curl">
                <div className="col s6"><a onClick={() => {}}>GET example</a></div>
                <div className="col s6"><a onClick={() => {}}>POST example</a></div>
                <div className="input-field col s12">
                    <textarea id="curl" className="materialize-textarea"></textarea>
                    <label>cURL</label>
                </div>
            </div>
            <div className="row">
                <button onClick={() => {}} className="btn waves-effect waves-light" type="submit" name="action">
                    Convert
                </button>
            </div>
        </div>
        <div className="row center">
            <div className="col s3"></div>
            <div className="col s6 code-box">
                <div className="left-align grey lighten-4">
                    <blockquote id="results" className="result"></blockquote>
                </div>
            </div>
            <div className="col s3"></div>
        </div>
      </div>
    </div>
  )
}

export default Home;