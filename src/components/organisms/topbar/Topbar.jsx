import { Text } from "components";
import Logo from "components/icons/logo/Logo";
import SelectLanguage from "components/select-location/SelectLocation";
import AuthContext from "context/AuthContext";
import auth from "firebase.init";
import { signOut } from "firebase/auth";
import { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth/dist/index.cjs";
import cn from "utils/cn";
import { useNavigate } from "react-router-dom";

export default function Topbar({ ...props }) {
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
    <div {...props} className={cn("h-[128px] w-[1920px] border bg-cgBlue")}>
      <div className="mr-auto pl-24 pr-24 pb-3 ">
        <div className="mx-auto  flex w-full  items-center justify-between py-3">
          <Logo />
          <div className="flex w-full flex-wrap items-center justify-end gap-6 ">
            {user?.uid && tuser ? (
              <div onClick={handleSignOut}>
                <Text
                  size="2xl"
                  as="p"
                  className=" cursor-pointer text-center font-poppins !text-gray-50"
                >
                  Sign Out
                </Text>
              </div>
            ) : (
              <div onClick={() => navigate("/login")}>
                <Text
                  size="2xl"
                  as="p"
                  className="cursor-pointer text-center font-poppins !text-gray-50"
                >
                  Login or Sign up
                </Text>
              </div>
            )}
            {/* me */}
            <SelectLanguage />
          </div>
        </div>
      </div>
    </div>
  );
}
