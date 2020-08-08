import React from 'react';

function App() {
  return (
    <div className="App">
      {/* Multi language */}
      {/* <select name="" id="">
        <option value="en">English</option>
        <option value="pt">Portuguese</option>
      </select> */}
      <h1>Lets Curlvert</h1>
      <p>1. Paste your curl command there</p>
      <p>1. Select your snippet</p>
      <p>1. Rock it!</p>
      <input type="text" />
      <button>Curlvert it!</button>
      <br /><br />
      <select name="" id="">
        <option value="RestAssured">RestAssured</option>
        <option value="Cypress">Cypress</option>
        <option value="RSpec">RSpec</option>
      </select>

      <br /><br />
      <textarea name="text" id="area"></textarea>
      <p>Would you like to add some assertions? Request us a PR</p>
    </div>
  );
}

export default App;