import { BrowserRouter, Routes, Route, Outlet, useNavigate } from "react-router-dom";
import Login from "./pages/Authentication/Login";
import SignUp from "./pages/Authentication/SignUp";
import FAQ from "./pages/Faq";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import PlansPricing from "./pages/PlansPricing";
import ChartTypes from "./pages/ChartsTypesLogic/ProtectedRoutes/ChartTypes";
import EditChart from "./pages/ChartsTypesLogic/ProtectedRoutes/EditChart";
import UploadChart from "./pages/ChartsTypesLogic/ProtectedRoutes/UploadChart";
import SidebarLayout from "./pages/SidebarLayout";
import Templates from "./pages/Templates";
import TopCharts from "./pages/TopCharts";
import UserAccount from "./pages/user/UserAccount";
import UserFavorite from "./pages/user/UserFavorite";
import UserHistory from "./pages/user/UserHistory";
import UserPayment from "./pages/user/UserPayment";
import UserSubscription from "./pages/user/UserSubscription";
import Yeye from "./pages/ChartsTypesLogic/ProtectedRoutes/Yeye";

// company login

const Router = () => {
    return (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          <Route  path="/"  element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="topcharts" element={<TopCharts />} />
            <Route path="charttypes" element={<ChartTypes />} />
            <Route path="create/:chartName">
              <Route index element={<UploadChart />} />
              <Route path="edit" element={<EditChart />} />
              <Route path="customize" element={<Yeye />} />
            </Route>
            <Route path="plans&pricing" element={<PlansPricing />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="templates" element={<Templates />} />
            <Route path="profile" element={<SidebarLayout />}>
              <Route index element={<UserAccount />} />
              <Route path="history" element={<UserHistory />} />
              <Route path="favorite" element={<UserFavorite />} />
              <Route path="payment" element={<UserPayment />} />
              <Route path="subscription" element={<UserSubscription />} />
            </Route>
          </Route>


          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
    );
};

export default Router;
