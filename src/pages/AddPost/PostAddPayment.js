import useSelection from "antd/es/table/hooks/useSelection";
import { Text } from "components";
import ProductSlider from "pages/Products/ProductCart/ProductSlider";
import { useSelector } from "react-redux";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { StripeCardNumberElement } from "@stripe/stripe-js";
import { useState } from "react";
import useAxios from "config/api/useAxios";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "config/firebase.init";
import { message } from "antd";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const PostAddPayment = () => {
  const { currentStep, category, subcategory, form, membership } = useSelector(
    (state) => state.post
  );
  const [loading, setLoading] = useState(false);
  console.log(form);
  const payNow = () => {};
  const stripe = useStripe();
  const elements = useElements();
  const [name, setName] = useState("");
  const [formErrorMessage, setFormErrorMessage] = useState(null);
  const [user] = useAuthState(auth);
  const [save, setSave] = useState(false); // State variable to track checkbox state
  const [success, setSuccess] = useState(false);
  const handleSaveCardChange = (e) => {
    setSave(e.target.checked);
  };
  const navigate = useNavigate();
  const generateStripeToken = async () => {
    if (!stripe || !elements) {
      console.log("stripe / elements is not set");
      return;
    }

    const cardNumberElement = elements.getElement(CardNumberElement);

    const { token, error } = await stripe.createToken(cardNumberElement, {
      name: name,
    });

    if (!token || error) {
      console.log(error || "Token is not set");
      throw error;
    }

    return token;
  };

  const api = useAxios();
  const ads = { ...form, category, subcategory };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const token = await generateStripeToken();
      // const resultPayment = await api.post(
      //   "http://localhost:5000/api/v1/payment",
      //   {
      //     membershipType: membership,
      //     email: user?.email,
      //     token: token,
      //     save: save,
      //   },
      // );
      // console.log(resultPayment);
      // if (resultPayment.data) {

      const resultPostAds = await api.post("http://localhost:5000/api/v1/ads", {
        email: user?.email,
        ...ads,
      });
      console.log(resultPostAds);
      if (resultPostAds.data) {
        message.success("You Ads Post SuccessFully");
        setLoading(false);
        setSuccess(true);
        // }
      }
      setLoading(false);
      toast.success("Your Product is Added");
    } catch (err) {
      console.log("error: ", err);
      setFormErrorMessage(err.message ?? "Something went wrong");
    }
  };
  console.log(category);
  return (
    <div>
      <div>
        {/* <div className="absolute top-[580px]  left-[80px] mq1325:relative  mq1325:top-5 mq1325:left-[8px] h-auto flex mq1500:flex-col flex-row space-x-6">
        <div className="mq1325:w-[370px] mq450:w-[350px] mq450:ml-7 w-[400px] h-[540px] flex justify-between flex-col border-[1px] border-red-700 
        space-y-2 mb-10 p-2 bg-[#eff0f3]">
          <img src={laptop} className="w-full h-[180px]"/>
          <div className="flex flex-row justify-between"><YellowGredb/><YellowGredb/><YellowGredb/></div>
          <h5 className="text-[24px] mq1050:text-[21px] font-poppins">Dell Touch Screen - core i7 
          16GB RAM 512GB</h5>
          <div className="flex justify-between flex-wrap max-w-[360px] space-y-2">
          <p className="text-[16px] mq1050:text-[15px] text-gray-500">Electronics Computer</p>
          <p className="text-[14px] mq1050:text-[13px] text-gray-500">ljhsdgfksjhfgkdjshgfksdjhgfkjdshgkjhgfj<br/>hsdghfffffsdgjfhgfjhgfghf</p>
          </div>

          <div className="flex justify-between flex-row"><h5 className="text-[22px] mq1050:text-[20px]">ADE 980</h5>
          <p >City Name <TiLocation className="text-cyan-400"/></p></div>

          
          <button className="bg-gradient-to-tl from-cyan-300 to-cyan-600 w-full h-[50px] rounded-2xl text-[15px] text-white-A700" >
            View All
          </button>
        </div> */}
        <div className="p-10">
          <Text
            as="p"
            className="mt-[70px] w-[100%] !text-black-900_03 z-[1] font-medium  text-start sm:text-center mq450:text-center  sm:text-[28px] mq450:text-[28px] text-[44px]"
          >
            Preview & Pay
          </Text>
          <Text
            as="p"
            className="w-[100%] mq1500:w-[100%] !text-black-900_87 text-start sm:text-center mq450:text-center z-[1] mt-3 opacity-0.8 sm:text-[14px] mq450:text-[14px] text-[20px] leading-[35px]"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            Lorem Ipsum is simply dummy text of the printing and typesetting
            Lorem Ipsum is simply dummy text of the printing and typesetting
            Lorem Ipsum 
          </Text>
        </div>
        <div className="flex flex-row p-11  space-x-10 mq450:space-x-2 mq750:space-x-5 mq825:space-x-10  mq750:flex-col">
          <div className="w-[354.4px] rounded-mid-5 bg-white shadow-[0px_0px_8.75px_rgba(0,_0,_0,_0.15)] box-border flex flex-col items-start justify-start pt-[8.80000000000291px] px-[7px] pb-[8.69999999999709px] gap-[8.69999999999709px] max-w-full z-[6] border-[1.3px] border-solid border-gray-100">
            <div className="self-stretch h-[253.8px] relative">
              <ProductSlider
                mainImage={form.mainImage}
                moreImages={form.moreImages || []}
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[14.10000000000582px] box-border gap-[7.80000000000291px] max-w-full">
              <div className="flex flex-row items-start justify-start gap-[8.5px] text-base-8 text-white mq450:flex-wrap">
                <div className="rounded-[8.75px] [background:linear-gradient(90deg,_#fcb100,_#ed893e)] flex flex-row items-start justify-start pt-[5.30000000000291px] px-[17.5px] pb-[5.19999999999709px]">
                  <div className="relative inline-block min-w-[72px]">
                    Premium
                  </div>
                </div>
                <div className="rounded-[8.75px] [background:linear-gradient(90deg,_#fcb100,_#ed893e)] flex flex-row items-start justify-start pt-[5.30000000000291px] px-[17.5px] pb-[5.19999999999709px]">
                  <div className="relative inline-block min-w-[72px]">
                    Premium
                  </div>
                </div>
                <div className="rounded-[8.75px] [background:linear-gradient(90deg,_#fcb100,_#ed893e)] flex flex-row items-start justify-start pt-[5.30000000000291px] px-[17.5px] pb-[5.19999999999709px]">
                  <div className="relative inline-block min-w-[72px]">
                    Premium
                  </div>
                </div>
              </div>
              <div className="self-stretch relative leading-[35.01px] font-semibold mq450:text-xl mq450:leading-[28px]">
                {form.title}
              </div>
              <div className="w-[328.2px] flex flex-col items-start justify-start pt-0 px-0 pb-[5.099999999991269px] box-border gap-[13.30000000000291px] max-w-full text-mid-5 text-gray-1100">
                <div className="relative">
                  {category} - {subcategory}
                </div>
                <div className="self-stretch relative text-base-8 leading-[21.88px] text-gray-1200">
                  {form.description}
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                <div className="flex-1 relative leading-[35.01px] font-semibold shrink-0 [debug_commit:612783b] mq450:text-xl mq450:leading-[28px]">
                  AED {form.price}
                </div>
                <div className="flex flex-col items-start justify-start pt-[4.400000000008731px] px-0 pb-0 ml-[-113px] text-mid-5 text-gray-1100">
                  <div className="flex flex-row items-start justify-start gap-[8.69999999999709px] shrink-0 [debug_commit:612783b]">
                    <div className="relative">{form.city}</div>
                    <div className="h-[23.6px] flex flex-col items-start justify-start pt-[2.599999999991269px] px-0 pb-0 box-border">
                      <img
                        className="w-[21px] h-[21px] relative"
                        loading="lazy"
                        alt=""
                        src="/vuesaxboldlocation1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-mid-5 [background:linear-gradient(94.43deg,_#0b90af,_#20c5f2)] shadow-[0px_0px_2.63px_rgba(0,_0,_0,_0.1)] flex flex-row items-start justify-start pt-[14.89999999999418px] pb-[14.400000000008731px] pr-[133px] pl-[123.29999999999563px] box-border whitespace-nowrap max-w-full text-2xl text-white mq450:pl-5 mq450:pr-5 mq450:box-border">
              <div className="h-[61.3px] w-[336.9px] relative rounded-mid-5 [background:linear-gradient(94.43deg,_#0b90af,_#20c5f2)] shadow-[0px_0px_2.63px_rgba(0,_0,_0,_0.1)] hidden max-w-full" />
              <div className="relative z-[1] text-white-A700 cursor-pointer">
                View All
              </div>
            </div>
          </div>
          {!success ? (
            <>
              {" "}
              {/*This is pay now section*/}
              <form>
                <div className="flex-1 flex flex-col items-start justify-start pt-[26px] px-0 pb-0 box-border min-w-[686px] max-w-full text-xl-4 text-gray-600 mq750:min-w-full">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[115px] max-w-full mq750:gap-[29px_115px] mq1050:gap-[57px_115px]">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[5px] mq450:pl-[0px] mq750:pl-[0px] box-border max-w-full">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[30px] max-w-full">
                        <div className="w-[550px] flex flex-col items-start justify-start pt-0 px-0 pb-2.5 box-border gap-[6px] max-w-full">
                          <label
                            htmlFor="cardholderName"
                            className="w-[393.9px] relative text-black-900_03 uppercase inline-block max-w-full mq450:text-base"
                          >
                            Card Holder Name
                          </label>
                          <input
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            style={{ borderBottom: "1px solid gray" }}
                            id="cardholderName"
                            className="
                 
                 self-stretch h-[46px]  relative text-9xl-1 text-gray-500 "
                            defaultValue="Anne Jenny"
                          />
                        </div>
                        <div className="w-[681.4px] flex flex-col items-start justify-start pt-0 px-0 pb-[10.89999999999418px] box-border gap-[9.80000000000291px] max-w-full">
                          <label
                            htmlFor="cardNumber"
                            className="w-[393.9px] text-black-900_03 relative uppercase inline-block max-w-full mq450:text-base"
                          >
                            Card Number
                          </label>

                          <CardNumberElement
                            style={{ borderBottom: "1px solid gray" }}
                            id="card-nr"
                            className="self-stretch relative text-9xl-1 text-gray-500 font-comfortaa  border-solid border-b-[1px] border-gray-500 "
                          />
                        </div>
                        <div className="self-stretch flex flex-row mq1325:flex-col items-start justify-start gap-[50px] max-w-full mq750:gap-[50px_25px] mq1050:flex-wrap">
                          <ExpDateInput expDate="06/27" />

                          <CvvInput cvv="262" />
                        </div>
                        <div className="w-full flex flex-row items-center gap-5 justify-center py-0 pr-[27px] pl-[20.80000000000291px] box-border max-w-full text-[15.3px]">
                          <input
                            id="checkbox1"
                            type="checkbox"
                            checked={save}
                            onChange={handleSaveCardChange}
                            className="bg-white-A700 border-[3px] border-solid rounded border-r-black-900_03"
                          />

                          <label
                            htmlFor="checkbox1"
                            className="flex-1 relative capitalize shrink-0"
                          >
                            Save card details
                          </label>
                        </div>
                        {formErrorMessage && (
                          <label className=" text-xs text-red-500">
                            {formErrorMessage}
                          </label>
                        )}
                      </div>
                    </div>
                    <div
                      onClick={handleSubmit}
                      className="rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-700 shadow-md flex flex-row items-start justify-start mq800:pt-[13px] mq800:px-[45px] mq800:pb-[8px] pt-[23px] px-[76px] pb-[22px] whitespace-nowrap z-[4] mq800:text-9xl text-11xl text-white mq450:pl-5 mq450:pr-5 mq450:box-border"
                    >
                      <div className="relative text-white-A700 cursor-pointer">
                        Pay Now
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </>
          ) : (
            <div className="flex flex-col p-11 w-full gap-8 mq450:space-x-2 mq750:space-x-5 mq825:space-x-10  mq750:flex-col">
              {/*This is pay now section*/}

              <h1 className="text-[38px] font-medium font-poppins">
                Thank You
              </h1>
              <p className="text-[20px] text-gray-500">
                Lorem Ipsum is simply dummy text of the <br />
                printing and typesetting Lorem Ipsum is <br />
                simply dummy text of the printing and typesetting Lorem{" "}
              </p>
              <button
                onClick={() => navigate("/")}
                className="bg-gradient-to-br from-cyan-600 to-cyan-400 w-[150px] h-[60px] rounded-2xl text-white-A700 text-[20px]"
              >
                Go To Home
              </button>

              {/* <div className="w-[270px] h-[400px] flex flex-col justify-between">
          <h1 className="text-[38px] font-medium font-poppins">Thank You</h1>
          <p className="text-[20px] text-gray-500">
            Lorem Ipsum is simply dummy text of the <br />
            printing and typesetting Lorem Ipsum is <br />
            simply dummy text of the printing and typesetting Lorem{" "}
          </p>
          <button className="bg-gradient-to-br from-cyan-600 to-cyan-400 w-[150px] h-[60px] rounded-2xl text-white-A700 text-[20px]">
            Go To Home
          </button>
        </div> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ExpDateInput = ({ expDate }) => {
  return (
    <div className="relative">
      <label
        htmlFor="expDate"
        className="uppercase text-black-900_03 inline-block max-w-full mq450:text-base"
      >
        Exp Date
      </label>

      <CardExpiryElement
        id="card-exp"
        className=" relative text-9xl-1 text-gray-500 font-comfortaa border-solid border-b-[1px] border-gray-500 "
      />
    </div>
  );
};

const CvvInput = ({ cvv }) => {
  return (
    <div className="relative">
      <label
        htmlFor="cvv"
        className="uppercase text-black-900_03 inline-block max-w-full mq450:text-base"
      >
        CVV
      </label>

      <CardCvcElement
        id="card-cvc"
        style={{ borderBottom: "1px solid gray" }}
        className=" relative text-9xl-1 text-gray-500 font-comfortaa border-solid border-b-[1px] border-gray-500 "
      />
    </div>
  );
};

export default PostAddPayment;
