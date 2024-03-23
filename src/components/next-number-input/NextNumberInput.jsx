import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import { Controller, useForm } from "react-hook-form";
import "./NextNumberInput.css";
import { Text } from "components";
const NextNumberInput = () => {
  const [phoneNumber, setPhoneNumber] = useState(""); // State for phone number
  const [country, setCountry] = useState(""); // State for country
  const {
    control,
    formState: { errors },
  } = useForm();

  const handleChange = (value, data, event, formattedValue) => {
    console.log({ value, data, event, formattedValue });
    // setPhoneNumber(value); // Set phone number
    // setCountry(country); // Set country
  };

  return (
    <div>
      <Text
        as="p"
        className="mt-8 mb-[9px]  ml-1.5 !text-black-900_99 opacity-0.7  "
      >
        Enter Your Phone number
      </Text>
      <div>
        <Controller
          control={control}
          name="phoneNumber"
          render={({ field: { ref, value } }) => (
            <PhoneInput
              ref={ref}
              country={"us"}
              value={phoneNumber}
              onChange={handleChange} // Set phone number and country when changed
              placeholder="Phone Number"
              buttonStyle={{
                border: "none",
                outline: "none",
                borderRadius: "15px 0px 0px  15px",
                backgroundColor: "#D9D9D933",
              }}
              dropdownStyle={{
                "&:hover": "none",
                display: "block",
                width: 600,
                zIndex: 9999,
              }}
              containerStyle={{
                display: "flex",
                width: 600,
                fontSize: "25px",
                background: "#FFFFFF",
                borderRadius: "15px",
              }}
              inputStyle={{
                height: 80,
                fontSize: "25px",
                width: "100%",
                border: "none",
                "&:focus": { outline: "none" },
                outline: "none",
                borderRadius: "15px",
                display: "block",
                background: "#D9D9D933",
              }}
            />
          )}
        />

        {errors.phoneNumber?.message && (
          <p
            className="xs absolute bottom-[-20px] text-[#ef4c4c] "
            fontSize="xs"
            bottom="-19px"
            position="absolute"
            color="#E85A2D"
          >
            <>Please enter valid phone number</>
          </p>
        )}
      </div>
    </div>
  );
};

export default NextNumberInput;
