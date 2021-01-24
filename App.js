import React from 'react';
import Home from './src/Home';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store/index';;

export default () => {
    return(
      <Provider store={store}>
        <PersistGate loading={ null } persistor={ persistor }>
           <Home/>
        </PersistGate>        
      </Provider>
      
    )
}


