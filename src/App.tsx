import { Buttons } from "./sections/Buttons";
import { Modals } from "./sections/Modals";
// import { Inputs } from "./sections/Inputs";
import { RadioGroup } from "./sections/RadioGroup";

function App() {
  return (
    <>
      <Buttons />
      <hr style={{ margin: "40px 0" }} />
      <RadioGroup />
      <hr style={{ margin: "40px 0" }} />
      <Modals />
      <hr style={{ margin: "40px 0" }} />
    </>
  );
}
export default App;
