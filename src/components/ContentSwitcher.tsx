"use client"

import Dashboard from "./Dashboard";
import LandingPage from "./landing/LandingPage";
import { useUser } from "./login/UserContext";

console.log(typeof useUser)

const ContentSwitcher = () => {
    const { hasUser } = useUser();
    return hasUser ? <Dashboard /> : <LandingPage />;
};

export default ContentSwitcher;