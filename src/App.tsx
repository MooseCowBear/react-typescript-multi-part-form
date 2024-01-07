import { useState } from "react";
import { Sidebar } from "./components/Sidebar";

function App() {
  const [screen, setScreen] = useState(1);

  return (
    <>
      <Sidebar screen={screen} />
    </>
  );
}

export default App
