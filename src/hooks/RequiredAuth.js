import Loading from "components/Loading/Loading";
import AuthContext from "context/AuthContext";
import auth from "config/firebase.init";
import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";

const RequiredAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  let { tuser } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }

  if (user && tuser) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default RequiredAuth;
