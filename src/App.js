import React, { Component, Fragment } from 'react';
import './App.css';
import ToggleRenderPropsChildren from './components/ToggleRenderPropsChildren'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* With Fragments */}
          <ToggleRenderPropsChildren>
            {({func, status}) => (
              <Fragment>
                {status && <h1>Show me</h1>}
                <button onClick={func}>Show / Hide</button>
              </Fragment>
            )}
            </ToggleRenderPropsChildren> 
          {/* With the Fragment shorthand */}
          <ToggleRenderPropsChildren>
            {({func, status}) => (
              <>
                {status && <h1>Show me</h1>}
                <button onClick={func}>Show / Hide</button>
              </>
            )}
            </ToggleRenderPropsChildren> 
        </header>
      </div>
    );
  }
}

export default App;
