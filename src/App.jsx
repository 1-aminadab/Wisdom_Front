import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { AuthProvider } from "./contexts/AuthContext";
import Router from "./Routes"; // Import the Router component
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <AuthProvider>
        <Router />
      </AuthProvider>
      </ PersistGate >
    </Provider>
  );
};

export default App;
