import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import axios from "axios";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Img } from "components";
import Loading from "components/Loading/Loading";
import auth from "firebase.init";

const SocialLogin = () => {
  const [signInWithGoogle, user, gloading, error] = useSignInWithGoogle(auth);
  // useEffect(() => {
  //   const findUser = async () => {
  //     if (user) {
  //       try {
  //         console.log("response.data");
  //         const response = await axios.get(
  //           `http://localhost:5001/api/v1/user`,
  //           {
  //             params: {
  //               email: user.email,
  //             },
  //           }
  //         );

  //         if (response.data) {
  //           console.log(response.data);
  //           return;
  //         } else {
  //           const registrationResponse = await axios.post(
  //             "http://localhost:5001/api/v1/user/register",
  //             {
  //               email: user.email,
  //               password: "123456",
  //               name: user.displayName,
  //               userId: getRandomFloat(1, 100, 2),
  //             }
  //           );

  //           console.log("User registered:", registrationResponse.data);
  //         }
  //       } catch (error) {
  //         console.error("Error in findUser:", error.message);
  //       }
  //     }
  //   };

  //   findUser();
  // }, [user]);

  if (gloading) {
    return <Loading />;
  }
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const { uid, displayName, email } = result.user;
      console.log(email);
      // if (email) {
      //   try {
      //     console.log(uid, email, displayName);
      //     const response = await axios.post(
      //       "http://localhost:5001/api/v1/user/register",
      //       {
      //         name: displayName,
      //         email: email,
      //         password: 123456,

      //         userId: getRandomFloat(1, 100, 2),
      //       }
      //     );
      //     console.log(response);
      //   } catch (err) {
      //     console.log(err);
      //   }
      // }
    } catch (error) {
      console.error("Error during Google sign-in:", error);
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
