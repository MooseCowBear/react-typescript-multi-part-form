import { Sidebar } from "./layout/Sidebar";
import { Form } from "./layout/Form";
import { StepProvider } from "./contexts/StepContext";
import { ThankYou } from "./components/ThankYou";

function App() {
  return (
    <StepProvider>
      <Sidebar />
      <Form />
      <ThankYou />
    </StepProvider>
  );
}

export default App;
