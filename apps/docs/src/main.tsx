import { createRoot } from "react-dom/client";

const App = () => <div>Hello world</div>;

createRoot(document.getElementById("app")!).render(<App />);
