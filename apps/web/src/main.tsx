import { createRoot } from "react-dom/client";
import "./style.css";
import { Counter } from "@repo/ui";

const App = () => (
  <div>
    <div className="card">
      <Counter />
    </div>
  </div>
);

createRoot(document.getElementById("app")!).render(<App />);
