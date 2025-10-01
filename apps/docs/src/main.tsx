import { createRoot } from "react-dom/client";
import { AmnCounter } from "@repo/design-system";

const App = () => (
  <div>
    <div className="card">
      <AmnCounter />
    </div>
  </div>
);

createRoot(document.getElementById("app")!).render(<App />);
