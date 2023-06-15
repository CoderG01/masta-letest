import ReactDOM from "react-dom/client";

import "react-datepicker/dist/react-datepicker.css";

// css
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./assets/css/home.css";

// redux store
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";

  
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Router from "./Router";


const ChakraApp = () => (
    <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <Router />
                <Toaster position="bottom-center" toastOptions={{ duration: 5000 }} />
            </BrowserRouter>
        </PersistGate>
    </Provider>
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<ChakraApp />);
