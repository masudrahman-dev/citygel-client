import React from "react";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { languageOptions } from "./data";
const SelectLanguage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log("data:", data);
  };

  const selectLocation = watch("language");

  console.log("selectedLanguage :>> ", selectLocation);

  const formatOptionLabel = ({ value, label, flag }) => (
    <div className="flex items-center justify-between  gap-2">
      <img src={flag} alt={label} />
      <p className="  text-base">{label}</p>
    </div>
  );
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="language"
          control={control}
          defaultValue={languageOptions[0]}
          render={({ field }) => (
            <Select
              {...field}
              classNamePrefix="select"
              isSearchable={true}
              options={languageOptions}
              formatOptionLabel={formatOptionLabel}
              styles={{
                control: (provided, state) => ({
                  ...provided,
                  width: 180,
                  height: 50,
                  borderRadius: "9999px",
                  backgroundColor: "transparent",
                  borderColor: "white",
                  "&:focus": { outline: "none" },
                  "&:hover": { backgroundColor: "transparent" },
                }),

                option: (provided, state) => ({
                  ...provided,
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "3px",
                  backgroundColor: state.isSelected ? "#0B90AF" : "",
                  color: state.isSelected ? "white" : "",
                }),

                singleValue: (base, state) => ({
                  ...base,
                  color: "white",
                }),
                menuList: (base, state) => ({
                  ...base,
                  padding: "0px",
                }),

                clearIndicator: (provided, state) => ({
                  ...provided,
                  display: "none",
                }),

                dropdownIndicator: (provided, state) => ({
                  ...provided,
                  color: "#FFFFFF",
                }),

                indicatorSeparator: (provided, state) => ({
                  ...provided,
                  display: "none",
                }),
              }}
            />
          )}
        />
      </form>
    </>
  );
};

export default SelectLanguage;
