import PinInput from "react-pin-input";
import React from "react";

const PinInputfunc = ({ register }) => {
  return (
    <div>
      <PinInput
        length={6}
        initialValue=""
        secret
        secretDelay={100}
        onChange={(value, index) => {}}
        type="numeric"
        inputMode="number"
        style={{ padding: "15px", paddingLeft: "40px" }}
        inputStyle={{ borderColor: "#0B90AF", borderRadius: "10px" }}
        inputFocusStyle={{ borderColor: "blue" }}
        onComplete={(value, index) => {}}
        autoSelect={true}
        regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
      />
    </div>
  );
};

export default PinInputfunc;
