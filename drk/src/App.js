import React from 'react';
import './App.css';
import { Button, Spinner } from 'design-react-kit';
import 'bootstrap-italia/dist/css/bootstrap-italia.min.css';
import 'typeface-titillium-web';
import 'typeface-roboto-mono';
import 'typeface-lora';

import NewComponent from './NewComponent'

function App() {
  return (
    <div className="App">
    <div className="App-header">
      <NewComponent/>
      <Button color="primary">Hello World this is Harsh</Button>
      <button>Hello</button>
      <p className="p-3">
      <Spinner active/>

      </p>
      </div>
    </div>
  );
}

export default App;
