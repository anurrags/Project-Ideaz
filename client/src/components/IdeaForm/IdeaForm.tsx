import { useState } from "react";
import axios from "axios";
import Select, { MultiValue } from "react-select";
import { CardProps, customStyles, OptionType } from "../../utils";
import { dropdownOptions } from "../../utils/data";
import "./ideaForm.css";
import Card from "../card/card";
import { randomUUID } from "crypto";

const url = import.meta.env.VITE_SERVER_URL || "http://localhost:9001";

const IdeaForm = () => {
  const [ideas, setIdeas] = useState<CardProps[] | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: MultiValue<OptionType>;
  }>({
    "Web Tech": [],
    Frontend: [],
    Backend: [],
    Runtime: [],
    Database: [],
    Language: [],
    "AI/ML": [],
    Messaging: [],
    Devops: [],
    "Project Level": [],
    Audience: [],
  });

  const handleChange =
    (dropdown: string) => (selected: MultiValue<OptionType>) => {
      setSelectedOptions((prevState) => ({
        ...prevState,
        [dropdown]: selected,
      }));
    };

  const handleButtonClick = async () => {
    var techStacks: string[] = [];
    Object.entries(selectedOptions).map(([key, valueArray]) => {
      if (key !== "Project Level" && key !== "Audience")
        valueArray.map((item) => techStacks.push(item.value));
    });

    const formData = {
      requestId: randomUUID(),
      techStacks,
      projectLevel: selectedOptions["Project Level"].map((item) => item.value),
      audience: selectedOptions.Audience.map((item) => item.value),
    };

    const response = await axios.post(url, formData);
    if (response.data.message.error !== "") {
      alert(response.data.message.error);
      return;
    }
    const data: CardProps[] = response.data.message.result;
    setIdeas(data);
  };
  return (
    <>
      <div className="Idea-form-container">
        <div className="Idea-form-header-container">
          <h1>Techs and Frameworks</h1>
          <h2>
            Select technologies and frameworks you want to use in your project
          </h2>
        </div>
        <div className="Idea-form-dropdown-container">
          {Object.entries(dropdownOptions).map(([key, options]) => (
            <div className={`${key}-dropdown idea-dropdown`} key={key}>
              <h3>{key}</h3>
              <Select
                isMulti
                options={options}
                value={selectedOptions[key]}
                onChange={handleChange(key)}
                styles={customStyles}
              />
            </div>
          ))}
        </div>
        <div className="form-btn-container">
          <button
            className="idea-form-submit-btn"
            type="submit"
            onClick={handleButtonClick}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="card-main-container">
        {ideas &&
          ideas.map((card, index) => (
            <div className="card-container">
              <Card {...card} key={index} />
            </div>
          ))}
      </div>
    </>
  );
};

export default IdeaForm;
