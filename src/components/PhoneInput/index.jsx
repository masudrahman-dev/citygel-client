import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import "react-phone-input-2/lib/material.css";

const PhoneInputfunc = () => {
  const [value, setValue] = useState();
  return (
    <div name="phoneNumber" placeholder="+1">
      {/* <Box
              position={'relative'}
              mt={'27px'}
              display={{ base: 'block', md: 'flex' }}
              gap={'24px'}>
              <Controller
                control={control}
                name="phoneNumber"
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { error }
                }) => (
                  <PhoneInput
                    international
                    value={value}
                    className={
                      value && error === undefined
                        ? 'is-valid'
                        : error
                        ? 'has-error'
                        : value && 'is-valid'
                    }
                    placeholder="Phone Number"
                    onChange={onChange}
                  />
                )}
              />

              {errors.phoneNumber?.message && (
                <Text fontSize="xs" bottom="-20px" position="absolute" color="#E85A2D">
                  <>Please enter valid phone number</>
                </Text>
              )}
            </Box> */}
      <PhoneInput country={"us"} value={value} onChange={(e) => setValue(e)} />
      {/* {value} */}
    </div>
  );
};

export default PhoneInputfunc;
