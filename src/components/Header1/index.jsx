import React, { useContext } from "react";
import { Button, Text, Img } from "./..";
import { signOut } from "firebase/auth";
import auth from "config/firebase.init";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import AuthContext from "context/AuthContext";
import SelectLanguage from "components/select-location/SelectLocation";
import cn from "utils/cn";
import Topbar from "components/organisms/topbar/Topbar";
import { Link } from "react-router-dom";

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

  return (
    <header
      {...props}
      className={cn(" h-[206px] px-[110px]  w-[1920px]  bg-cgBlue-deep")}
    >
      <Topbar />

      <nav className="flex justify-between items-center">
        <ul className="flex items-center justify-between  gap-[70px]">
          <li>
            <Link className="text-cgWhite" to={"/Real Estate"}>
              Real Estate
            </Link>
          </li>
          <li>
            <Link className="text-cgWhite" to={"Vehicle"}>
              Vehicle
            </Link>
          </li>
          <li>
            <Link className="text-cgWhite" to={"Job"}>
              Job
            </Link>
          </li>
          <li>
            <Link className="text-cgWhite" to={"Classified (General Category)"}>
              Classified (General Category)
            </Link>
          </li>
        </ul>
        <Button
          onClick={() => navigate("/add-post")}
          color="red_A400_01"
          size="4xl"
          variant="fill"
          className="min-w-[210px] font-aleo font-bold"
        >
          Post an ad
        </Button>
      </nav>
    </header>
  );
}
