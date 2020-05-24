import React from 'react';
import 'assets/App.css';
import GlobalContext from 'GlobalContext';
function App() {
  const {state, dispatch} = React.useContext(GlobalContext);
  return (
    <div className="App">
      <header className="App-header">
        <input 
          value={state.name} 
          onChange={({target:{value}}) => { 
            dispatch("SET_NAME", value)
          }}
          />
      </header>
    </div>
  );
}

export default App;
