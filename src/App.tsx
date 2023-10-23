import { Buttons } from "./sections/Buttons";
import { Inputs } from "./sections/Inputs";
import { RadioGroup } from "./sections/RadioGroup";

function App() {
  return (
    <>
      <Buttons />
      <hr style={{ margin: "40px 0" }} />
      <RadioGroup />
      <hr style={{ margin: "40px 0" }} />
      <Inputs />
      <hr style={{ margin: "40px 0" }} />
    </>
  );
}
export default App;
