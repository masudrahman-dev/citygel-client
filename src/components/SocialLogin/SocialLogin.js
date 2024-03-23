import React, { useContext, useEffect, useState } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import axios from "axios";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { Img } from "components";
import Loading from "components/Loading/Loading";
import auth from "config/firebase.init";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AuthContext from "context/AuthContext";
import { jwtDecode } from "jwt-decode";

const SocialLogin = () => {
  const [signInWithGoogle, user, gloading, error] = useSignInWithGoogle(auth);
  const [signup, setSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  let { setAuthToken, setTUser } = useContext(AuthContext);
  let from = location.state?.from?.pathname || "/";
  if (loading) {
    return <Loading />;
  }
  if (gloading) {
    return <Loading />;
  }
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, googleProvider);
      const { uid, displayName, email } = result.user;

      // Check if the user's email already exists
      const response = await axios.get(
        `http://localhost:5000/api/v1/users/${email}`
      );
      setLoading(false);
      if (response.data) {
        const response = await axios.post(
          `http://localhost:5000/api/v1/auth/google-auth`,
          {
            email: email,
          }
        );
        if (response.data) {
          setLoading(false);

          console.log(response.data.data);
          setAuthToken(response.data.data.accessToken);
          setTUser(jwtDecode(response.data.data.accessToken));
          console.log(response.data.data.accessToken);
          localStorage.setItem("authToken", response.data.data.accessToken);
          toast.success("Login Successfully");

          navigate(from); // Navigate to the previous page
        } else {
          toast.error("please create your account first");
        }
      }
    } catch (error) {
      // signOut();
      setLoading(true);
      setSignUp(true);
      toast.success("please add your information");
      setLoading(false);
      navigate("/confirm", { state: { from: location }, replace: true }); // Navigate to "/confirm" page upon error
    }
  };
  return (
    <div>
      {" "}
      <div
        onClick={() => handleGoogleSignIn()}
        className="flex cursor-pointer flex-col items-center justify-start h-[80px] w-[80px] mt-[18px] p-[22px] bg-blue_gray-100_19 rounded-[50%]"
      >
        <Img
          src="images/img_group_red_500_01.svg"
          alt="image_three"
          className="h-[36px] w-[36px]"
        />
      </div>
    </div>
  );
};

export default SocialLogin;
