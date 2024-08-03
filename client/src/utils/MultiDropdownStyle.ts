import { StylesConfig } from "react-select";
import { OptionType } from "./interfaces";

export const customStyles: StylesConfig<OptionType> = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "#0b0025",
    color: "aqua",
    borderColor: "aqua",
    boxShadow: state.isFocused ? "0 0 0 1px #2684FF" : "none",

    "&:hover": {
      borderColor: state.isFocused ? "#aqua" : "#d3e0b4",
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#fff",
  }),
  valueContainer: (provided) => ({
    ...provided,
    color: "aqua",
    maxHeight: "5rem",
    overflow: "scroll",
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "#fff",
    borderRadius: "4px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? "#2e016c"
      : state.isFocused
      ? "#2e016c"
      : "#fff",
    color: state.isSelected || state.isFocused ? "#fff" : "#333",
    "&:active": {
      backgroundColor: "#2e016c",
      color: "#fff",
    },
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: "#2e016c",
    color: "#fff",
    fontSize: "1.2rem",
    padding: "0rem 0rem 0rem 0.7rem",
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: "#fff",
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: "#fff",
    ":hover": {
      backgroundColor: "#610094",
      color: "#fff",
    },
  }),
};
