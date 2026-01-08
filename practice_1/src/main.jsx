import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import ErrorBoundary from "./ErrorBoundary.jsx";
import UserContextProvider from "./utills/Context/userContext.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <ErrorBoundary>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </ErrorBoundary>
  // </StrictMode>
);
