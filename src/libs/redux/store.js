import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import popupReducer from './popupSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['auth'],
};

const rootReducer = combineReducers({
  auth: authReducer,
  popup: popupReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REGISTER'],
      },
    }),
});

export const persistor = persistStore(store);
export default store;


// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from '../authSlice';
// import { persistStore, persistReducer } from 'redux-persist';
// import { combineReducers } from 'redux';
// import { CookieStorage } from 'redux-persist-cookie-storage';
// import Cookies from 'universal-cookie';

// const cookies = new Cookies();

// const persistConfig = {
//   key: 'root',
//   storage: new CookieStorage(cookies, {
//     expiration: {
//       default: 365 * 24 * 60 * 60 * 1000, // Thời gian hết hạn: 1 năm
//     },
//     secure: false, // Để `true` nếu chạy trên HTTPS
//   }),
// };

// const rootReducer = combineReducers({
//   auth: persistReducer(persistConfig, authReducer),
// });

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: ['persist/PERSIST', 'persist/REGISTER'],
//       },
//     }),
// });

// export const persistor = persistStore(store);
// export default store;




// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from '../authSlice';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { combineReducers } from 'redux';

// const persistConfig = {
//   key: 'root',  
//   storage,      
// };

// const rootReducer = combineReducers({
//   auth: persistReducer(persistConfig, authReducer),
// });

// const store = configureStore({
//   reducer: rootReducer,
// });

// export const persistor = persistStore(store);

// export default store;










// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from '../authSlice';


// const store = configureStore({
//   reducer: {
//     auth: authReducer,
//   }
// });

// export default store;
