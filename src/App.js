import React, { Component } from 'react';
import './App.css';
import Modal from './components/Modal'
import ToggleRenderPropsChildren from './components/ToggleRenderPropsChildren'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ToggleRenderPropsChildren>
            {({func, status}) => (
              <>
                {status && <h1>Show at the bottom of this page!</h1>}
                <button onClick={func}>Show / Hide</button>
                {status &&
                <Modal>
                  <h1>Greetings from the modal!</h1>
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
