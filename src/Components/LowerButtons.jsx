import * as React from "react";
import { Button } from "@mui/base/Button";

export default function LowerButtons({ myText, setMyText }) {
  const convertLowerCase = () => {
    setMyText(myText.toLowerCase());
  
  };

  return (
    <>
      <Button className="btn-lowerCase btn" onClick={convertLowerCase}>
        Lower Case
      </Button>
    </>
  );
}
