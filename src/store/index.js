import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import reducers from './reducers/index';
import AsyncStorage from '@react-native-async-storage/async-storage';


const persistConfig = {
    key:'spotifyApp',
    storage:AsyncStorage
}


const persistedReducer  = persistReducer(persistConfig, reducers)

const store = createStore(
    persistedReducer,
    compose( applyMiddleware(thunk))
)

const persistor = persistStore(store)

export  { store,persistor };