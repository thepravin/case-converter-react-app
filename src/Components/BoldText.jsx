
import { Button } from "@mui/base/Button";


export default function BoldText({convertBold}) {

  return (
    <>
      <Button className="btn-lowerCase btn" onClick={convertBold} >
        Bold Text
      </Button>
    </>
  );
}
