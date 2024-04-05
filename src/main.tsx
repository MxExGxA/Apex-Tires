import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ReactLenis } from "@studio-freight/react-lenis";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ReactLenis root>
    <App />
  </ReactLenis>
);
