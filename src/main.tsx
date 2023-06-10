import ReactDOM from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";

import "react-datepicker/dist/react-datepicker.css";

// css
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./assets/css/home.css";

// redux store
import { Provider } from "react-redux";
import { persistor, store } from "./store";
  
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Router from "./Router";
import { persistStore } from "redux-persist";

let presistor = persistStore(store)

const ChakraApp = () => (
    <Provider store={store}>
        <PersistGate persistor={presistor} loading={<></>}>
            <BrowserRouter>
                <Router />
                <Toaster position="bottom-center" toastOptions={{ duration: 5000 }} />
            </BrowserRouter>
        </PersistGate>
    </Provider>
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<ChakraApp />);
