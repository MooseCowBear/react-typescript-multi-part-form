import { Sidebar } from "./layout/Sidebar";
import { Form } from "./layout/Form";
import { StepProvider } from "./contexts/StepContext";

function App() {
  return (
    <StepProvider>
      <Sidebar />
      <Form />
    </StepProvider>
  );
}

export default App;
