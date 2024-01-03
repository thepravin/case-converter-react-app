import React, { useRef, useState } from "react";
import { styled } from "@mui/system";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";

import LowerButtons from "./LowerButtons";
import UpperButton from "./UpperButton";
import ReverseButton from "./ReverseButton";
import BoldText from "./BoldText";

export default function Input() {
  const [myText, setMyText] = useState("");


  const handleInputText = (event) => {
    setMyText(event.target.value);
  };



  return (
    <>
      <h1 className="heading">Case Converter</h1>
      <TextareaAutosize
        placeholder="Enter text..."
        minRows={20}
        minLength={200}
        value={myText}
        onChange={handleInputText}
     
      ></TextareaAutosize>

      <div className="button-container ">
        <LowerButtons myText={myText} setMyText={setMyText} />
        <UpperButton myText={myText} setMyText={setMyText} />
        <ReverseButton myText={myText} setMyText={setMyText} />
      
      </div>
    </>
  );
}

const black = {
  100: "#E6E6E6",
  200: "#CCCCCC",
  400: "#666666",
  500: "#000000",
  600: "#000000",
  900: "#000000",
};

const grey = {
  50: "#F5F5F5",
  100: "#EEEEEE",
  200: "#E0E0E0",
  300: "#BDBDBD",
  400: "#9E9E9E",
  500: "#757575",
  600: "#616161",
  700: "#424242",
  800: "#212121",
  900: "#121212",
};

const TextareaAutosize = styled(BaseTextareaAutosize)(
  ({ theme }) => `
    height: 200px !important;
    width: 629px;
    display: flex;
    padding: 10px 12px;
    justify-content: center;
    align-items: center;   
    font-size: 1.5rem;
    font-weight: 400;   
    margin:auto;
    border-radius: 8px;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 5px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${
      theme.palette.mode === "dark" ? grey[900] : grey[50]
    };
    
    &:hover {
      border-color: ${black[400]};
    }

    &:focus {
      border-color: ${black[400]};
      box-shadow: 0 0 0 3px ${
        theme.palette.mode === "dark" ? black[600] : black[200]
      };
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `
);
