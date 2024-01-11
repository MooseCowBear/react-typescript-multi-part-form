import { Sidebar } from "./layout/Sidebar";
import { Form } from "./layout/Form";
import { StepProvider } from "./contexts/StepContext";
import { FormButtonsWrapper } from "./components/FromButtonsWrapper";

function App() {
  return (
    <StepProvider>
      <Sidebar />
      <div className="bg-neutral-300 md:bg-neutral-100 relative md:h-full p-5 md:p-0 min-h-[520px]">
        <Form />
        <FormButtonsWrapper classes="absolute p-3 bg-neutral-100 bottom-0 left-0 block w-full md:hidden" />
      </div>
    </StepProvider>
  );
}

export default App;
