import { Redirect, Route, Routes } from "react-router-dom";

import React, { Suspense, lazy, useContext } from "react";

import "./App.scss";
import Layout from "./components/UI/Layout";
import SideBar from "./components/UI/SideBar/Sidebar";
import IdeaDetail from "./components/pages/IdeaDetail";
import Login from "./components/Login/Login";
import NewLogin from "./components/Login/NewLogin";
import Register from "./components/Login/Register";
import ForgotPassword from "./components/Login/ForgotPassword";
import AuthContext from "./store/auth-context";
import SplashScreen from "./components/pages/SplashScreen";


//Pages name

const Homepage = lazy(() => import("./components/pages/Homepage"));
const LeadBoard = lazy(() => import("./components/pages/LeadBoard"));
const TrackerPage = lazy(() => import("./components/pages/TrackerPage"));
const SubmitIdea = lazy(() => import("./components/pages/SubmitIdea"));
const IdeaPage = lazy(() => import("./components/pages/IdeaPage"));
const ProfileDetails = lazy(() => import("./components/pages/ProfileDetails"));
const AdminDashboard = lazy(() => import("./components/pages/AdminDashboard"));
const SearchResults = lazy(() => import("./components/pages/SearchResults"));
const CloseIdea = lazy(() => import("./components/pages/CloseIdea"));
const NotificationList = lazy(() => import("./components/pages/NotificationDetails"));
const FAQs = lazy(() => import("./components/pages/FAQs"));

function App() {
    const authCtx = useContext(AuthContext);
    const isLoggedIn = authCtx.isLoggedIn;
    return (
        <>
            {!isLoggedIn && (<Routes>
                <Route path="/" element={<NewLogin />} exact />
                <Route path="/reveal" element={<SplashScreen />} />
                <Route path="/register" element={<Register />}  />
                <Route path="/forgotPassword" element={<ForgotPassword />}  />
                <Route path="/reveal" element={<SplashScreen />} />
                </Routes>
                )}
            {isLoggedIn && (<Layout>
                <Suspense
                    fallback={<div className="text-center">Loading.....</div>}>
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/leadboard" element={<LeadBoard />} />
                        <Route path="/tracker" element={<TrackerPage />} />
                        <Route path="/submitIdea" element={<SubmitIdea />} />
                        <Route path="/ideaPage" element={<IdeaPage />} />
                        <Route path="/ideaDetail" element={<IdeaDetail />} />
                        <Route path="/profileDetail" element={<ProfileDetails />} />
                        <Route path="/adminDashboard" element={<AdminDashboard />} />
                        <Route path="/searchResults" element={<SearchResults />} />
                        <Route path="/closeIdea" element={<CloseIdea />} />
                        <Route path="/notification" element={<NotificationList />} />
                        <Route path="/myProfile" element={<ProfileDetails />} />
                        <Route path="/faqs" element={<FAQs />} />
                    </Routes>
                </Suspense>
            </Layout>)
            }
        </>
    );
}

export default App;
