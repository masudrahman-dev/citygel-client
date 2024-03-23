import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "context/AuthContext";
import router from "./routes/Routes";

function App() {
  return (
    <AuthProvider>
      {/* <Routes /> */}

      <Routes router={router} />
      <ToastContainer />
    </AuthProvider>
  );
}

export default App;
