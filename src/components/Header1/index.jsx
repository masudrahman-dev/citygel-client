import React, { useContext } from "react";
import { Button, Text, Img } from "./..";
import { signOut } from "firebase/auth";
import auth from "firebase.init";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import AuthContext from "context/AuthContext";
import SelectLanguage from "components/select-location/SelectLocation";
import cn from "utils/cn";

export default function Header1({ ...props }) {
  const navigate = useNavigate();
  let { logoutUser, tuser } = useContext(AuthContext);
  const [user] = useAuthState(auth);

  const handleSignOut = async () => {
    try {
      logoutUser();
      await signOut(auth);
      console.log("signout", user);
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };
  console.log(user);
  return (
    <header {...props} className={cn("")}>
      <div className="mr-auto pl-24 pr-24 pb-3 ">
        <div className="mx-auto mb-2 mt-8 flex w-full max-w-[1685px] flex-row items-center justify-between ">
          <div className="flex w-auto flex-row justify-between gap-[70px]">
            <a href="#">
              <Text size="2xl" as="p">
                Real Estate
              </Text>
            </a>
            <a href="#">
              <Text size="2xl" as="p">
                Vehicle
              </Text>
            </a>
            <a href="#">
              <Text size="2xl" as="p">
                Job
              </Text>
            </a>
          </div>
          <Button
            onClick={() => navigate("/add-post")}
            color="red_A400_01"
            size="4xl"
            variant="fill"
            className="min-w-[210px] font-aleo font-bold"
          >
            Post an ad
          </Button>
        </div>
      </div>
    </header>
  );
}
