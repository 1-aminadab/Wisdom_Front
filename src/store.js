import {configureStore, combineReducers,getDefaultMiddleware} from "@reduxjs/toolkit"
import userReducer from "./feature/userSlice"
import cardReducer from './feature/cardSlice'
import {persistStore, FLUSH, REHYDRATE, PAUSE,PERSIST, PURGE, REGISTER } from "redux-persist"
import persistReducer from './../node_modules/redux-persist/es/persistReducer';
import storage from "redux-persist/lib/storage"; 


const persistConfig = {
    key:'root',
    version: 1,
    storage
}
const reducer = combineReducers({
    user: userReducer,
    card:cardReducer
    
})


const persistedReducer = persistReducer(persistConfig, reducer)

export const store  = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck:{
            ignoreActions:[FLUSH, REHYDRATE, PAUSE,PERSIST, PURGE, REGISTER ]
        }
    })
});
export const persistor = persistStore(store)
