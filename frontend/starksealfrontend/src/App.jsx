import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Home from "./pages/home/home.jsx";
import Nav from "./components/layout/nav.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen font-display">
      <div className="text-green-400 underline">hello test</div>
    </div>
  );
}

export default App;
