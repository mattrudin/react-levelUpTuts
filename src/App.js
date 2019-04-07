import React, { Component } from 'react';
import './App.css';
import ToggleRenderPropsChildren from './components/ToggleRenderPropsChildren'
import Modal from './components/Modal'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ToggleRenderPropsChildren>
            {({func, status}) => (
              <>
                <button onClick={func}>Toggle modal</button>
                {status && 
                <Modal func={func} >
                  <h1>Hello from the modal</h1>
                </Modal>}
              </>
            )}
          </ToggleRenderPropsChildren> 
        </header>
      </div>
    );
  }
}

export default App;
