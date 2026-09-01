import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { Toaster } from "react-hot-toast";
import {Provider} from "react-redux"
import store from "./store/store.js"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ScrollToTop from "./components/ScrollToTop.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <ScrollToTop />
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <App />
      <Toaster/>
    </QueryClientProvider>
    </Provider>
  </BrowserRouter>,
);
