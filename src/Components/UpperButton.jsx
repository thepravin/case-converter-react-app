import * as React from "react";
import { Button } from "@mui/base/Button";

export default function UpperButton({ myText, setMyText }) {
  const convertLowerCase = () => {
    setMyText(myText.toUpperCase());
  };

  return (
    <>
      <Button className="btn-lowerCase btn" onClick={convertLowerCase}>
        Upper Case
      </Button>
    </>
  );
}
