
import * as React from "react";
import { Button } from "@mui/base/Button";

export default function ReverseButton({ myText, setMyText }) {
  const convertLowerCase = () => {
        var spliteString = myText.split('');
        var reverseArray = spliteString.reverse();
        var joinArray = reverseArray.join('');
        setMyText(joinArray);
  };

  return (
    <>
      <Button className="btn-lowerCase btn" onClick={convertLowerCase}>
        Reverse Text
      </Button>
    </>
  );
}
