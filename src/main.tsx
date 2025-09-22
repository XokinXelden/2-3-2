import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./components/App/App.tsx";
import { MantineProvider } from "@mantine/core";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={{ fontFamily: `'SemyBold` }}>
      <App />
    </MantineProvider>
  </StrictMode>
);
