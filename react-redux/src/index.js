import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import appStore from './store';
import Counter from './components/counter';
import './style.css';

class App extends Component {

  render() {
    return (
      <div>
        <Counter />
      </div>
    );
  }
}

const AppWithStore=()=>(
  <Provider store={appStore}>
      <App />
  </Provider>
)

render(<AppWithStore />, document.getElementById('root'));
