import { Text } from "components";
import PinInputfunc from "components/PinInput";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import PinInput from "react-pin-input";
const OtpInput = () => {
  const {
    control,
    formState: { errors },
  } = useForm();
  return (
    <div className="relative mt-9">
      <Controller
        name="code"
        control={control}
        defaultValue=""
        render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { error },
        }) => (
          <div>
            <PinInput
              length={6}
              initialValue=""
              secret
              secretDelay={100}
              onChange={(value, index) => {}}
              type="numeric"
              inputMode="number"
              value={value}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: 600,
              }}
              inputStyle={{
                width: 80,
                height: 80,
                display: "block",
                borderColor: "transparent",
                backgroundColor: "rgba(217, 217, 217, 0.21)",
                borderRadius: "8.38px",
              }}
              inputFocusStyle={{ borderColor: "blue" }}
              onComplete={(value, index) => {}}
              autoSelect={true}
              regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
            />
          </div>
        )}
      />
      {errors.code?.message && (
        <Text
          className="xs absolute bottom-[-20px] text-[#ef4c4c] "
          fontSize="xs"
          bottom="-19px"
          position="absolute"
          color="#E85A2D"
        >
          <>Please enter valid Code</>
        </Text>
      )}
    </div>
  );
};

export default OtpInput;
