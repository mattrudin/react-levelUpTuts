import React, { Component } from 'react';
import './App.css';
import ToggleRenderPropsChildren from './components/ToggleRenderPropsChildren'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ToggleRenderPropsChildren>
            {({func, status}) => (
              <div>
                {status && <h1>Show me</h1>}
                <button onClick={func}>Show / Hide</button>
              </div>
            )}
            </ToggleRenderPropsChildren> 
        </header>
      </div>
    );
  }
}

export default App;
