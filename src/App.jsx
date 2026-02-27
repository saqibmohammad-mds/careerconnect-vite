import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import FairsListingPage from "./pages/FairsListingPage";
import LoginPage from "./pages/LoginPage";
import LobbyPage from "./pages/LobbyPage";
import BoothPage from "./pages/BoothPage";
import FairDetailsPage from "./pages/FairDetailsPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import UserDashboardPage from "./pages/UserDashboardPage";
import ChatPage from "./pages/ChatPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/fairs" element={<FairsListingPage />} />
      <Route path="/dashboard" element={<UserDashboardPage />} />
      <Route path="/admin" element={<AdminDashboardPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/lobby" element={<LobbyPage />} />
      <Route path="/booth" element={<BoothPage />} />
      <Route path="/fair-details" element={<FairDetailsPage />} />
    </Routes>
  );
}

export default App;